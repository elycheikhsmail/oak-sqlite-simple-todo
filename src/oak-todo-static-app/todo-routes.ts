import { Router,send } from "./deps.ts"; 

const router = new Router();

router.get("/", async (ctx) => {   
 await send(ctx,"index.html",{root:`${Deno.cwd()}/oak-todo-static-app/public`})
 
});

 
router.get("/:path", async (ctx) => {  
  const path = ctx.request.url.pathname
 // const path = data.replace("/ui/","")
 await send(ctx,path,{root:`${Deno.cwd()}/oak-todo-static-app/public`})
 
});

export default router
