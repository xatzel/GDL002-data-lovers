window.totalData={
  
  filterChampionsByName: (datos,id) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelve un arreglo nuevo) y recibe un string
    de id (nombre del campeon) asimismo retorna un arreglo de objetos filtrados por id*/

    const newArray = datos.filter(datos =>  (datos.id == id)); 
    //cuando el usuario ingresa un id igual al id que hay en data lo devuelve en  un array 
  
    return newArray;
   
   },

   filterChampionsByRole: (datos,tags) => {
    /*esta funcion debe recibir un arreglo de objetos (lo que devuelve un arreglo nuevo) y recibe un string
    de id (nombre del campeon) asimismo retorna un arreglo de objetos filtrados por id*/

    const roleArray = datos.filter(datos =>  (datos.tags[0,1] == tags[0,1])); 
    //cuando el usuario ingresa un id igual al id que hay en data lo devuelve en  un array 
  
    return roleArray;
   
   },


  infosChamps: (infoType) =>{ //se ingresa como parametro infotype que es el arreglo con el 
    //ordenamiento que mas abajo se define (magic, defensa, ataque y dificultad).
    let dataArray = [];
    Object.keys(window.LOL.data).forEach(function(key){
      //convierte las keys de mi objeto en un array, con forEach: recorre la data, 
      //push: comprime la data dentro de mi arreglo de objetos lo cual lo ingresa de 1 x 1 a mi dataArray 
      dataArray.push(window.LOL.data[key]);
      return dataArray; //con return y push se rellena mi array vacio.
    });
  
    let orderAttack = dataArray; //declaro una variable  con mi array 
    orderAttack.sort(function(a,b) {
       //llamo mi nueva variable de mi array y con sort como metodo, dandole como  parametros ab 
      return (b.info[infoType] - a.info[infoType]);
      // se crea una formula (b-a) donde se ordena de mayor a menor obteniendo las propiedades del arreglo de objetos 
      // se ingresa con corchetes debido a que se manda a llamar ya como arreglo
      //mandar .info.attack como argumento
      //
    });
    return orderAttack;


  },
  
  // METODOS REFACTORIZADA
  orderByAttack: () => {
    // se declara una funcion (metodo) con una variable que contiene el arreglo de mi ventana global con mi 
    // funcion de ordenamiento con parametro lo que encuentra en la data como propiedades de un objeto
    let attackArray = window.totalData.infosChamps("attack");
    
    return attackArray;
   },

  orderByDefense: () =>{ 
    let defenseArray = window.totalData.infosChamps("defense");
           return defenseArray;
   },

   orderByMagic: () =>{ 
    let magicArray = window.totalData.infosChamps("magic");
    return magicArray;
   },

    orderByDifficulty: () =>{ 
    let difficultyArray = window.totalData.infosChamps("difficulty");
    return difficultyArray;
    },

    modeRolChamps: (dataArrays) =>{
      let modesRoles = {};
      dataArrays.forEach(champion => {
          champion.tags.forEach(tag => {
              if (typeof modesRoles[tag] == 'undefined')
                    modesRoles[tag] = {
                      name: tag,
                      count: 0
                  };
     
                  modesRoles[tag].count ++;
     
          })
      })
        console.log(modesRoles);
          return Object.values(modesRoles);
     }
      
    
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
    

     
 
