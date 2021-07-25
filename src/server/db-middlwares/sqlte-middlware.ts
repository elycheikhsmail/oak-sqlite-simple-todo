// recuper le client sqlite  
 
import { DB } from "../../deps.ts";
import {getDbClient,dbFileName} from "../../config/db_sqlite_client.ts";
console.log("sqlite client middlewaere")
//puis l'injecter dans le state du middlweare
const p = Deno.cwd()
console.log({p})
import { Context } from "./../../deps.ts";  
 
 

export async function setDbClientMiddlware(
  ctx: Context<{ dbClient: DB|null }>,
  next: () => Promise<unknown>
) {
  console.log("start sqlite middelwear")
  
  try {  
    //console.log({data})
    ctx.state.dbClient = getDbClient(dbFileName)
    //getDbClient("mydb.db")
    await next();
  } catch (error) {
    console.log(error)
    throw error;
  }
}

 