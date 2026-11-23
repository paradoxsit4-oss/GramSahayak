
import {
  sqliteTable,
  text,
  integer,
} from "drizzle-orm/sqlite-core";

export const complaints = sqliteTable("complaints", {
  id: text("id").primaryKey(),

  name: text("name").notNull(),

  phone: text("phone").notNull(),

  category: text("category").notNull(),

  location: text("location").notNull(),

  description: text("description").notNull(),

  language: text("language").notNull(),

  status: text("status").notNull().default("Submitted"),

  priority: text("priority").notNull().default("Pending"),

  createdAt: integer("created_at").notNull(),
});
