 import { app ,port} from "./src/app.ts";
 // arg mode for detect mode if needed
 //Deno.env.set("dbfile","_testdb.db")
 Deno.chdir("./src")
 await app.listen({ port });

 // for test
// export OAK_SQLITE_FILE=_testdb.db && deno run --allow-all run.ts
// for "prod"
 // deno run --allow-net --prompt run.ts


 // deno test --allow-all  --filter "dd" tests/
