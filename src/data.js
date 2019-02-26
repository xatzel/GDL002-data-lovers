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
    de id (nombre del campeon) y retorna un arreglo de objetos filtrados por id*/
    const newArray = datos.filter(champion =>  (champion.id == id));
    //console.log(datos,id)
    return newArray;
  },
    
  
  descendingOrderChamps: (data) =>{
    // let dataArray = Object.values(data);
    //dataArray.sort(function (a, b) {
      let dataArray = Object.values(data);
      Object.keys(LOL.data).forEach(function(key){
        dataArray.push(LOL.data[key].info.magic);        
        let arrayOrdenado = dataArray.sort((a,b)=>{
         return b - a;
          })
         return arrayOrdenado;
      });
      
      //console.log(descendingOrderChamps());
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