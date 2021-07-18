import { DB } from "https://deno.land/x/sqlite@v2.4.2/mod.ts";
 
export async function readFile(path:string) {
    const decoder = new TextDecoder("utf8");
    const data = await Deno.readFile(path);
    const text = String(decoder.decode(data));
    return text
}

export async function createTables(dbClient:DB,path: string) {
  const decoder = new TextDecoder("utf8");
  const data = await Deno.readFile(path);
  const text = String(decoder.decode(data));
  const lst = text.split(";")
  lst.forEach(
      (text  )  => {
          if(text) dbClient.query(text)
          

        }
  ) 
  //dbClient.close()
}
 

