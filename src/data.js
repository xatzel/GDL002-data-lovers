// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
const showAatroxName=(LOL)=>{
  return LOL.lol[0].name;
};

window.example = example;
window.dataLovers={
  showAatroxName,
}
