// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.totalData={
  convertDataArray : () => {
    let dataArray = [];
    
    Object.keys(LOL.data).forEach(function(key){
      dataArray.push(LOL.data[key].info.magic);
    });
    for (i=0;i<dataArray.length; i++){
      return dataArray;
    };

  }

}

lolArray = Object.values(LOL.data);

//console.log(LOL.data);

