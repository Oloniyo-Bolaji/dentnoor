import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { db } from "@/lib/database";
import { chatHistories } from "@/lib/database/schema";
import { eq, sql } from "drizzle-orm";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/* ========= GET =========
   Fetch chat history + user details
   Usage: GET /api/chat?userId=xxxx
*/
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ success: false, error: "Missing userId" }, { status: 400 });
    }

    const history = await db.query.chatHistories.findFirst({
      where: eq(chatHistories.userId, userId),
      with: { user: true },
    });

    return NextResponse.json({
      success: true,
      data: {
        messages: Array.isArray(history?.messages) ? history.messages : [],
        user: history?.user || null,
      },
    });
  } catch (err) {
    console.error("Chat GET Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

/* ========= POST =========
   Add user message + AI reply, return updated history + user
*/
export async function POST(req) {
  try {
    const { userId, message } = await req.json();

    if (!userId || !message) {
      return NextResponse.json({ success: false, error: "Missing userId or message" }, { status: 400 });
    }

    // Generate AI response
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "model",
          parts: [
            {
              text: "You are an oral health assistant. Only answer questions about dentistry, oral hygiene, gum care, cavities, toothaches, braces, and dental health. If unrelated, politely decline.",
            },
          ],
        },
        { role: "user", parts: [{ text: message }] },
      ],
    });

    const aiReply = response.text || "Sorry, I couldn’t generate a reply.";

    const newMessages = [
      { role: "user", content: message },
      { role: "ai", content: aiReply },
    ];

    // Upsert chat history
    await db
      .insert(chatHistories)
      .values({
        userId,
        messages: newMessages,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: chatHistories.userId,
        set: {
          messages: sql`${chatHistories.messages} || ${JSON.stringify(newMessages)}::jsonb`,
          updatedAt: new Date(),
        },
      });

    // Return updated history with user details
    const history = await db.query.chatHistories.findFirst({
      where: eq(chatHistories.userId, userId),
      with: { user: true },
    });

    return NextResponse.json({
      success: true,
      data: {
        messages: Array.isArray(history?.messages) ? history.messages : [],
        user: history?.user || null,
      },
    });
  } catch (err) {
    console.error("Chat POST Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
