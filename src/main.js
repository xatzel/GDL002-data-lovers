const dataLolvers = Object.values(window.LOL.data);
//console.log(JSON.stringify(dataLolvers));

// se declara una constante global con mi array de data Lol para mandarla llamar en tas mis funciones 
//console.log(dataLolvers);

function passPage1(){
  document.getElementById("CHAMPS").style.display="none";//se hace invisible mi pantalla
  document.getElementById("WELCOME").style.display="block";//muestra el bloque o pantallas
  document.getElementById("moreInfo").style.display="none";
}
document.getElementById("HOME").addEventListener("click", passPage1); //salto de pagina con click

function passPage2(){
  document.getElementById("WELCOME").style.display="none";
  document.getElementById("CHAMPS").style.display="block";
  document.getElementById("moreInfo").style.display="none";
}
document.getElementById("CHAMPIONS").addEventListener("click", passPage2);

function passPage3(){
  document.getElementById("WELCOME").style.display="none";
  document.getElementById("CHAMPS").style.display="none";
  document.getElementById("moreInfo").style.display="block";
}
document.getElementById("MOREINFO").addEventListener("click", passPage3);


//let champId= 
function champTemplate(champ) { 
  //esta funcion debe recibir un objeto que corresponde a un campeon y la rellena con los keys de la data
  // imprimiendolo en un template que se muestra en pantalla.
  // con la tilde fuerte se declara el template que gracias al $ y {} remplaza lo que encuentra en las keys con el values que tiene la misma.

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


//ESTA FUNCIÓN ES  LA QUE PERMITE MOSTRAR TODAS LAS TARJETAS
function showChampion(variableArray){
  //Esta funcion siempre espera un array de objetos 
  document.getElementById("contentIdChamps").innerHTML=`
  ${variableArray.map(champTemplate).join("")}`;
  // esta funcion rellena el contenedor vacio de HTML con la funcion del champtemplate
  // map escanea nuestro arreglo, para ahi encontrar las keys con su value y reemplazarlas en el template
  //  join "" showChampin solo pinta mi arreglo limpiando primero mi pagina
  
  
}
showChampion(dataLolvers);
//callback showChampion limpia y vuelve a mostrar.


document.getElementById("searchBtn").addEventListener("click", function (){
  //esto es lo que imprime en pantalla una sola tarjeta filtrada por nombre
  let textInputToFilter = document.getElementById("nameChamp").value;
  let arrayFiltered=(window.totalData.filterChampionsByName(dataLolvers,textInputToFilter));
  showChampion(arrayFiltered);
  document.getElementById("nameChamp").value = "";
  // esta es solo para limpiar el valor de input type text
  
});

document.getElementById("showAll").addEventListener("click", () => {

  return showChampion(dataLolvers);
  //este boton muestra a todos los campeones nuevamente
  
});
 
document.getElementById("attack").addEventListener("click", () => {
  // esta funcion es para mostrar la data ordenada por el ataque en el click
  let arrayOrdered = (window.totalData.orderByAttack(dataLolvers));

  return showChampion(arrayOrdered);
});

document.getElementById("defense").addEventListener("click", () => {
  let arrayOrdered = (window.totalData.orderByDefense(dataLolvers));
  
  return showChampion(arrayOrdered);
});
document.getElementById("magic").addEventListener("click", () => {
  let arrayOrdered = (window.totalData.orderByMagic(dataLolvers));
  return showChampion(arrayOrdered);
});

document.getElementById("difficulty").addEventListener("click", () => {
  let arrayOrdered = (window.totalData.orderByDifficulty(dataLolvers));
  return showChampion(arrayOrdered);
});

modesTags = window.totalData.mode (dataLolvers);

/*function showHowMany(){

  let modesTags = window.totalData.mode (dataLolvers);
    alert (modesTags);
    
};
  
let botonh = document.getElementById('howMany');

  botonh = document.addEventListener("click", showHowMany());*/