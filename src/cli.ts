import { createAllTables } from "./manage/create-all-tables.ts";
//import {  } from "./oak-auth-sqlite-app/config/";
import appsArray from "./config/installed-apps.ts";

createAllTables(appsArray)
 

// deno run --allow-all cli.ts