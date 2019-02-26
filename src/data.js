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
    
  filterChampionsByTag: (datos,tags) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelva convertData) y recibe un string
    de tag (tag del campeon) y retorna un arreglo de objetos filtrados por tag*/
    const newArray2 = datos.filter(champion =>  (champion.tags == tags));
    //console.log(filterChampionsByTag(datos,tags));
    return newArray2;
  },
  
    
    

  descendingOrderChamps: () =>{ 
    //preguntar por que aparece indefinida la funcion y que parametros se deben usar 
    //ya que no acepta la data como parametro.????
    //funcion de ordenamiento mayor a menor en {info{magia}} 
    

      let dataArray2 = [];
      Object.keys(LOL.data).forEach(function(key){
      dataArray2.push(LOL.data[key].info.magic);
      //  COMO HACERLO DINAMICO .info.magic
  //  console.log(dataArray2);

      let arrayOrdenado = dataArray2.sort((a,b)=>{
        return b - a;
        
      });
      console.log(arrayOrdenado);
          return arrayOrdenado;
        
          })
         
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