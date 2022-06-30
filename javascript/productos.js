let li_productos /* defino la caja de productos*/
 
li_productos = {
    'productos': []
        
    }

    

/*
li_productos={
    'productos':[
        'nombre' : 'tomate'
        'cantidad' : '2'
        'tienda' : 'lidl'
        'notas' : 'no comprar en bolsa'

    ]
}
*/
function creaProducto(){
    
    let nombreProducto = document.getElementById(`nuevoProd`).value 
    let cantidad = document.getElementById(`cantidad`).value
    let select = document.getElementById(`select-tienda`).value
    let notas = document.getElementById(`notas`).value


//validamos que los datos de cantidad sean los correctos.

    if (cantidad <=0 ) {
       
        cantidad = 1
        
    }



    li_productos.productos.push(
        {//clave       //valor
            'nombre': nombreProducto,
            'tienda': select,
            'cantidad': cantidad,
            'notas' : notas
        }
    )



    localStorage.setItem( `li_productos`, JSON.stringify(li_productos) )

    vaciaInput()

    apuntaProducto()


}

function vaciaInput(){
    
// borramos los inputs despues de guardar, tenemos que coger todo el elemento y darle valor ''
document.getElementById(`nuevoProd`).value = ''
document.getElementById(`cantidad`).value = ''
document.getElementById(`select-tienda`).value =''
document.getElementById(`notas`).value =''

// quitamos esta ventana para ver los productos en la pantalla principal. esta funcion esta en shoppinglist
 escondeModal(`modal`)
}

function apuntaProducto(){
   /* <li>
        <input type="checkbox" name="" class="cajita-check">
        <label for="leche"> Leche </label>
        <span> 2</span>
        <i class="material-icons" onclick="muestraModal('modal-notas')">search</i>
        <i class="material-icons">delete</i>
    </li>) */
    document.getElementById('lista').innerHTML=''
    for ( producto of li_productos.productos) {
        li =
        `<li>
             <input type="checkbox" name="${producto.nombre}" class="cajita-check">
             <label for=" ${producto.nombre}" >  ${producto.nombre} </label>
             <span>${producto.cantidad} </span>
             <i class="material-icons" onclick="muestraModal('modal-notas')">search</i>
            <i class="material-icons">delete</i>
        </li>`

        document.getElementById('lista').innerHTML += li

    }

}
function recuperarArchivados(){
    if(localStorage.getItem('li_productos')){

        li_productos = localStorage.getItem('li_productos');//saco la lista del localStorage con get item y me lo da en cadena

        li_productos = JSON.parse(li_productos)//parse coje la cadena y me la devuelce como objeto
    }
}