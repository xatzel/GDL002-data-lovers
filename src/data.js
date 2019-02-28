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
    
  /*filterChampionsByTag: (datos,tags) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelva convertData) y recibe un string
    de tag (tag del campeon) y retorna un arreglo de objetos filtrados por tag
    const newArray2 = datos.filter(champion =>  (champion.tags == tags));
    //console.log(filterChampionsByTag(datos,tags));
    console.log(newArray2);
    return newArray2;
},
*/

 

  descendingOrderChamps: () =>{ 
    //preguntar por que aparece indefinida la funcion y que parametros se deben usar 
    //ya que no acepta la data como parametro.????
    // esta es la funcion de ordenamiento mayor a menor en {info{magia}} 
    //Florencia nos sugirio sacar el evento/target valores/ atributos a los botones 
    //y mandarlo llamar con un event/target

      //let dataArray2 = [];
      // Object.keys(LOL.data).forEach(function(key){
      // dataArray2.push(LOL.data[key]);
      // hacer otra funcion que devuelva otro arreglo de objetos.
      //y hacer otro sort para aplicarla en el arreglo de objetos.
      //investigar como ordenar arreglo de objetos basado en una propiedad del objeto con JS??? 
      //  COMO HACERLO DINAMICO .info.magic
      //  console.log(dataArray2);
      // });

      
        //hacer algo que convierta mis values en objetos en lugar de push e info.
    
        
        //se imprime en consola pero aun encontramos la forma de visualizarlo en pantalla
    

      let dataArray3 = [];
      Object.keys(LOL.data).forEach(function(key){
        dataArray3.push(LOL.data[key].info);
        return dataArray3;
      })
    
      let orderMagic = dataArray3;
            orderMagic.sort(function(a,b) {
              return (b.magic - a.magic);
      });
     console.log(orderMagic);
      return orderMagic
     
  },
  
  }
  
  /*displayNewsByDate: function(news){
    let sortedNewsByDate = news;
    sortedNewsByDate.sort(function(a, b) {
      return a.date - b.date;
    });
    document.getElementById("root").innerHTML = "";
    //I print my news elements inside my root div on HTML.
    document.getElementById("root").innerHTML = `
    ${sortedNewsByDate.map(window.dataLovers.newsTemplate).join("")}`;
  },
  
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