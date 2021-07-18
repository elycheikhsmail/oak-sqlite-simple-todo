import { Application } from ".././deps.ts";
import {   handleErrors ,handleAuthHeader} from ".././oak-auth-app/middlewares.ts";
import { oakAuthHelperOutput } from ".././oak-auth-app/types.ts";

const app = new Application<{
  data: oakAuthHelperOutput | null;
}>();

app.use(handleAuthHeader);
app.use(handleErrors);

import  todoRouters from ".././oak-todo-app/mod.ts";
import authRoutes  from ".././oak-auth-app/mod.ts";

app.use(
  todoRouters
    .prefix("/api/todos")
    .routes(),
);
app.use(todoRouters.allowedMethods());
//
app.use(authRoutes.allowedMethods());
app.use(
  authRoutes
    .prefix("/auth")
    .routes(),
);
 

export { app };
