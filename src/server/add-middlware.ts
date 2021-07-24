import { app} from "./create-app.ts";  
import { oakCors } from "https://deno.land/x/cors/mod.ts";
app.use(oakCors({ origin: "*" }));

import { setDbClientMiddlware } from "./db-middlwares/sqlte-middlware.ts";
app.use(setDbClientMiddlware) 




export { app };
