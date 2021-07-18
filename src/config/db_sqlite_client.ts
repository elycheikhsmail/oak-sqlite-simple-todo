import { DB } from "../deps.ts"
const sqlitePath = "./../testsql.db"  // relative path
const clientSqlite = new DB(sqlitePath); 
 export default clientSqlite
   