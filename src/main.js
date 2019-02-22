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
function displayChampId(lolArray) {
  let listHtml = lolArray.map(champion => champTemplate(champion));
  let htmlString = listHtml.join(" ");
  content.innerHTML = htmlString;
}

document.getElementById("contentIdChamps").innerHTML=`
    ${lolArray.map(champTemplate).join("")}`


function OrderChampsByMagic() {
  let order=window.totalData.magicData();

  let arrayOrdenado = order.sort((a,b)=>{
    return b - a;
  })
  displayChampId();
//}
document.getElementById("magic").addEventListener("click", OrderChampsByMagic);
//console.log(arrayOrdenado);
window.totalData.magicData();


/*
//ESTA FUNCIÓN SI SIRVE PERO TODAVIA NO SE MUESTRA EN PANTALLA
const filterChampionsByName=(datos,id) => {
  const newArray = datos.filter(champion =>  (champion.id == id));
  
  return newArray;
}
console.log(filterChampionsByName(lolArray,"Cassiopeia"));


*/}