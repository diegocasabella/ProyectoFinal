const productos = [
    {
        nombre: "Billetera",
        descripcion: " Mantiene tus plásticos y documentos visiblemente ordenados, a un clic de distancia: presionando el disparador, se accionan automáticamente hacia arriba en forma escalonada. CAPACIDAD 15 tarjetas",
        imagen: "imagenes/Billetera.png",
        precio: 42250,
    },
    {
        nombre: "Portallaves",
        descripcion: " Portallaves impresos en alta calidad con tintas látex al agua. Montados sobre madera ecológica de 5,5 mm. Se pueden colgar hasta 6 o 10 juegos de llaves, dependiendo el modelo..",
        imagen: "imagenes/Portallaves.png",
        precio: 42400,
    },
    {
        nombre: "Termo",
        descripcion: "Termo de acero inoxidable forrado con diseño impreso en cuero. Capacidad 1000cc. Pico Especial para Mate.",
        imagen: "imagenes/Termo.png",
        precio: 58500,
    },
    {
        nombre: "Matera",
        descripcion: " Producto impermeable. Altamente resistente a rasgaduras y al maltrato en el uso cotidiano. Soporta buena carga de peso. La boca de carga es ancha y espaciosa. Destinada a perdurar en el tiempo.",
        imagen: "imagenes/Matera.png",
        precio: 82600,
    },

]

//creamos una variable que va a contener todas lass cards de los productos pero ahora con los datos del arreglo
let accesoriosHTML = "";
for (let indice = 0; indice < productos.length; indice++) {
    //creamos una cadena con interpolacion para incorporar los datos del arreglo
    //en cada repeticion, con += concatenamos cad nueva cadena a la anterior
    accesoriosHTML += `
    <div class="card">  
                    <h2>${productos[indice].nombre}</h2>
                    <img src=${productos[indice].imagen}>
                    <p>${productos[indice].descripcion}</p>
                    <a href="">+ info..</a>
                    <p>Precio: $${productos[indice].precio}</p>
                    <input class="boton-agregar-carrito" type="button" value= " Agregar al carrito " >
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                `; // Esta es la card que va a reemplazar a las que estaban en el html
}

const contenedorAccesorios = document.getElementById("contenedorAccesorios");
// reemplazamos el contenido del div #contenedorAccesorios
contenedorAccesorios.innerHTML = accesoriosHTML;


//Agregamos un listener a los botones de los productos

//Guardamos en variables los elementos HTML que vamos a modificar

const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito"); //le pedimos que nos traiga todos los elementos html que tengan esa clase

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p")

const mensajePagarCarrito = document.querySelector("#mensajeCarrito");

let totalAPagar = 0;

//Agregamos el listener a cada boton agregar
for (let indice = 0; indice < botonesAgregar.length; indice++) {

    function agregarElementoCarrito() {
        //creamos el elemento li
        const elementoLi = document.createElement("li");

        elementoLi.innerText = `${productos[indice].nombre} $${productos[indice].precio}` // nos va a insertar en el "li" el nombre del producto y el precio del que hagamos click

        listaCarrito.appendChild(elementoLi); //Método para agregar hijos a un elemento

        totalAPagar += productos[indice].precio;

        totalCarrito.innerText = "Toal a pagar: $" + totalAPagar;

        mensajePagarCarrito.innerText = "";
    }

    botonesAgregar[indice].addEventListener("click", agregarElementoCarrito)
}

//Agregamos el listener al boton borrar

const botonBorrar = document.querySelector("#boton-borrar");



function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito);


//Agregamos el listener al boton "Ir a Pagar"

const botonPagar = document.querySelector("#boton-pagar");

function irAPagar() {
    if (listaCarrito.innerText === "") {
        mensajePagarCarrito.innerText = "No has seleccionado ningun producto"
    } else {
        window.location.href = "./pagos.html"
    }

}

botonPagar.addEventListener("click", irAPagar)

