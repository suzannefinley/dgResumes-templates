import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/drizzle/schema';
import * as relations from '@/drizzle/relations';
import {
  drizzle as neonDrizzle,
  type NeonHttpDatabase
} from 'drizzle-orm/neon-http';
import {
  drizzle as localDrizzle,
  type NodePgDatabase
} from 'drizzle-orm/node-postgres';

//export const db = drizzle(dbconnection, { schema });

// let sslmode = '';
// if (process.env.CURRENT_ENVIRONMENT === 'PROD') {
//   sslmode = '?sslmode=require';
// }

let dbconnection = '';
let db:
  | NeonHttpDatabase<typeof schema & typeof relations>
  | NodePgDatabase<typeof schema & typeof relations>;
if (process.env.CURRENT_DATABASE === 'LOCAL') {
  dbconnection = process.env.DATABASE_LOCAL_URL!;
  db = localDrizzle(dbconnection, {
    schema: { ...schema, ...relations },
    logger: false
  });
} else {
  const sql = neon(process.env.DATABASE_NEON_URL!);
  db = neonDrizzle({
    client: sql,
    schema: { ...schema, ...relations },
    logger: false
  });
}

export default db;
