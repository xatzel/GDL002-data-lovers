window.totalData={
  
  filterChampionsByName: (datos,id) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelva convertData) y recibe un string
    de id (nombre del campeon) y retorna un arreglo de objetos filtrados por id*/

    const newArray = datos.filter(datos =>  (datos.id == id));
    //console.log(datos,id)
    return newArray;
   },
  
  descendingOrderChamps: () =>{ 
    let dataArray3 = [];
    Object.keys(LOL.data).forEach(function(key){
      dataArray3.push(LOL.data[key]);
      return dataArray3;
    })
  
    let orderAttack = dataArray3;
    orderAttack.sort(function(a,b) {
      return (b.info.attack - a.info.attack);
    });
   //console.log(orderMagic);
          return orderAttack;
   },
};

    //preguntar por que aparece indefinida la funcion y que parametros se deben usar 
    //ya que no acepta la data como parametro.????
    // esta es la funcion de ordenamiento mayor a menor en {info{magia}} 
    //Florencia nos sugirio sacar el evento/target valores/ atributos a los botones 
    //y mandarlo llamar con un event/target

     
      // hacer otra funcion que devuelva otro arreglo de objetos.
      //y hacer otro sort para aplicarla en el arreglo de objetos.
      //investigar como ordenar arreglo de objetos basado en una propiedad del objeto con JS??? 
      //  COMO HACERLO DINAMICO .info.magic
      //  console.log(dataArray2);
      // });
        //hacer algo que convierta mis values en objetos en lugar de push e info.
        //se imprime en consola pero aun encontramos la forma de visualizarlo en pantalla
    

     
 
