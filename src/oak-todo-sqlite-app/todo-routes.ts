import { Router } from "./deps.ts";
//import _todoService from "./todo-service.ts";
import _todoService from "./todo-sqlite-service.ts";

const router = new Router();

// router.get("/", (ctx) => {
//   ctx.response.body = { msg: "Hello world!" };
// });

router.get("/", async (ctx) => {
  const getAll = _todoService.getAll(ctx.state.dbClient);
  await getAll
    .then((todos) => ctx.response.body = todos)
    .catch((errors) => ctx.response.body = { errors });
});

router.post("/", async (ctx) => {
  //console.log("has body : ",ctx.request.hasBody )
  const dtataPromise =  ctx.request.body(); //{ type: 'json' }
  const { text } = await dtataPromise.value;
  // if(!text){ errors }
  //console.log(text)
  ctx.response.body = {
    data: "null",
  };

  const save = _todoService.save(ctx.state.dbClient,text);

  await save.then(
    (_dbFeedBack) => {
      console.log({_dbFeedBack})
      ctx.response.body = {
        id: _dbFeedBack,
        //dbFeedBack["lastInsertId"],
        text,
      };
    },
  ).catch(
    (errors) => ctx.response.body = { errors },
  );
});

router.put("/:id", async (ctx) => {
  //console.log("has body : ",ctx.request.hasBody )
  const dtataPromise =  ctx.request.body(); //{ type: 'json' }
  const { text } = await dtataPromise.value;
  // if(!text){ errors }
  //console.log(text)
  ctx.response.body = {
    data: "null",
  };

  

  if (ctx.params && ctx.params.id) {
    const update = _todoService.update(ctx.state.dbClient,ctx.params.id,text)
    //save(text);
    // assgn book id to the params
   // const deletee = _todoService.u(ctx.params.id);
    //const sql = todoSql.deleteByIdSql(parseInt(ctx.params.id));
    await update
      .then(
        (resulet) => {
          if (!resulet) ctx.response.body = { message: "task not found" };
          else {
            //console.log(resulet);
            // resulet["affectedRow"] > 1
            ctx.response.body = { resulet };
          }
        },
      ).catch(
        (errors) => ctx.response.body = { errors },
      );
  }

 
});

router.delete("/:id", async (ctx) => {
  // console.log("/api/todos/:id")
  // validate params ctx.params && ctx.params.id
  // validate bookwith id = incomming id exist in db
  if (ctx.params && ctx.params.id) {
    // assgn book id to the params
    const deletee = _todoService.delete(ctx.state.dbClient,ctx.params.id);
    //const sql = todoSql.deleteByIdSql(parseInt(ctx.params.id));
    await deletee
      .then(
        (resulet) => {
          if (!resulet) ctx.response.body = { message: "task not found" };
          else {
            //console.log(resulet);
            // resulet["affectedRow"] > 1
            ctx.response.body = { resulet };
          }
        },
      ).catch(
        (errors) => ctx.response.body = { errors },
      );
  }
});

// router.get('/port',(ctx) => {ctx.response.body = {PORT:Deno.env.get("PORT")||"no port in env var"} }
// )
export { router as todoRouters };
