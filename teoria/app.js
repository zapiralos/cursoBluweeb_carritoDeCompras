// const carrito = document.getElementById("carrito");
// const template = document.getElementById("template");

// const fragment = document.createDocumentFragment();

// const btnesBotones = document.querySelectorAll(".card .btn")

// const carritoObjeto = {};

// const agregarAlCarrito = (e) => {
//     console.log(carritoObjeto)

//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     }
    
//     if(carritoObjeto.hasOwnProperty(producto.id)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad+1 
//     }

//     carritoObjeto[producto.titulo] = producto

//     pintarCarrito()
// };

// const pintarCarrito = () => {

//     carrito.textContent = ""
    
//     Object.values(carritoObjeto).forEach(items => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = items.titulo
//         clone.querySelector(".badge").textContent = items.cantidad

//         fragment.appendChild(clone)
//     })

//     carrito.appendChild(fragment)
// }

// btnesBotones.forEach(btn => {
//     btn.addEventListener("click", agregarAlCarrito)
// })


// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach(caja => {
//     caja.addEventListener("click", (e)=>{
//        console.log("me diste click")
//        e.stopPropagation()
//     })
// })

// const formulario = document.querySelector("form")

// formulario.addEventListener("submit", (e) => {
//     console.log("me diste click")
//     e.preventDefault()
// })

const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    // console.log(e.target.id)

    if(e.target.id === "padre"){
        console.log("diste click al padre")
    }

    // console.log(e.target.matches(".border-secondary"))

    if (e.target.matches(".border-secondary") === true) {
        console.log("diste click al hijo")
    }

    // console.log(e.target.dataset.div)

    if(e.target.dataset.div === "divNieto"){
        console.log("diste click al nieto")
    }
   
})