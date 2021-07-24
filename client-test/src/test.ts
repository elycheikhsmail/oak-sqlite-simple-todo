import { getAll,addItem } from "./helper.ts";

import { asyncTestType } from "https://deno.land/x/test_manager@v0.8.3/mod.ts"; 

const testObjects:asyncTestType[]=[]

testObjects.push(
    {
        testName:"should give array of todos not empty test",
        fn:async()=>{
            const todos = await getAll()
            return todos.length>0
        }
    },
    
    {
        testName:"shoul add an ietem of todos in db and return coreesponding value",
        fn:async()=>{
            const todos = await addItem("ely")
            return todos["text"] == "ely"
        }
    },
)

export {testObjects}

