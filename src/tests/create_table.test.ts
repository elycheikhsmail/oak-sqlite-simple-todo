import * as t from "https://deno.land/std@0.102.0/testing/asserts.ts";
import appsArray from "../config/installed-apps.ts";
import { createAllTables } from "../manage/create-all-tables.ts";
//import { delay } from "https://deno.land/std@0.102.0/async/delay.ts";


Deno.chdir("../src");
Deno.env.set("OAK_SQLITE_FILE","_testdb.db")
let fileName = "_testdb.db";
const n = Deno.env.get( "OAK_SQLITE_FILE");
if (n) fileName = n;
// deleting  sqlite-test-file if exist
 
const b = createAllTables(appsArray, fileName);
Deno.test(
  "should create db ",
  () => {
    t.assertEquals(true, b);
  },
);
 