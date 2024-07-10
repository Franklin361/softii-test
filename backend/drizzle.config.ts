import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './schema/*',
  dialect: 'sqlite',
  out: './drizzle',
  dbCredentials: {
    url: 'sqlite.db',
  },
  verbose: true,
  strict: true,
});
