import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const postsTable = pgTable('blog_posts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  author: text(),
  post: text(),
});
