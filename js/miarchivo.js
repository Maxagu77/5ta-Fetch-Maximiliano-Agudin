console.log("TP 3ra Entrega");


let cuadro = []

const boton = document.getElementById("boton")
     boton.addEventListener ('click', agregarProducto);

function agregarProducto (){
     let prod = document.getElementById("producto").value || alert("Ingrese un producto")  
     let pCompra = document.getElementById("pCompra").value
     let pVenta = document.getElementById("pVenta").value
     let cantComprada = document.getElementById("cantComprada").value
     let cantVendida = document.getElementById("cantVendida").value
     let pGanancia = pVenta - pCompra
     let ganancia = parseFloat (pGanancia)
     let cStock = cantComprada - cantVendida
     let stock = parseInt(cStock)
     let tGanancia = cantVendida * ganancia
     let gananciaTotal = parseFloat(tGanancia)
    
     cantVendida > cantComprada ? // Aplico Operador Ternario
     
     // Aplico Libreria

     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La cantidad vendida no puede superar a la cantidad que se compró!',
      footer: '<a href="">Por favor, vuelva ingresar las cantidades</a>' 
    }) :

     cuadro.push ([prod, pCompra, pVenta, ganancia, cantComprada, cantVendida, stock, gananciaTotal]);

     construirCuadro()

  }

function construirCuadro() {

  let total = 0
  let tabla = "<thead><tr><th>Producto</th><th>Precio de compra</th><th>Precio de venta</th><th>Ganancia por producto</th><th>Cantidad comprada</th><th>Cantidad vendida</th><th>Stock</th><th>Ganancia Total</th></tr></thead><tbody>"

  for (let i = 0 ; i < cuadro.length ; i++){

    tabla += `<tr><td>${cuadro[i][0]}</td><td>${cuadro[i][1]}</td><td>${cuadro[i][2]}</td><td>${cuadro[i][3]}</td><td>${cuadro[i][4]}</td><td>${cuadro[i][5]}</td><td>${cuadro[i][6]}</td><td>${cuadro[i][7]}</td></tr>`

    localStorage.setItem('valores', JSON.stringify(tabla))
    const tablaGuardada = localStorage.getItem('valores')
    
    console.log(tablaGuardada);
    const nuevoCuadro = JSON.parse(tablaGuardada)
    console.log(nuevoCuadro);
   
    total += parseFloat(cuadro[i][7])
  }

   tabla += `<tr><td></td><td></td><td></td><td></td><td></td><td></td><td>Ganancia Total</td><td>${total}</td></tr></tbody>`

   document.getElementById("tabla").innerHTML = tabla
}

   fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(datos => {
      console.log(datos)
   // datos.forEach(e => {
    //   console.log(e.name);
    //   console.log(e.phone);
    //   console.log(e.address);
       agregarATabla(datos)
       agregarPhoneTabla(datos)
    })

  function agregarATabla(datos){
    let clientes = document.getElementById("clientes")
    datos.forEach(n => {
       console.log(n.name);
    let li = document.createElement('li')
    li.innerHTML = n.name
    clientes.appendChild(li)
    });
  }
  function agregarPhoneTabla(datos){
    let telefonos = document.getElementById("telefonos")
    datos.forEach(p => {
       console.log(p.phone);
    let li = document.createElement('li')
    li.innerHTML = p.phone
    telefonos.appendChild(li)
    });
  }
   

 //  fetch('https://randomuser.me/api/?inc=name,phone')
 //    .then(res => res.json())
 //    .then(data => {
 //       console.log(data.results);
 //    })
     


//----------------------------------------------------------------------

//document.getElementById("tabla")

//let elementos = ["producto", pCompra, pVenta, ganancia, cantComprada, cantVendida, stock]
/* this.pVenta = parseInt(pVenta)
this.pCompra = parseInt(pCompra)
this.cantComprada =  parseInt(cantComprada)
this.cantVendida = parseInt(cantVendida)
this.ganancia = pVenta - pCompra
this.stock = cantComprada - cantVendida  */


//let agregarProducto = []

//function agregarProducto (){
 //  let producto = document.getElementById("producto").value
 //  let pCompra = document.getElementById("pCompra").value
 //  let pVenta = document.getElementById("pVenta").value
 //  let cantComprada = document.getElementById("cantComprada").value
 //  let cantVendida = document.getElementById("cantVendida").value
 //  let ganancia = pVenta - pCompra
 //  let stock = cantComprada - cantVendida

  // console.log(producto , pCompra , pVenta , cantComprada , cantVendida , ganancia , stock);

   //agregarProducto.push (["producto" , pCompra , pVenta , ganancia , cantComprada , cantVendida, stock])

  // hacerCuadro()

//}

//function hacerCuadro(){

 //let cuadro = "<thead><tr><th>Producto</th><th>Precio de compra</th><th>Precio de venta</th><th>Ganancia por producto</th><th>Cantidad comprada</th><th>Cantidad vendida</th><th>Stock</th></tr></thead>"

 //for (let i = 0 ; i < elementos.length ; i++){

 //}
  //cuadro = document.getElementById("tabla").innerHTML;

//}

/* class articulo {
    constructor (producto, ventas, compras, stock){
       this.producto = producto
       this.ventas = parseInt(ventas)
       this.compras = parseInt(compras)
       this.stock = parseInt(stock) + compras - ventas      
    }
  }
 const productos = ["lapices ",  "marcadores ", "carpetas ",  "cuadernos "]
 const detalle = [] */

//let stock = 0


   //for (const producto of productos) {
    // let ventas = prompt(`cuantos ${producto} se vendieron? `);
    // let compras = prompt(`cuantos ${producto} se compraron? `);

     //if (ventas <= compras) {

   //  detalle.push(new articulo(producto, ventas, compras, stock)) 
   //  }

   //  else{ 
   //    alert("Las ventas no pueden superar la cantidad de mercaderia comprada")
   //  }
  //}  
  
   //console.log(detalle);
   
   /* const elementos = [
      {id: 1, prod: "lapices" , precioCompra: 25, precioVenta: 50, },
      {id: 2, prod: "marcadores" , precioCompra: 38, precioVenta: 76},
      {id: 3, prod: "carpetas" , precioCompra: 130, precioVenta: 260},
      {id: 4, prod: "cuadernos" , precioCompra: 250, precioVenta: 500},
      {id: 5, prod: "goma" , precioCompra: 250, precioVenta: 500,}]

       const lineaTabla = document.getElementById ("lineaTabla")
       const listaProd = document.getElementById("listaProd")
       const compras = document.getElementById("compra") 
       const ventas = document.getElementById("venta") 
       const stock = document.getElementById("stock") 
       const pCompras = document.getElementById("pCompra") 
       const pVentas = document.getElementById("pVenta") 
       const ganancia = document.getElementById("ganancia") 

       elementos.forEach(e => {  */
          
       //   console.log(e.prod); 
       //   console.log("ganancia por unidad vendida: " + diferenciaPrecio(e.precioCompra, e.precioVenta));
 
          // Creo Lista de productos a partir del DOM
          
        // const listaElementos = document.createElement("tr")
        //  listaElementos.innerText = e.prod
        //  listaElementos.innerText = e.precioCompra
        //  listaProd.append(listaElementos)
      // });              
   
       //function diferenciaPrecio (precioCompra, precioVenta){
       // return precioVenta - precioCompra
      // }
    
      // const llamarProducto = elementos.find ( e => e.id == 2 )
      //       console.log("busqueda de producto", llamarProducto);

      // const buscarProductos = elementos.filter (e => e.precioVenta > 100)
      //      console.log('busqueda de los articulos cuyo valor de venta sea mayor a $100: ', buscarProductos);


          // Codigo HTML cambio de Titulo por DOM

      // const titulo = document.getElementById('titulo')
      // console.log(titulo.innerText); 
      // titulo.innerText = 'Base de datos de una Libreria'

       // Eventos, se agregan elementos en la lista de productos

        //const boton = document.getElementById("boton")

        //boton.onclick = () => {
        //const entrada = document.getElementById("entrada")
        //const ingreseProducto = entrada.value

        //const listaElementos = document.createElement("li")
        //listaElementos.innerText = ingreseProducto
        //listaProd.append(listaElementos)
       //}            

