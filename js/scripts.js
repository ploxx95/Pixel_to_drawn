/*
crea elemento   let divpadre = document.createElement("div")
muestra el elemento    document.body.appendChild(divpadre)

*/
function divson(){

    for(let i=0; i < 256;i++){

    
    let div = document.createElement("div")
    div.setAttribute("class","divhijo")
    
    document.getElementsByClassName("containerfin")[0].appendChild(div)
    }
}

function creadiv(){

    let divpadre = document.createElement("div")
    divpadre.setAttribute("class","containerfin")
    document.body.appendChild(divpadre)


 }


 
 let boton = document.getElementById("button")
  boton.addEventListener('click',creadiv)
  let botonn = document.getElementById("buttonn")
  botonn.addEventListener('click',divson)



