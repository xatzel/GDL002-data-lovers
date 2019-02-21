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


let champId= `
<div class="championBox">
  <img src= "{champ.splash}" width="300" height="150>
  <p class= "idChampion">
  <h3>{champ.id}</h3>
  </p>
  <p class ="title">
  <h3>{champ.title}</h3>
  </p>
  <div class="wrap-text" id="text-footer">
  <p class=champInfo>Attack: {champ.info.attack}</p>
  <p class=champDefense>Defense: {champ.info.defense}</p>
  <p class=champMagic>Magic: {champ.info.magic}</p>
  <p class=champDifficulty>Difficulty: {champ.info.difficulty}</p>
  </div>
</div>`;

let listHtml = lolArray.map(lol => {
  return champId
  .replace("{champ.splash}", lol.splash)
  .replace("{champ.id}",lol.name)
  .replace("{champ.title}",lol.title)
  .replace("{champ.info.attack}",lol.info.attack)
  .replace("{champ.info.defense}",lol.info.defense)
  .replace("{champ.info.magic}",lol.info.magic)
  .replace("{champ.info.difficulty}",lol.info.difficulty);
});


let htmlString = listHtml.join('');

let content = document.getElementById('content');

content.innerHTML = htmlString;

/*function searchChamp(){

  filterData(LOL.data, document.getElementById("nameChampion").value);
  document.getElementById("nameChampion").value="";
}

    let filterData=(data,condition) => {
  for(let i=0; i<data.length; i++){
    let champion = data[i];
    if (LOL.data.id == condition) {
      printFirstData(champion);

     }
  }
}



 function printFirstData(champion){
   let image=document.getElementById("info1");
   let pokedex=document.getElementById("championBox");

   pokedex.innerHTML= "Name: " +  champion.id + "<br>" + "<br>" + "Role: " + champion.tag + 
                       "<br>" "Title:  " + champion.title +"<br>" + "Blurb:  " + champion.blurb +
                       "<br>" "Info:  " + champion.info +"<br>" + "Stats:  " + champion.stats;
                      

   image.setAttribute("src", ""+champion.img);*/
