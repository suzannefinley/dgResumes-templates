import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/drizzle/schema';
import * as relations from '@/drizzle/relations';

//export const db = drizzle(dbconnection, { schema });

let sslmode = '';
if (process.env.CURRENT_ENVIRONMENT === 'PROD') {
  sslmode = '?sslmode=require';
}

export const dbconnection = process.env.DATABASE_URL! + sslmode;

const db = drizzle(dbconnection, {
  schema: { ...schema, ...relations },
  logger: false
});

export default db;
