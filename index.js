class Personas{
   constructor (nombre, dni , edad){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
   }

   get_datos(){
      console.log ("<---------------->");
      console.log ("nombre ",this.nombre);
      console.log ("dni ",this.dni);
      console.log ("edad " ,this.edad);
      console.log ("");
   }

   get_nombre(){
      return this.nombre;
   }

   get_edad(){
      return this.edad;
   }

   get_dni(){
      return this.dni;
   }

   darBienvenida(){
      return ("Bienvenido a tu prestamo online inmediato ");
   }

   mayor_de_edad (edad){
      edad >= 18 ? alert ("Correcto, es mayor de edad") : alert("Error, no es mayor de edad");
   }
}

function intereses_cuotas ( monto , cuotas){
   var interes = 0;
   if( cuotas == 6){
      interes = monto * 0.30; 
   }
   else if  ( cuotas == 9){
      interes = monto * 0.50;
   }
   else if ( cuotas == 12){
      interes = monto * 0.80;
   }
   else if (cuotas == 24){
      interes = monto * 1;
   }
   return interes;
}

function iva_prestamo ( total ){
   return total * 0.21;
}

function traerPersonaPorDni(dni_buscado,validos){
   for (let j = 0; j < validos; j++) {
      if(arrayPersonas[j].get_dni() === dni_buscado){
         return arrayPersonas[j];
      }
   }
   return null;
}

let seguir = 's';
let arrayPersonas = new Array();
let i = 0;

while(seguir === 's'){
   let nombre = prompt ("Ingresa tu nombre y apellido");
   let dni = prompt("Ingrese su documento");
   let edad= prompt("Ingrese su edad");
   let persona = new Personas(nombre,dni,edad);
   alert(persona.darBienvenida() + " " + persona.get_nombre());

   if(persona =>18(edad)){
      let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
      monto = parseInt (monto);

      let cuotas = prompt ("En cuantas cuotas: 6 , 9 , 12 , 24");

      let total = monto + intereses_cuotas (monto , cuotas);
      let total_con_iva = total + iva_prestamo(total);

      alert("Pediste:  " + monto);
      alert("Cuotas: " + cuotas);
      alert("Total con intereses: " + total);
      alert("Total con intereses e iva: " + total_con_iva);
      
      arrayPersonas[i] = persona;
      seguir = prompt("Desea seguir? (s/n)");
      i++;
   }
   persona.get_datos();
}

let dni_buscado = prompt("ingrese el dni de una persona a buscar dentro de la base de datos de prestamos: ");
let personaBuscada = traerPersonaPorDni(dni_buscado,i);

if(personaBuscada !=null){
   alert(personaBuscada.get_nombre() + ", " + personaBuscada.get_edad() + ", " + personaBuscada.get_dni());
}else{
   alert("esa persona no existe en la base de datos de prestamos!");
}

const card1 = document.querySelector ("div.card1#cards1");

function CreandoCardDom1(){
    return `<div id="cards1" class="card1">
    <img class="card-img-top4" src="./imagenes/pressssstamo.webp">
    <div class="card-body1">
    <h2 class="card-title1">Prestamos inmediatos</h2>
    <p class="card-text1">Confianza y rapidez, <strong>solicitalo en 6 cuotas!!</strong></p>
    </div> </div> `
};
card1.innerHTML = CreandoCardDom1();

const card2 = document.querySelector ("div.card2#cards2");

function CreandoCardDom2(){
    return `<div id="cards2" class="card2">
    <img class="card-img-top2" src= "./imagenes/prestamo_personal.jpg_242310155.webp" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body2">
    <h2 class="card-title2">Prestamos inmediatos</h2>
    <p class="card-text2">Cpnfianza y rapidez, <strong>solicitalo en 9 cuotas!!</strong></p>
    </div> </div>`
};
card2.innerHTML = CreandoCardDom2();

const card3 = document.querySelector ("div.card3#cards3");

function CreandoCardDom3(){
    return `<div id="cards3" class="card3">
    <img class="card-img-top3" src="./imagenes/dinero_card.jpg" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body3">
    <h2 class="card-title3">Prestamos inmediatos</h2>
    <p class="card-text3">Cpnfianza y rapidez, <strong>solicitalo en 12 cuotas!!</strong></p>
    </div> </div>`
};
card3.innerHTML = CreandoCardDom3();

const card4 = document.querySelector ("div.card4#cards4");

function CreandoCardDom4(){
    return `
    <div id="cards4" class="card4">
    <img class="card-img-top4" src= "./imagenes/transferencia.jpg" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body4">
    <h2 class="card-title4">Prestamos inmediatos</h2>
    <p class="card-text4">Cpnfianza y rapidez, <strong>solicitalo en 24 cuotas!!</strong></p>
    </div> </div>`
};

card4.innerHTML = CreandoCardDom4(); 

const complet = document.getElementById("complet");

complet.onkeydown = ()=>{
   console.log('presiono una tecla')
},
complet.onkeyup = ()=>{
   console.log('solto una tecla');
};

const com = document.getElementById("com");
com.onkeyup = ()=>{console.log('solto una tecla')};

const btn = document.getElementById("btn");
btn.addEventListener('click', function(){ alert('listo! enviamos tu información, revisa tu correo electronico')});


const productos = [
   {id:1, nombre: "opcion1", precio: 6},
   {id:2, nombre: "opcion2", precio: 9},
   {id:3, nombre: "opcion3", precio: 12},
   {id:4, nombre: "opcion4", precio: 24}
];
const elementosCarrito = [];
const contenedorProductos = document.getElementById("productos");
const contenedorElementosCarrito = document.getElementById("elementos-carrito");
const totalSpan = document.getElementById("total");

function renderizarProducto(){
   productos.forEach(producto =>{
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button class="btn-agregar-carrito" data-id="${producto.id}">agregar</button>
      `;
      contenedorProductos.appendChild(div);
   })
}


function agregarAlCarrito(idProducto){
   const itemExistente = elementosCarrito.find(item => item.id === idProducto). JSON.parse(localStorage.getItem('itemExistente')) || [];
   if(itemExistente){
      itemExistente.cantidad++
   }else {
      const producto = productos.find(p => p.id === idProducto);
      if (producto){
         elementosCarrito.push ({...producto, cantidad:1});
      }
   }

  renderizarCarrito();
}


function eliminarDelCarrito(idProducto){
   const indice = elementosCarrito.findIndex(item => item.id === idProducto);
   if(indice !== -1){
      elementosCarrito.splice(indice, 1);
      renderizarCarrito()
   }
}

function renderizarCarrito(){
   contenedorElementosCarrito.innerHTML = '';
   let precioTotal = 0;
   elementosCarrito.forEach(item =>{
      const li = document.createElement('li');
      li.textContent =  `${item.nombre} x ${item.cantidad} - $${item.precio * item.cantidad};`
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'eliminar';
      btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id))
      li.appendChild(btnEliminar);
      contenedorElementosCarrito.appendChild(li);
      precioTotal += item.precio * item.cantidad;
   })
   totalSpan.textContent = precioTotal;
}

function RealizarCompra(){
   alert(`compra finalizada $${totalSpan.textContent}`);
elementosCarrito.length = 0
renderizarCarrito();
}  

document.getElementById('btn-comprar').addEventListener('click', RealizarCompra);
contenedorProductos.addEventListener('click', function(evento){
   if(evento.target.classList.contains('btn-agregar-carrito')){
      const idProducto = parseInt(evento.target.getAttribute('data-id'));
      agregarAlCarrito(idProducto);
   }
})

renderizarProducto()

