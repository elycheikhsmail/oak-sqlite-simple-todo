import { app } from "./add-middlware.ts";
import todoRouters from ".././oak-todo-sqlite-app/mod.ts"; 
import todoUI from "../oak-todo-static-app/mod.ts";

app.use(
  todoRouters
    .prefix("/api/todos")
    .routes(),
);
app.use(todoRouters.allowedMethods());
//
app.use(todoUI.allowedMethods());
app.use(
  todoUI
    .prefix("/")
    .routes(),
);
 

export { app };
