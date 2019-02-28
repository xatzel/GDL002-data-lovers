function passPage1(){
  document.getElementById("CHAMPS").style.display="none";//se hace invisible
  document.getElementById("WELCOME").style.display="block";//muestra el bloque o pantallas
  document.getElementById("COMMUN").style.display="none";
}
document.getElementById("HOME").addEventListener("click", passPage1);

function passPage2(){
  document.getElementById("WELCOME").style.display="none";
  document.getElementById("CHAMPS").style.display="block";
  document.getElementById("COMMUN").style.display="none";
}
document.getElementById("CHAMPIONS").addEventListener("click", passPage2);

function passPage3(){
  document.getElementById("WELCOME").style.display="none";
  document.getElementById("CHAMPS").style.display="none";
  document.getElementById("COMMUN").style.display="block";
}
document.getElementById("LEAGUE").addEventListener("click", passPage3);


//let champId= 
function champTemplate(champ) {
  //esta funcion debe recibir un objeto que corresponde a un campeon
  return`
    <div class="championBox" >
    <div class="background">
    
      <img src= "${champ.splash}" width="400" height="200">
      <p class= "idChampion">
      <h1>${champ.id}</h1>
      </p>
      <p class ="title">
      <h3>${champ.title}</h3>
      </p>
      <div class="wrap-text" id="text-footer">
      <p class=champInfo>Attack: ${champ.info.attack}</p>
      <p class=champDefense>Defense: ${champ.info.defense}</p>
      <p class=champMagic>Magic: ${champ.info.magic}</p>
      <p class=champDifficulty>Difficulty: ${champ.info.difficulty}</p>
      <p class=champRole>Role: ${champ.tags}</p>
      </div>
      </div>
      </div>
      
    </div>`;
}


// ES PARA MOSTRAR TODAS LAS TARJETAS
/*function displayChampId(lolArray) {
  //console.log(displayChampId(lolArray));
  let listHtml = lolArray.map(champion => champTemplate(champion));
  let htmlString = listHtml.join(" ");
  content.innerHTML = htmlString;
}*/

//ESTA FUNCIÓN ES PARA MOSTRAR UNA SOLA TARJETA ESTA ES LA BUENA
function showChampion(datadeLol){
  //Esta funcion siempre espera un array de objetos;
  //document.getElementById("contentIdChamps").innerHTML="";
  document.getElementById("contentIdChamps").innerHTML=`
  ${datadeLol.map(champTemplate).join("")}` 
  //showChampin solo pinta mi arreglo limpiando primero mi pagina

  //TODO:
  //Refactorizar
}
showChampion(totalData.convertDataArray(LOL.data));
//callback showChampion

document.getElementById("searchBtn").addEventListener("click", function (){
  //esto es lo que imprime en pantalla una sola tarjeta filtrada por nombre
  let textInputToFilter = document.getElementById("nameChamp").value;
  let arrayFiltered=(totalData.filterChampionsByName(totalData.convertDataArray(LOL.data),textInputToFilter));
  showChampion(arrayFiltered);
  document.getElementById("nameChamp").value = "";
  
});
//document.getElementById("showAll").addEventListener("click", showChampion);
document.getElementById("showAll").addEventListener("click", () => {
  return showChampion(totalData.convertDataArray(LOL.data));
});

/*document.getElementById("magic").addEventListener("click", () => {
  return showChampion(LOL.data).innerHTML = "";
});*/
//I print my news elements inside my root div on HTML.
document.getElementById("magic").addEventListener("click", () => {
  return showChampion(LOL.data).innerHTML = `
${totalData.descendingOrderChamps.map(main.champTemplate).join("")}`;
});
//TODO:
// CREAR UN NUEVO BOTTON PARA MOSTRAR TODOS LOS CHAMPIONS [X]
// AGREGAR UN EVENTO AL BOTON ANTERIOR [X]
// Llamar a la funcion showChampions(convertDataArray(LOL.data))


//para ordenar por magia
/*document.getElementById("magic").addEventListener("click",() => {
  showChampion(totalData.descendingOrderChamps(LOL.data));
  // mostrar el resultado de descendingOrderChamps
});
*/
