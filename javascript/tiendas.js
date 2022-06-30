 let li_tiendas

 li_tiendas = {
     'tiendas': [
         { 'nombre': 'consum', },
         { 'nombre': 'mas y mas' },
         { 'nombre': 'mercadona' },
         { 'nombre': 'Lidl' }
     ]

 }
 /**
  * 
  * @param {*} idSelect  es el id del select que rellenamos
  * @param {*} coleccion es la coleccion (JSON) de tiendas que ponemos en las opciones del select
  */
 function rellenaSelect( idSelect, coleccion){

    let select = document.getElementById( idSelect)   /*definimos select para no tener que usar document.getElementById y usar el ID mas corto*/
    let opciones='' 

    for( tienda of coleccion)  {
        opciones += `<option value= "${tienda.nombre}"> ${tienda.nombre}</option>`
    }  
    
    select.innerHTML = opciones
    
 }