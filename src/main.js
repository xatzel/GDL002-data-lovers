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
    <div class="championBox">
      <img src= "${champ.splash}" width="300" height="150>
      <p class= "idChampion">
      <h3>${champ.id}</h3>
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
    </div>`;
}

/*
ES LO MISMO DE ARRIBA PERO EXTENDIDO EN MALA PRACTICA
let listHtml = lolArray.map(lol => {
  return champId
  .replace("{champ.splash}", lol.splash)
  .replace("{champ.id}",lol.id)
  .replace("{champ.title}",lol.title)
  .replace("{champ.info.attack}",lol.info.attack)
  .replace("{champ.info.defense}",lol.info.defense)
  .replace("{champ.info.magic}",lol.info.magic)
  .replace("{champ.info.difficulty}",lol.info.difficulty)
  .replace("{champ.tags}",lol.tags);
});


let htmlString = listHtml.join('');

let contentIdChamps = document.getElementById('contentIdChamps');

contentIdChamps.innerHTML = htmlString;*/

// ES PARA MOSTRAR TODAS LAS TARJETAS
function displayChampId(lolArray) {
  //console.log(displayChampId(lolArray));
  let listHtml = lolArray.map(champion => champTemplate(champion));
  let htmlString = listHtml.join(" ");
  content.innerHTML = htmlString;

}

//ESTA FUNCIÓN ES PARA MOSTRAR UNA SOLA TARJETA
function showChampion(data){
  //Esta funcion siempre espera un array de objetos;
  document.getElementById("contentIdChamps").innerHTML="";
  document.getElementById("contentIdChamps").innerHTML=`
  ${data.map(champTemplate).join("")}` 
  //show solo pinta mi arreglo limpiando primero mi pagina

  //TODO:
  //Refactorizar
}


showChampion(totalData.convertDataArray(LOL.data));
//callback showChampion

document.getElementById("searchBtn").addEventListener("click", function (){
  //esto es lo que imprime en pantalla una sola tarjeta filtrada por nombre
  let textImputToFilter = document.getElementById("nameChamp").value;
  let arrayFiltered=(totalData.filterChampionsByName(totalData.convertDataArray(LOL.data),textImputToFilter));
  showChampion(arrayFiltered);
  document.getElementById("nameChamp").value = "";
  
});
// document.getElementById("showAll").addEventListener("click", showChampion(convertDataArray(LOL.data)));
//TODO:
// CREAR UN NUEVO BOTTON PARA MOSTRAR TODOS LOS CHAMPIONS [X]
// AGREGAR UN EVENTO AL BOTON ANTERIOR [X]
// Llamar a la funcion showChampions(comvertDataArray(LOL.data))


//para ordenar por magia
document.getElementById("magic").addEventListener("click", () => {
  totalData.descendingOrderChamps(LOL.data);
  // mostrar el resultado de descendingOrderChamps
});
