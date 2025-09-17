import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { IoSend } from "react-icons/io5";
import { RiVoiceprintFill } from "react-icons/ri";

const Chatbot = ({ currentUser }) => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = currentUser?.id;
  const chatEndRef = useRef();

  useEffect(() => {
    const fetchHistory = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`/api/chat?userId=${userId}`);
        const data = await res.json();

        if (data.success) {
          setChatHistory(
            Array.isArray(data.data.messages) ? data.data.messages : []
          );
          setUserDetails(data.data.user || null);
          console.log(data.data.user);
        }
      } catch (err) {
        console.log("Fetch history error:", err);
      }
    };

    fetchHistory();
  }, [userId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage = { role: "user", content: question };
    setChatHistory((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, message: question }),
      });

      const data = await res.json();
      if (data.success) {
        setChatHistory(
          Array.isArray(data.data.messages) ? data.data.messages : []
        );
        setUserDetails(data.data.user || null);
      } else {
        console.log("Send message error:", data.error);
      }
    } catch (err) {
      console.log("Send message error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md fixed bottom-16 right-5 w-100 h-96 my-gradient rounded-2xl shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center mt-2">
        <div className="h-0.5 w-5 rounded bg-white" aria-hidden="true" />
        <h6 className="my-1 text-white text-xs">Noor AI</h6>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {chatHistory.map((msg, i) => {
          const profilePicture =
            msg.role === "user" && userDetails?.image
              ? userDetails?.image
              : "/Dentnoor.png";
          return (
            <div
              key={i}
              className={`p-2 flex items-start gap-2.5 text-xs ${
                msg.role === "user" ? "self-end" : "self-start"
              } text-white`}
            >
              <Image
                src={profilePicture}
                alt="Profile picture"
                className="rounded-full"
                width={30}
                height={30}
              />
              <div>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="p-2 flex items-start gap-2.5 text-xs self-start text-white">
            <Image
              src="/Dentnoor.png"
              alt="AI typing"
              className="rounded-full"
              width={30}
              height={30}
            />
            <div className="px-3 py-2 rounded-2xl  text-[#ffffff] max-w-xs animate-pulse italic">
              Thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {/* Input with button inside */}
      <form onSubmit={sendMessage} className="relative p-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask Noor AI..."
          className="w-full pr-10 rounded-2xl px-3 py-2 text-xs outline-none bg-[#ffffff73] text-white placeholder:text-white"
        />
        <button
          type="submit"
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#ffffff] ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? <RiVoiceprintFill size={18} /> : <IoSend size={18} />}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
