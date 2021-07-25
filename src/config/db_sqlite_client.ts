import { DB } from "../deps.ts"
 

 export function getDbClient(path:string){
    const clientSqlite = new DB( path ); 
    return clientSqlite

 }

let dbFileName =  "mydb.db"

const n = Deno.env.get("OAK_SQLITE_FILE")
if(n) dbFileName = n 
 
export{ dbFileName }