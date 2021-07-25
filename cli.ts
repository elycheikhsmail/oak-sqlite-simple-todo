import { createAllTables } from "./src/manage/create-all-tables.ts";
//import {  } from "./oak-auth-sqlite-app/config/";
import appsArray from "./src/config/installed-apps.ts";
Deno.chdir("./src")

createAllTables(appsArray)
 

// deno run --allow-all cli.ts