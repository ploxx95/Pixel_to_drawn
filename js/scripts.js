/*
crea elemento   let divpadre = document.createElement("div")
muestra el elemento    document.body.appendChild(divpadre)

*/
function divson(){

    let div = document.createElement("div")
    div.setAttribute("class","divhijo")
    document.getElementById("container").appendChild(div)

}

function creadiv(){

    let divpadre = document.createElement("div")
    divpadre.setAttribute("id","container")
    document.body.appendChild(divpadre)


 }
 
 let boton = document.getElementById("button")
  boton.addEventListener('click',creadiv)
  let botonn = document.getElementById("buttonn")
  botonn.addEventListener('click',divson)
 


