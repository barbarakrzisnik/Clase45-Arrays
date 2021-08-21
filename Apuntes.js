//Clase 45 - Arrays


// Las paginas web se comunican con el backend que manda la informacion
// Un ejemplo de array puede ser una lista de productos para compras

// Esto permite realizar un HTML dinamico en donde aparece el predeterminado de una tarjeta a traves del innerHTML por ejemplo (chequear esto porque no es una practica que ahora se use tanto porque no es segura)

const productos = ['Teclado','Computadora', 'Vino', 'Vodka']
const carrito = document.querySelector(".carrito")

// carrito.innerHTML = `
// <article class="producto">
// <h3>${productos[1]}</h3>
// <img src="https://placekitten.com/200/300">`

//Hacer un simple for de todo el array no va a funcionar porque reemplazan y siempre se queda con el ultimo
// Por eso necesito una variable acumuladora 

let acc = ''
for (let i = 0; i < productos.length; i++) {
    acc = acc + `
    <article class="producto">
    <h3>${productos[i]}</h3>
    <img src="https://placekitten.com/200/300">
    </article>
    `
}
console.log(acc)

carrito.innerHTML = acc

// Ahi me genera todas las tarjetas que necesito