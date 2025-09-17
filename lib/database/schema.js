import { pgTable, uuid, varchar, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// USERS TABLE
export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  image: text("image"), // profile picture
  createdAt: timestamp("created_at").defaultNow(),
});

// CHAT HISTORIES TABLE (1-to-1 with users)
export const chatHistories = pgTable("chat_histories", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  messages: jsonb("messages").default([]).notNull(), // array of { role, content }
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Relations ---
export const usersRelations = relations(usersTable, ({ one }) => ({
  chatHistory: one(chatHistories, {
    fields: [usersTable.id],
    references: [chatHistories.userId],
  }),
}));

export const chatHistoriesRelations = relations(chatHistories, ({ one }) => ({
  user: one(usersTable, {
    fields: [chatHistories.userId],
    references: [usersTable.id],
  }),
}));
