import { getAll } from "./helpers.ts";
import { todoInDb } from "../intefaces/todo.ts";

const responseJson = await getAll() as todoInDb[]

console.log(responseJson)


// deno run --allow-net --allow-env getall.ts