import { app } from "./create-app.ts";  
import { setDbClientMiddlware } from "./db-middlwares/sqlte-middlware.ts";
 
app.use(setDbClientMiddlware) 



export { app };
