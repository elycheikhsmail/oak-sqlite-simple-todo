// recuper le client sqlite  
 
import { DB } from "../../deps.ts";
import client from "./../../config/db_sqlite_client.ts";
//puis l'injecter dans le state du middlweare
import { Context } from "./../../deps.ts";  
 
 

export async function setDbClientMiddlware(
  ctx: Context<{ dbClient: DB|null }>,
  next: () => Promise<unknown>
) {
  console.log("start handleauthHeader middelwear")
  
  try {  
    //console.log({data})
    ctx.state.dbClient = client
    await next();
  } catch (error) {
    throw error;
  }
}

 