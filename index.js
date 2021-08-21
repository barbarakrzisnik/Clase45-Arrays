// Ejercicio 1
// const numeros = [5, 7, 8, 4]
// Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 24.

const numeros = [5, 7, 8, 4]

let acc = 0
for (let i = 0; i < numeros.length; i++) {
    acc = acc + numeros[i]
    
}
console.log(acc)

// Ejercicio 2
// const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje
// Ana - Elsa - Olaf - Sven - Hans (con guiones)

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
let personajesFrozen = ""
for (let i = 0; i < nombres.length; i++) {
    personajesFrozen = personajesFrozen + nombres[i] + " - "
    
}
console.log(personajesFrozen)


// Ejercicio 3
// Dado el mismo array, hacer un codigo que muestre en consola el siguiente mensaje:
// <li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>

let listaPersonajesFrozen = ""
for (let i = 0; i < nombres.length; i++) {
    listaPersonajesFrozen = listaPersonajesFrozen + `<li>${nombres[i]}</li>`
    
}
console.log(listaPersonajesFrozen)


// Ejercicio 4
// Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript.

const contenedorLista = document.querySelector(".lista-personajes")

let listaFrozenHtml = ''
for (let i = 0; i < nombres.length; i++) {
    listaFrozenHtml = listaFrozenHtml + 
    `<li>${nombres[i]}</li>`
}

contenedorLista.innerHTML = listaFrozenHtml



// let acc = ''
// for (let i = 0; i < productos.length; i++) {
//     acc = acc + `
//     <article class="producto">
//     <h3>${productos[i]}</h3>
//     <img src="https://placekitten.com/200/300">
//     </article>
//     `
// }
// console.log(acc)

// carrito.innerHTML = acc