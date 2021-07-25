const todoUrl = "http://localhost:8080" 
export async function getAll(){
    const response = await fetch(todoUrl+"/api/todos",{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
          }
    }) 
    const jsonData = await response.json();
    return jsonData
}

export async function addItem(text:string){
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


