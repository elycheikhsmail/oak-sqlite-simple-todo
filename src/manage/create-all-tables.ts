import { createTables } from "./create-tables.ts";
import{ getDbClient, dbFileName} from "../config/db_sqlite_client.ts";

export function createAllTables(appsArray: string[]) {
  console.log({appsArray})
  appsArray.forEach(
    async (appName) => { 
      const path = `./${appName}/config/create-tables.sql`; 
      const dbClient = getDbClient(dbFileName)
      await createTables(dbClient, path);
      console.log(`tables for ${appName} are created`)
    },
  );
  console.log("tables was created")
}
