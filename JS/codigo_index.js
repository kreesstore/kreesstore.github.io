function redirirgir(){
    event.preventDefault();
    window.location.href = "HTML/tienda.html"
}

class Producto {
    constructor(id, nombre, precio_mlc, precio_cup, marca, categoria, cantidad, imagen = null) {
        this.id = id;
        this.nombre = nombre;
        this.precio_mlc = precio_mlc;
        this.precio_cup = precio_cup;
        this.marca = marca;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

// Lista de Ultimos Productos Agregados //
let productosTotales = [

    
    new Producto(403, "Aceite de Transmision Automatica", "11.57$", "4 136.58$", "CVT (1L)", "aceites", 0, "IMG/Productos/Automotriz/aceite/cvt.jpg"),

    new Producto(104, "Filtro De Aire", "$", "2 108.48$", "HYUNDAY", "filtros", 2, "IMG/Productos/Automotriz/filtro/aire.jpg"),

    new Producto(1104, "Disco MIT", "$", "15 415.12$", "54/4D55/56", "discos", 0, "IMG/Productos/Automotriz/discos/cloche.jpg"),

    new Producto(3001, "Motor de Arranque", "$", "105 053.94$", "No Registrado", "motor", 10, "IMG/Productos/Automotriz/motores/nasaki.jpg"),

    new Producto(3021, "LIKS", "1$", "266 646.18$", "Motrex", "liks", 10, "IMG/Productos/Automotriz/liks/motorex.jpg"),

    new Producto(1302, "Anillos", "$", "8 323.33$", "STD TOYOTA 2L(5929)", "anillos", 0, "IMG/Productos/Automotriz/anillos/2.jpg"),

    new Producto(802, "Bujia", "$", "1 365.61$", "LD-20", "bujias", 0, "IMG/Productos/Automotriz/bujias/LD20.jpg"),

    new Producto(1, "Bateria 12V 75AH", "145.00$", "57 384.40$", "No Registrada", "baterias", 0, "IMG/Productos/Automotriz/bateria/75AH.jpg"),



];

// Obtener elementos del DOM
let contenedorResultados = document.getElementById("contenedor_resultados");

function mostrarProductos(productos) {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores

    productos.forEach(producto => {
        let cajaContenedora = document.createElement("div");
        cajaContenedora.classList.add("producto-caja");
        let cajaSecundaria = document.createElement("div");
        cajaSecundaria.classList.add("caja-secundaria");
        // Mostrar solo el nombre, la marca y el precio en la vista inicial
        cajaSecundaria.innerHTML = `<p><span class="producto_span">Producto</span> ${producto.nombre}</p>
                                    <p><span class="producto_span">Marca</span> ${producto.marca}</p>
                                    <p><span class="producto_span">Precio</span> ${producto.precio_cup}</p>`;

        cajaContenedora.appendChild(cajaSecundaria)

        // Verificar si el producto tiene una imagen y establecerla como fondo
        if (producto.imagen) {
            cajaContenedora.style.backgroundImage = `url(${producto.imagen})`;
            cajaContenedora.style.backgroundSize = "cover";  // Para ajustar la imagen al contenedor
            cajaContenedora.style.backgroundPosition = "center center"; // Centrar la imagen
        }

        if (this.cantidad == 0) {
            console.log("Ya estamos en 0")
        }

        // Agregar evento para expandir el producto cuando se hace clic
        cajaContenedora.addEventListener("click", () => abrirProductoEmergente(producto));

        contenedorResultados.appendChild(cajaContenedora);
    });
}

function abrirProductoEmergente(producto) {
    // Crear un contenedor de fondo para el "popup"
    let fondoPopup = document.createElement("div");
    fondoPopup.classList.add("fondo-popup");

    // Crear el contenedor del producto ampliado
    let productoAmpliado = document.createElement("div");
    productoAmpliado.classList.add("producto-popup");

    // Rellenar con toda la información del producto
    let contenidoProducto = `
        <table>
            <tr>
                <th class="producto_span">Tipo de Producto</th>
                <td>${producto.nombre}</td>
            <tr>
            <tr>
                <th class="producto_span">Precio CUP</th>
                <td>${producto.precio_cup}</td>
            <tr>
            <tr>
                <th class="producto_span">Marca</th>
                <td>${producto.marca}</td>
            <tr>
            <tr>
                <th class="producto_span">Disponibles</th>
                <td>${producto.cantidad}</td>
            <tr>
        </table>`;

    // Verificar si hay una imagen para mostrar
    if (producto.imagen) {
        contenidoProducto = `<img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">` + contenidoProducto;
    }

    // Añadir contenido al contenedor del producto ampliado
    productoAmpliado.innerHTML = contenidoProducto;

    // Botón para cerrar el "popup"
    let botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(fondoPopup); // Elimina el popup
    });

    productoAmpliado.appendChild(botonCerrar);
    fondoPopup.appendChild(productoAmpliado);
    document.body.appendChild(fondoPopup); // Añadir el fondo del popup a la página
}

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    let productosFiltrados = productosTotales.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// Búsqueda de productos
function buscarProducto(event) {
    event.preventDefault(); // Prevenir recarga de la página

    let valorBusqueda = document.getElementById("input_busqueda").value.toLowerCase().trim();
    if (valorBusqueda.length < 3) {
        alert("Debe ingresar al menos 3 caracteres para la búsqueda.");
        return;
    }

    let productosFiltrados = productosTotales.filter(producto =>
        producto.nombre.toLowerCase().includes(valorBusqueda) ||
        producto.marca.toLowerCase().includes(valorBusqueda)
    );

    if (productosFiltrados.length > 0) {
        mostrarProductos(productosFiltrados);
    } else {
        contenedorResultados.innerHTML = "<p>No se encontraron productos con ese nombre.</p>";
    }
}

mostrarProductos(productosTotales)












function abrirProductoEmergenteOferta() {
    // Crear un contenedor de fondo para el "popup"
    let fondoPopup = document.createElement("div");
    fondoPopup.classList.add("fondo-popup");

    // Crear el contenedor del producto ampliado
    let productoAmpliado = document.createElement("div");
    productoAmpliado.classList.add("producto-popup");

    let producto = new Producto(201, "Neumático Delantero 500*8", "$", "14 346.41$", "No Registrado", "neumaticos", 0, "IMG/Automotriz/neumatico.jpg")

    // Rellenar con toda la información del producto
    let contenidoProducto = `
        <p><span class="producto_span">ID:</span> ${producto.id}</p>
        <p><span class="producto_span">Nombre:</span> ${producto.nombre}</p>
        <p><span class="producto_span">Precio MLC:</span> ${producto.precio_mlc}</p>
        <p><span class="producto_span">Precio CUP:</span> ${producto.precio_cup} | <span class="oferta_span">15 000.00$</span></p>
        <p><span class="producto_span">Marca:</span> ${producto.marca}</p>
        <p><span class="producto_span">Cantidad Disponible:</span> ${producto.cantidad}</p>`;


    // Verificar si hay una imagen para mostrar
    if (producto.imagen) {
        contenidoProducto = `<img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">` + contenidoProducto;
    }

    // Añadir contenido al contenedor del producto ampliado
    productoAmpliado.innerHTML = contenidoProducto;

    // Botón para cerrar el "popup"
    let botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(fondoPopup); // Elimina el popup
    });

    productoAmpliado.appendChild(botonCerrar);
    fondoPopup.appendChild(productoAmpliado);
    document.body.appendChild(fondoPopup); // Añadir el fondo del popup a la página
}

let oferta_avierta = document.getElementById("oferta_avierta_ID")
let oferta = document.getElementById("oferta");
// Borrado por error // oferta.addEventListener("click", abrirProductoEmergenteOferta)