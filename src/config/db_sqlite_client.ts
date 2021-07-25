import { DB } from "../deps.ts"
 

 export function getDbClient(path:string){
    const clientSqlite = new DB( path ); 
    return clientSqlite

 }

let dbFileName =  "mydb.db"
const v = Deno.env.get("dbfile")   
if( v != undefined){
   dbFileName = v
} 
export{ dbFileName }