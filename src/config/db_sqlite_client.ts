import { DB } from "../deps.ts"
 

 export function getDbClient(path:string){
    const clientSqlite = new DB( path ); 
    return clientSqlite

 }

const dbFileName = Deno.env.get("dbfile")||"mydb.db"
export{ dbFileName}