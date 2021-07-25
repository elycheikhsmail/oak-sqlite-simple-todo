import { Application } from "./../deps.ts";    
const app = new Application();


import { oakCors } from "https://deno.land/x/cors/mod.ts";
app.use(oakCors({ origin: "*" }));

import { setDbClientMiddlware } from "./db-middlwares/sqlte-middlware.ts";
app.use(setDbClientMiddlware) 




export { app };
