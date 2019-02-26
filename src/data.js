// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


window.totalData={
  convertDataArray : (data) => {
    //Esta funcion debe recibir un objeto de objetos (LOL.data) y retorna un arreglo de objetos
    let dataArray = Object.values(data);
  
    return dataArray;
  },
  
  filterChampionsByName: (datos,id) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelva convertData) y recibe un string
    de id y retorna un arreglo de objetos filtrados por id*/
    const newArray = datos.filter(champion =>  (champion.id == id));
    //console.log(datos,id)
    return newArray;
},
  
  
  orderChampsFromZtoA: (data) =>{
    let dataArray = Object.values(data);
    dataArray.sort(function (a, b) {
      console.log(a.name.localeCompare(b.name))

      return a.name.localeCompare(b.name);
  
    });
    console.log(dataArray)
  }
}
//lolArray = Object.values(LOL.data);

//console.log(totalData.convertDataArray(LOL.data));

/*orderDataByInfo: ()=>{
  
    let orderData = window.totalData.convertDataArray(LOL.data);
    let arrayOrdenado = orderData.sort((a,b)=>{
      return arrayOrdenado (b - a);
    })
    document.getElementById("contentIdChamps").innerHTML=""
    document.getElementById("contentIdChamps").innerHTML=`
    ${arrayOrdenado.map(champTemplate).join("")}`;
  }*/