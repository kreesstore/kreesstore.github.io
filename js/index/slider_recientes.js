class Producto {
    constructor(id, nombre, precio_mlc, precio_cup, marca, categoria, cantidad, imagen = null, otros_nombres = null, ventas = 0) {
      this.id = id;
      this.nombre = nombre;
      this.precio_mlc = precio_mlc;
      this.precio_cup = precio_cup;
      this.marca = marca;
      this.categoria = categoria;
      this.cantidad = cantidad;
      this.imagen = imagen;
      this.otros_nombres = otros_nombres;
      this.ventas = ventas;
    }
  }


let listaDeNuevosProductos = [
    new Producto(10, "Aceite de Transmisión Automática", "11.57", "2 993.41", "CVT (1L)", "aceites", 12, "media/img/productos/automotriz/aceites/aceite_de_trasmicion_automatica.jpg", 'liquido', 25,),


    new Producto(20, "Alternador", "1", "169 581.68", "Toyota", "alternador", 1, "media/img/productos/automotriz/alternadores/alternador_de_TOYOTA.jpg"),


    new Producto(30, "Bujia", "$", "1 365.61", "LD-20", "bujias", 2, "media/img/productos/automotriz/bujias/LD20.jpg"),


    new Producto(40, "Disco", "$", "9 614.03", "TOYOTA 2L", "discos", 3, "media/img/productos/automotriz/discos/T_2L.jpg"),


    new Producto(50, "Filtro Diesel", "3.49$", "1 152.42", "TOYOTA 2L/3L", "filtros", 22, "media/img/productos/automotriz/filtros/toyota3L.jpg"),


        
    new Producto(60, "LIKS", "1", "266 646.18", "ISU 4JB1T CROM ALFIN FF 34 piston pin", "liks", 1, "media/img/productos/automotriz/liks/motorex.jpg", 'kit de reparacion', 0),
    new Producto(3022, "LIKS", "1", "204 495.32", "KIT MIT 4D56 (91.1MM)", "liks", 1, "media/img/productos/automotriz/liks/toyosia.jpg", 'kit de reparacion', 0),


    new Producto(3001, "Motor de Arranque", "$", "105 053.94", "Nasaki", "motor", 1, "media/img/productos/automotriz/motores/nasaki.jpg"),
    new Producto(3002, "Motor de Arranque", "1$", "144 402.39", "Nasaki", "motor", 1, "media/img/productos/automotriz/motores/verde.jpg"),


    new Producto(1501, "Rodamiento Trasero Conico", "20.83$", "5 767.46", "Union", "rodamiento", 2, "media/img/productos/automotriz/rodamientos/azul.jpg", 'caja de bolas'),
    new Producto(1501, "Rodamiento Trasero Conico", "20.83$", "5 767.46", "No Registrado", "rodamiento", 2, "media/img/productos/automotriz/rodamientos/01.jpg", 'caja de bolas'),

    new Producto(901, "Esfericas Superior", "$", "4 328.36", "HIACE", "esfericas superiores", 4, "media/img/productos/automotriz/esfericas/superior_de_HIACE.jpg"),

]

// Obtener elementos del DOM
let contenedorResultados = document.getElementById("contenedor_resultados");

// Mostrar productos
function mostrarProductos(productos) {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores

    productos.forEach(producto => {
        let cajaContenedora = document.createElement("div");
        cajaContenedora.classList.add("producto-caja");
        let cajaSecundaria = document.createElement("div");
        cajaSecundaria.classList.add("caja-secundaria");

        cajaSecundaria.innerHTML = `<p><span class="producto_span"></span> ${producto.nombre}</p>
                                     <p><span class="producto_span">Marca</span> ${producto.marca}</p>
                                      <p><span class="producto_span">Precio</span> $${producto.precio_cup}</p>`;

        cajaContenedora.appendChild(cajaSecundaria);

        if (producto.imagen) {
            cajaContenedora.style.backgroundImage = `url(${producto.imagen})`;
            cajaContenedora.style.backgroundSize = "cover";
            cajaContenedora.style.backgroundPosition = "center";
        }

        // Si el producto está agotado
        if (producto.cantidad == 0) {
            let cajaContenedora0 = document.createElement("div");
            cajaContenedora0.classList.add("producto-caja-0");
            
            let cont_texto_cero = document.createElement("p");
            cont_texto_cero.classList.add("texto_cero");
            cont_texto_cero.textContent = "Agotado";
            
            let cont_texto_cero_mas = document.createElement("p");
            cont_texto_cero_mas.classList.add("texto_cero_mas");
            cont_texto_cero_mas.textContent = "Mas unidades en camino.";
            
            cajaContenedora0.appendChild(cont_texto_cero);
            cajaContenedora0.appendChild(cont_texto_cero_mas);
            
            cajaContenedora.appendChild(cajaContenedora0);
        }

        cajaContenedora.addEventListener("click", () => abrirProductoEmergente(producto));
        contenedorResultados.appendChild(cajaContenedora);
    });
}

// Función para abrir el producto en un popup
function abrirProductoEmergente(producto) {
    let fondoPopup = document.createElement("div");
    fondoPopup.classList.add("fondo-popup");

    let productoAmpliado = document.createElement("div");
    productoAmpliado.classList.add("producto-popup");

    let contenidoProducto = `
        <table>
            <tr>
                <th class="producto_span">Producto</th>
                <td>${producto.nombre}</td>
            </tr>
            <tr>
                <th class="producto_span">Precio CUP</th>
                <td>$${producto.precio_cup}</td>
            </tr>
            <tr>
                <th class="producto_span">Marca</th>
                <td>${producto.marca}</td>
            </tr>
            <tr>
                <th class="producto_span">Disponibles</th>
                <td>${producto.cantidad}</td>
            </tr>
        </table>`;

    if (producto.imagen) {
        contenidoProducto = `<div class="cont_img_apliada"> <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto"></div>` + contenidoProducto;
    }

    productoAmpliado.innerHTML = contenidoProducto;

    let botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(fondoPopup);
    });

    productoAmpliado.appendChild(botonCerrar);
    fondoPopup.appendChild(productoAmpliado);
    document.body.appendChild(fondoPopup);
}

















// Función que recibe una lista de 12 productos y los muestra en el slider
function mostrarSliderDeProductos(listaProductos) {
    const sliderTrack = document.getElementById("slider-track-recientes");
    sliderTrack.innerHTML = "";
    
    listaProductos.forEach(producto => {
      // Crear la tarjeta con la misma estructura que usas en los resultados de categoría
      let cajaContenedora = document.createElement("div");
      cajaContenedora.classList.add("producto-caja");
      
      let cajaSecundaria = document.createElement("div");
      cajaSecundaria.classList.add("caja-secundaria");
      cajaSecundaria.innerHTML = `<p><span class="producto_span">Producto</span> ${producto.nombre}</p>
                                  <p><span class="producto_span">Marca</span> ${producto.marca}</p>
                                  <p><span class="producto_span">Precio</span> $${producto.precio_cup}</p>`;
      cajaContenedora.appendChild(cajaSecundaria);
      
      // Si el producto tiene imagen, se usa como fondo
      if (producto.imagen) {
        cajaContenedora.style.backgroundImage = `url(${producto.imagen})`;
        cajaContenedora.style.backgroundSize = "cover";
        cajaContenedora.style.backgroundPosition = "center";
      }
      
      // Si el producto está agotado, se añade la superposición
      if (producto.cantidad === 0) {
        let overlay = document.createElement("div");
        overlay.classList.add("producto-caja-0");
        
        let txt = document.createElement("p");
        txt.classList.add("texto_cero");
        txt.textContent = "Agotado";
        
        let txtMas = document.createElement("p");
        txtMas.classList.add("texto_cero_mas");
        txtMas.textContent = "Mas unidades en camino.";
        
        overlay.appendChild(txt);
        overlay.appendChild(txtMas);
        cajaContenedora.appendChild(overlay);
      }
      
      // Al hacer clic se abre la ventana emergente del producto
      cajaContenedora.addEventListener("click", () => abrirProductoEmergente(producto));
      
      sliderTrack.appendChild(cajaContenedora);
    });
  }
  
  // Función para iniciar el desplazamiento automático (auto-scroll con loop)
  function iniciarAutoScroll() {
    const sliderContainer = document.getElementById("slider-container-recientes");
    let scrollSpeed = 1; // píxeles por intervalo
    let interval = setInterval(() => {
      if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
        sliderContainer.scrollLeft = 0;
      } else {
        sliderContainer.scrollLeft += scrollSpeed;
      }
    }, 20);
    
    // Pausar auto-scroll al pasar el mouse sobre el slider
    sliderContainer.addEventListener("mouseover", () => clearInterval(interval));
    
    // Reanudar auto-scroll al salir el mouse
    sliderContainer.addEventListener("mouseout", () => {
      interval = setInterval(() => {
        if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
          sliderContainer.scrollLeft = 0;
        } else {
          sliderContainer.scrollLeft += scrollSpeed;
        }
      }, 20);
    });
  }
  
  // Llama a la función pasando la lista de 12 productos que desees mostrar
  // Ejemplo: se asume que 'listaDeNuevosProductos' es un arreglo con 12 productos
  document.addEventListener("DOMContentLoaded", function() {
    mostrarSliderDeProductos(listaDeNuevosProductos);
    iniciarAutoScroll();
  });
  