 import { app ,port} from "./src/app.ts";
 Deno.chdir("./src")
 await app.listen({ port });

 // export 
// deno run --allow-all run.ts
 // deno run --allow-net --prompt run.ts
