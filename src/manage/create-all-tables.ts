import { createTables } from "./create-tables.ts";
import dbClient from "../config/db_sqlite_client.ts";

export function createAllTables(appsArray: string[]) {
  appsArray.forEach(
    async (appName) => { 
      const path = `./${appName}/config/create-tables.sql`; 
      await createTables(dbClient, path);
      console.log(`tables for ${appName} are created`)
    },
  );
  console.log("tables was created")
}
