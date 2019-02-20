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
  document.getElementById("COMMUN").style.display="block";
  document.getElementById("CHAMPS").style.display="none";
  document.getElementById("WELCOME").style.display="none";
}
document.getElementById("LEAGUE").addEventListener("click", passPage3);

let champId= `
<div class="box">
<img src= "{champ.img}" alt="{champ.name}">
<div class="name">
<h3>{champ.name}</h3>
</div>
<div class="title">
<h3>{champ.title}</h3>
</div>
</div>`;

let listHtml = dataarray.map(lol => {
  return champId
  .replace("{champ.img}", lol.img)
  .replace("{champ.name}",lol.name)
  .replace("{champ.title}",lol.title);
});

let htmlString = listHtml.join('');

let content = document.getElementById('content');

content.innerText = htmlString;

