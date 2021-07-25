import * as t from "https://deno.land/std@0.102.0/testing/asserts.ts"; 
//import { delay } from "https://deno.land/std@0.102.0/async/delay.ts";

const todoUrl = "http://localhost:8080" 
async function addItem(text:string){
  const response = await fetch(todoUrl+"/api/todos",{
      method:"POST",
      body:JSON.stringify({
          text
      }),
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
  }) 
  const jsonData = await response.json();
  return jsonData
}

async function deleteAll(){
  const response = await fetch(todoUrl+"/api/todos/dd",{
      method:"DELETE", 
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
  }) 
  const jsonData = await response.json();
  return jsonData
}

Deno.test(
  "should delete all item, api, dd ",
async () => {
  // delete all existing item
  const responseJson = await deleteAll() 
  t.assertExists(responseJson.n)
  //.assertEquals(responseJson.n,0)
});



Deno.test(
  "should add item, api ",
async () => { 
  const responseJson = await addItem("sidi")
  t.assertEquals(responseJson.text,"sidi")
});

Deno.test(
  "should add  ely item, api ",
async () => { 
  const responseJson = await addItem("ely")
  t.assertEquals(responseJson.text,"ely")
});


async function getAll(){
  const response = await fetch(todoUrl+"/api/todos",{
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        }
  }) 
  const jsonData = await response.json();
  return jsonData
}

Deno.test(
  "should be one item, api ",
async () => {
  const responseJson = await getAll()
  
  t.assertEquals(responseJson.length,2)
});
