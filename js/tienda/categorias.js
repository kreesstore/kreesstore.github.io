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

function smoothScroll(target) {
    const targetElement = document.getElementById(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.categoria__boton').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la recarga de la página
        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del href
        smoothScroll(targetId);
    });
});

// Lista global de productos
let productosTotales = [

     //---------------------//
    // --- Ferreteria ---  //
   //---------------------//

    // DiscoF --- discof
    new Producto(1, "Disco de Corte", "$", "1 172.00", 'PLAYWOOD (7025 X 140T X 5/8")', "discof", 0),
    new Producto(2, "Disco de Corte", "$", "1 257.74", 'PLAYWOOD (705 X 180T X 5/8")', "discof", 0),
    new Producto(3, "Disco de Sierra", "$", "3 354.42", '"10(10" X 60T X 7/8")', "discof", 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Lima --- lima

    new Producto(101, "Lima", "$", "1 862.84", "P/Motosierra 5.5mm X 3pcs", "lima", 2, "../../media/img/productos/ferreteria/limas/moto.jpg"),
    new Producto(102, "Lima", "$", "2 540.82", 'NO.221 Plana 10"m/plast', "lima", 2, "../../media/img/productos/ferreteria/limas/plana.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Pegamentos --- pegamento

    new Producto(201, "Cola Blanca 4L", "$", "9 070.00", "Adhest", "pegamento", 5, "../../media/img/productos/ferreteria/pegamento/cola_blanca.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Tornillos --- tornillos

    new Producto(301, "Clavo de Alambre", "$", "32 574.43", "No Registrado", "suministrosc", 0),
    new Producto(302, "Tornillos", "$", "2 917.36", "No Registrado", "tornillos", 5, "../../media/img/productos/ferreteria/tornillos/tornillos.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

     //---------------------//
    // --- AUTOMOTRIZ ---  //
   //---------------------//

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //
    
    // Aceites

    new Producto(401, "Aceite", "7.12", "9 957.30", "15W40 Diesel API CH-4(5L)", "aceites", 15, "../../media/img/productos/automotriz/aceites/petroleo.jpg", 'liquido', 20),
    new Producto(402, "Aceite", "7.12", "12 727.95.59", "15W40 Gasolina API SL(5L)", "aceites", 5, "../../media/img/productos/automotriz/aceites/petroleo.jpg", 'liquido', 10),
    new Producto(403, "Aceite de Transmisión Automática", "11.57", "2 993.41", "CVT (1L)", "aceites", 12, "../../media/img/productos/automotriz/aceites/aceite_de_trasmicion_automatica.jpg", 'liquido', 25,),
    new Producto(404, "Líquido de Freno", "12.11", "3 386.41", "(500ml)", "aceites", 0, "../../media/img/productos/automotriz/aceites/liquido_de_frenos.jpg", 'liquido', 11),
    new Producto(405, "Grasa de Calcio Multiuso", "9.62", "2 691.28", "MP3 (1Kg)", "aceites", 9, "../../media/img/productos/automotriz/aceites/grasa.jpg", "liquido", 15),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Alternador -- alternador

    new Producto(3012, "Alternador", "1", "169 581.68", "Toyota", "alternador", 1, "../../media/img/productos/automotriz/alternadores/alternador_de_TOYOTA.jpg"),
    new Producto(3013, "Alternador", "2", "129 925.29", "HD260 AEROCITY", "alternador", 2, "../../media/img/productos/automotriz/alternadores/FormatFactoryLumii_20250414_100856226.jpg"),
    new Producto(3014, "Alternador", "2", "0", "HD260 AEROCITY", "alternador", 0, "../../media/img/productos/automotriz/alternadores/06.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //
    // Amortiguación
    new Producto(301, "Amortiguador Derecho", "77.64", "19 749.58", "Atos", "amortiguacion", 2, "../../media/img/productos/automotriz/amortiguadores/amortiguador_ATOS.jpg"),
    //new Producto(302, "Amortiguador Isquierdo", "77.64", "21 292.07", "Atos", "amortiguacion", 1, "../IMG/Productos/Alt/amortigua.png"),
    new Producto(301, "Amortiguador Trasero", "77.64", "14 764.24", "5Ton HD120", "amortiguacion", 4, "../../media/img/productos/automotriz/amortiguadores/FormatFactoryamortiguador.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Anillos --- anillos

    new Producto(1301, "Anillos", "$", "8 868.33", "STD TOYOTA 3L", "anillos", 5, "../../media/img/productos/automotriz/anillos/1.jpg"),
    new Producto(1302, "Anillos", "$", "8 323.33", "STD TOYOTA 2L(5929)", "anillos", 5, "../../media/img/productos/automotriz/anillos/2.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Baterías
    //new Producto(1, "Batería 12V 200AH", "330.00", "131 769.10", "Cobelak", "baterias", 0, "../IMG/Productos/Alt/bateria.jpg"),
    new Producto(1, "Batería 12V 155AH", ".00", "113 138.35", "Cobelak", "baterias", 4, "../../media/img/productos/automotriz/baterias/155AH.jpg", "batery", 15),
    //new Producto(1, "Batería 12V 115AH", "240.00", "93 063.46", "Cobelak", "baterias", 0, "../IMG/Productos/Alt/bateria.jpg"),
    //new Producto(1, "Batería 12V 110AH", "210.00", "83 351.62", "Cobelak", "baterias", 0, "../IMG/Productos/Alt/bateria.jpg"),
    new Producto(1, "Batería 12V 75AH", ".00", "57 384.40", "Cobelak", "baterias", 6, "../../media/img/productos/automotriz/baterias/75AH.jpg", "batery", 28),

    new Producto(1, "Batería de Moto 12V 10AH", ".00", "21 362.63", "KM Batteries", "baterias", 6, "../../media/img/productos/automotriz/baterias/moto_14AH.jpg", "batery"),
    new Producto(1, "Batería de Moto 12V 14AH", ".00", "20 542.89", "KM Batteries", "baterias", 1, "../../media/img/productos/automotriz/baterias/moto_14AH.jpg", "batery"),
    new Producto(1, "Batería de Moto 12V 18AH", ".00", "23 853.41", "KM Batteries", "baterias", 2, "../../media/img/productos/automotriz/baterias/moto_18AH.jpg", "batery"),
    new Producto(1, "Batería de Moto 12V 20AH", ".00", "20 083.75", "KM Batteries", "baterias", 2, "../../media/img/productos/automotriz/baterias/moto_20AH.jpg", "batery"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Biela --- biela

    new Producto(1801, "Metal Biela 4D", "31.60", "10 428.02", 'MITSUBISHI STD 4D56(M"2D)', "biela", 1, "../../media/img/productos/automotriz/bielas/mitsu.jpg"),
    new Producto(1802, "Juego de Metal Apoyo", "$", "4 692.71", 'C190/240 0.50', "biela", 2, "../../media/img/productos/automotriz/bielas/C190.jpg"),
    new Producto(1803, "Juego de Metal de Biela", "$", "3 979.80", ' C240 STD', "biela", 6, "../../media/img/productos/automotriz/bielas/C240.jpg"),
    new Producto(1804, "Metal de Bancada", "$", "3 537.59", 'NISSAN TD/27STD', "biela", 1, "../../media/img/productos/automotriz/bielas/nissan.jpg"),

    new Producto(1803, "Juego de Metal de Biela", "$", "4 389.17", ' C240 0.50', "biela", 6, "../../media/img/productos/automotriz/bielas/C240_050.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Buje --- buje

    new Producto(1201, "Buje", "0.97$", "267.05", "No Registrado", "buje", 0, "../../media/img/productos/automotriz/bujes/Lumii_20250114_112350448.jpg"),
    new Producto(1202, "Buje de la Parrilla Delantera Inferior A", "0.97$", "315.03", "No Registrado", "buje", 0, "../../media/img/productos/automotriz/bujes/buje.jpg"),
    new Producto(1203, "Buje de la Parrilla", "0", "1169.38", "No Registrado", "buje", 10, "../../media/img/productos/automotriz/bujes/buje_de_la_parrilla.jpg"),

   // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Bujias --- bujias

    new Producto(801, "Calentador de Bujias", "$", "1 394.71", "TOYOTA 5L", "bujias", 100, "../../media/img/productos/automotriz/bujias/toyota.jpg"),
    new Producto(802, "Bujia", "$", "1 365.61", "LD-20", "bujias", 2, "../../media/img/productos/automotriz/bujias/LD20.jpg"),
    new Producto(803, "Calentador de Bujias", "3.57$", "1 177.76", "MITSUBISHI 4D 5612V(PEO7)", "bujias", 2, "../../media/img/productos/automotriz/bujias/mitsubishi.jpg"),
    new Producto(804, "Bujia", "$", "1 185.73", "itsuELF LD-20", "bujias", 68, "../../media/img/productos/automotriz/bujias/itsuELF.jpg"),
    new Producto(805, "Bujia", "$", "1 185.73", "itsu4J LD-20", "bujias", 68, "../../media/img/productos/automotriz/bujias/itsu4J.jpg"),// t 2l

    new Producto(806, "Calentador de Bujias", "$", "1 323.27", "TOYOTA 2L/3l 11v", "bujias", 200, "../../media/img/productos/automotriz/bujias/calentador_2L_3L_11v.jpg"),// t 2l

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Correas --- correas

    new Producto(1001, "Correa", "7.86$", "1 160.30", "No Registrada", "correas", 4, "../../media/img/productos/automotriz/correas/correa.jpg"),
    new Producto(1002, "Correa", "$", "3 537.57", "LD-20", "correas", 10, "../../media/img/productos/automotriz/correas/LD20.jpg"),
    new Producto(1003, "Correa de Tiempo T99", "$", "2 302.63", "MITSUBISHI", "correas", 10, "../../media/img/productos/automotriz/correas/DeTiempoT99.jpg"),
    new Producto(1002, "Correa", "$", "3 401.82$", "A-29", "correas", 3, "../../media/img/productos/automotriz/correas/A29.jpg"),
    new Producto(1002, "Correa", "$", "7 654.10", "2L-3L-5L", "correas", 3, "../../media/img/productos/automotriz/correas/2L3L5L.jpg"),
    new Producto(1002, "Correa", "$", "5 987.25", "42", "correas", 3, "../../media/img/productos/automotriz/correas/42.jpg"),
    new Producto(1002, "Correa", "$", "7 610.61", "2L T 130", "correas", 2, "../../media/img/productos/automotriz/correas/2lT130.jpg"),
    
    new Producto(1011, "Correa Trapezoidal (Lada alternador Yamz)", "0", "1 662.32", "9.5-X-960", "correas", 20, "../../media/img/productos/automotriz/correas/9_5x960_trapezoidal.jpg"),
    // new Producto(1012, "Correa Trapezoidal (Lada alternador Yamz)", "0", "2 186.11", "13-X9-40-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    new Producto(1013, "Correa Trapezoidal (Lada alternador Yamz)", "0", "2 186.11", "13-X-950-0", "correas", 40, "../../media/img/productos/automotriz/correas/13x950_trapezoidal.jpg"),
    new Producto(1014, "Correa Trapezoidal (Lada alternador Yamz)", "0", "2 208.49", "13-X-965-0", "correas", 10, "../../media/img/productos/automotriz/correas/13x965_trapezoidal.jpg"),

    new Producto(1015, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 730.87", "13-X-990", "correas", 10, "../../media/img/productos/automotriz/correas/13x990_trapezoidal.jpg"),

    new Producto(1016, "Correa Trapezoidal (Hyundai Mitsubishi)", "0", "2 242.06", "13-X-1000", "correas", 10, "../../media/img/productos/automotriz/correas/13x1000_trapezoidal.jpg"),
    new Producto(1017, "Correa Trapezoidal (Hyundai Mitsubishi)", "0", "2 309.20", "13-X-1040", "correas", 30, "../../media/img/productos/automotriz/correas/13x1040_trapezoidal.jpg"),
    // new Producto(1018, "Correa Trapezoidal (Hyundai Mitsubishi)", "0", "2 320.39", "13-X1-05-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1019, "Correa Trapezoidal (Hyundai Mitsubishi)", "0", "2 342.77", "13-X1-07-5", "correas", 20, "../../media/img/productos/automotriz/correas/"),

    // new Producto(1020, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 698.72", "13-X1-12-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1021, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 798.72", "13-X1-12-5", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1022, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 832.29", "13-X1-14-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1023, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 777.04", "13-X1-17-5", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1024, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 566.56", "13-X1-24-5", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1025, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 566.56", "13-X1-25-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1026, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 588.94", "13-X1-27-0", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1027, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 588.94", "13-X1-27-5", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    new Producto(1028, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 611.32", "13-X-1290", "correas", 10, "../../media/img/productos/automotriz/correas/13x1290_trapezoidal.jpg"),
    // new Producto(1029, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 611.32", "13-X1-29-5", "correas", 10, "../../media/img/productos/automotriz/correas/"),
    // new Producto(1030, "Correa Trapezoidal (Equipos Ligeros)", "0", "1 622.51", "13-X1-30-0", "correas", 4, "../../media/img/productos/automotriz/correas/"),
    new Producto(1031, "Correa Trapezoidal (Compresores Equipos I)", "0", "1 745.60", "13-X-1400", "correas", 4, "../../media/img/productos/automotriz/correas/13x1400_trapezoidal.jpg"),

    new Producto(1032, "Correa Trapezoidal (Bomba de Agua Yamz)", "0", "2 477.04", "17-X-800-0", "correas", 4, "../../media/img/productos/automotriz/correas/17x800_trapezoidal.jpg"),
    new Producto(1033, "Correa Trapezoidal (Camiones Howo)", "0", "2 555.37", "17-X-838-0", "correas", 4, "../../media/img/productos/automotriz/correas/17x838_trapezoidal.jpg"),
    new Producto(1034, "Correa Trapezoidal (Camiones Howo)", "0", "2 577.75", "17-X850-0", "correas", 4, "../../media/img/productos/automotriz/correas/17x850_trapezoidal.jpg"),
    new Producto(1035, "Correa Trapezoidal (Motores Yamz)", "0", "2 767.98", "17-X-960-0", "correas", 4, "../../media/img/productos/automotriz/correas/17x960_trapezoidal.jpg"),

    new Producto(1036, "Correa Trapezoidal (Tractor Jun 6)", "0", "2 740.07", "17-X-1372", "correas", 4, "../../media/img/productos/automotriz/correas/17x1372_trapezoidal.jpg"),
    new Producto(1037, "Correa Trapezoidal (Tractor Jun 7)", "0", "2 607.21", "17-X-1422", "correas", 4, "../../media/img/productos/automotriz/correas/17x1422_trapezoidal.jpg"),

    new Producto(1038, "Correa Trapezoidal (Motores Fiat 8210)", "0", "2 629.59", "17-X-1425", "correas", 4, "../../media/img/productos/automotriz/correas/17x1425_trapezoidal.jpg"),
    // new Producto(1039, "Correa Trapezoidal (Motores Fiat 8210)", "0", "2 674.35", "17-X1-45-0", "correas", 4, "../../media/img/productos/automotriz/correas/"),
    new Producto(1040, "Correa Trapezoidal (Motores Fiat 8210)", "0", "2 920.52", "17-X-1575", "correas", 4, "../../media/img/productos/automotriz/correas/17x1575_trapezoidal.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Discos --- discos @@@@@@@@@@@@@@@@@@@@@@@@@

    // new Producto(1104, "Disco de Embrage", "$", "9 879.82", "TOYOTA 3L(35121)", "discos", 0, "../IMG/Productos/Automotriz/discos.jpg"),
    new Producto(1105, "Disco", "$", "9 614.03", "TOYOTA 2L", "discos", 3, "../../media/img/productos/automotriz/discos/T_2L.jpg"),
//  new Producto(1105, "Plato de", "$", "9 879.82", "TOYOTA 3L", "discos", 0, "../../media/img/productos/automotriz/discos/2C.jpg"),

    new Producto(1101, "Disco de Freno", "$", "9 402.03", "MITSUBISHI MONTERO/L200 4WD", "discos", 4, "../../media/img/productos/automotriz/discos/mitsubishi_L200.jpg"),

    new Producto(1104, "Disco", "$", "15 415.12", "MIT 4G54/4D55/56/4M40", "discos", 2, "../../media/img/productos/automotriz/discos/MIT_4G54_4D55_56_4M40.jpg"),

    new Producto(1105, "Disco", "$", "9 438.94", "2C", "discos", 2, "../../media/img/productos/automotriz/discos/2C.jpg"),

    new Producto(1104, "Disco de Cloche", "$", "9 614.31", "T 2L", "discos", 2, "../../media/img/productos/automotriz/discos/cloche_T_2L.jpg"),

    new Producto(1104, "Disco", "$", "9 614.31", "Mitsubishi 4D 55/4D 56", "discos", 2, "../../media/img/productos/automotriz/discos/cloche_T_2L.jpg"),

    new Producto(1104, "Plato de Embrague", "$", "15 107.72", "Toyota 3L", "discos", 2, "../../media/img/productos/automotriz/discos/plato_de_embrague_toyota_3L.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Kit de Reparacion --- kit

    new Producto(601, "Kit de Reparación EMP", "0", "11 687.39", "TOYOTA 2L(54083)", "kit", 4,"../../media/img/productos/automotriz/emp/Toyota2L.jpg", "kit de Reparacion"),
    new Producto(602, "Kit de Reparación", "0", "9 717.82", "TOYOTA 5L(54280)", "kit", 4, "../../media/img/productos/automotriz/emp/toyota5L.jpg", "kit de Reparacion"),
    new Producto(603, "Kit de Reparación", "0", "11 824.99", "TOYOTA 3L", "kit", 4, "../../media/img/productos/automotriz/emp/toyota3L.jpg", "kit de Reparacion"),
    new Producto(604, "Kit de Reparación", "0", "6 470.86", "MITSUBISHI Lanser(781041/M)", "kit", 4, "../../media/img/productos/automotriz/emp/mitsuLANCER.jpg", "kit de Reparacion"),
    new Producto(605, "Kit de Reparación", "0", "11 134.28", "NISSAN TD27(3685M)", "kit", 4, "../../media/img/productos/automotriz/emp/nissanTD27.jpg", "kit de Reparacion"),

    new Producto(605, "Kit de Reparación", "0", "577.18", "Esclava Auto Geely", "kit", 20, "../../media/img/productos/automotriz/emp/kit_esclava.jpg", "kit de Reparacion"),
    new Producto(605, "Kit de Reparación", "0", "1 887.78", "Cran Trasero Howo", "kit", 4, "../../media/img/productos/automotriz/emp/kit_trasero_howo.jpg", "kit de Reparacion"),

    // Kit de Clanes |4| 

    new Producto(606, "Kit de Clanes", "0", "1 887.78", "No registrada", "kit", 4, "../../media/img/productos/automotriz/emp/clanes.jpg", "kit de Reparacion"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Esfericas Superiores --- esfericas superiores

    new Producto(901, "Esféricas Superior", "$", "4 328.36", "HIACE", "esfericas superiores", 0, "../../media/img/productos/automotriz/esfericas/superior_de_HIACE.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Farol --- farol

    new Producto(1301, "Farol Trasero", "51.93$", "13 021.56", "No Registrada", "farol", 2, "../../media/img/productos/automotriz/faroles/01.jpg"),
    new Producto(1301, "Farol Trasero CU", "51.93$", "15 849.39", "No Registrada", "farol", 2, "../../media/img/productos/automotriz/faroles/02.jpg"),
    new Producto(1301, "Farol Trasero CU", "51.93$", "15 849.39", "No Registrada", "farol", 2, "../../media/img/productos/automotriz/faroles/03.jpg"),
    new Producto(1301, "Farol Trasero CU", "51.93$", "18 280.35", "No Registrada", "farol", 2, "../../media/img/productos/automotriz/faroles/04.jpg"),
    new Producto(1301, "Farol Trasero CU", "51.93$", "18 280.35", "No Registrada", "farol", 2, "../../media/img/productos/automotriz/faroles/05.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Filtros
    //new Producto(101, "Bombin de Petroleo", "26.69$", "9 609.88$", "Pendiente", "filtros", 15, "../../media/img/productos/automotriz/filtros.jpg"),
    new Producto(102, "Filtro de Aceite", "0", "1 166.02", "TOYOTA 2E/4A", "filtros", 12, "../../media/img/productos/automotriz/filtros/toyotaYaris.jpg", 'filtro', 35),
    new Producto(102, "Filtro de Gasolina", "0", "1 761.72", "HYUNDAY", "filtros", 2, "../../media/img/productos/automotriz/filtros/gasolina.jpg", 'filtro', 26),
    new Producto(103, "Filtro Decantador de Agua", "0", "3 753.28", "HYUNDAY", "filtros", 2, "../../media/img/productos/automotriz/filtros/decantador.jpg"),
    new Producto(104, "Filtro De Aire", "0", "1 979.02", "HYUNDAY", "filtros", 2, "../../media/img/productos/automotriz/filtros/aire.jpg"),
    new Producto(105, "Filtro Diesel", "0", "1 187.02", "MITSUBISHI L200/L300", "filtros", 2, "../../media/img/productos/automotriz/filtros/dieselL300.jpg"),
    new Producto(106, "Filtro Diesel", "0", "1 155.01", "NISSAN SD23/TD27(02N10)", "filtros", 10, "../../media/img/productos/automotriz/filtros/dieselTD27.jpg"),
    new Producto(107, "Filtro Diesel", "0", "1 152.42", "TOYOTA 2L/3L", "filtros", 22, "../../media/img/productos/automotriz/filtros/toyota3L.jpg"),
    new Producto(108, "Filtro Diesel", "0", "1 159.91", "MITSUBISHI CANTER/ROSA 4D30", "filtros", 28, "../../media/img/productos/automotriz/filtros/mitsu33.jpg"),
    
    new Producto(109, "Filtro de Aire Acondicionado", "0", "2 616.95", "DAEWOO Mega 250 FC", "filtros", 6, "../../media/img/productos/automotriz/filtros/filtro_arieacondicionado.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Frenos 
    // new Producto(501, "Taco de Freno", "$", "5 077.34", "TOYOTA HIACE", "frenos", 2),
    new Producto(502, "Banda de Freno de Emergencia", "67.58", "8 110.00$", "No Registrado", "frenos", 2, "../../media/img/productos/automotriz/frenos/HIACE.jpg"),
    new Producto(503, "Juego de Banda de Freno", "22.97", "7 475.58", "TRUCK", "frenos", 2, "../../media/img/productos/automotriz/frenos/TRUCK.jpg"),
    //  NISSAN | 1 | 8 966.38
    new Producto(504, "Pastillas de Freno Delanteras", "22.97", "8 966.38", "TRUCK", "frenos", 0, "../../media/img/productos/automotriz/frenos/pastilla_de_freno.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //
    
    // LIKS --- liks
    
    new Producto(3021, "LIKS", "1", "266 646.18", "ISU 4JB1T CROM ALFIN FF 34 piston pin", "liks", 1, "../../media/img/productos/automotriz/liks/motorex.jpg", 'kit de reparacion', 0),
    new Producto(3022, "LIKS", "1", "204 495.32", "KIT MIT 4D56 (91.1MM)", "liks", 1, "../../media/img/productos/automotriz/liks/toyosia.jpg", 'kit de reparacion', 0),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Manguera --- manguera
    new Producto(1901, "Manguera de Entrada Del Radiador", "11.26$", "3 664.43", "No Espesificado", "manguera", 5, "../../media/img/productos/automotriz/mangueras/entradaYsalida.jpg"),
    new Producto(1902, "Manguera de Salida Del Radiador", "11.26$", "3 664.43", "No Espesificado", "manguera", 5, "../../media/img/productos/automotriz/mangueras/entradaYsalida.jpg"),
    new Producto(1903, "Manguera Corrugada 32 X 700", "15.38$", "4 778.00", "No Registrado", "manguera", 10, "../../media/img/productos/automotriz/mangueras/mediana.jpg"),
    new Producto(1904, "Manguera Corrugada 38 x 500", "11.26$", "4 778.00", "No Registrado", "manguera", 10, "../../media/img/productos/automotriz/mangueras/larga.jpg"),
    new Producto(1905, "Manguera de Freno", "11.26$", "1 560.96", "No Registrado", "manguera", 2, "../../media/img/productos/automotriz/mangueras/deFreno.jpg"),
    
    new Producto(1905, "Manguera de Freno HID delantero", "11.26$", "1 789.25", "No Registrado", "manguera", 2, "../../media/img/productos/automotriz/mangueras/freno_hid_delantero.jpg"),
    new Producto(1905, "Manguera de Freno HID trasero", "11.26$", "1 817.25", "No Registrado", "manguera", 2, "../../media/img/productos/automotriz/mangueras/freno_hid_trasero.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //
    
    // Motor --- motor

    new Producto(3001, "Motor de Arranque", "$", "105 053.94", "Nasaki", "motor", 1, "../../media/img/productos/automotriz/motores/nasaki.jpg"),
    new Producto(3002, "Motor de Arranque", "1$", "144 402.39", "Nasaki", "motor", 1, "../../media/img/productos/automotriz/motores/verde.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Neumáticos
    new Producto(201, "Neumático Delantero 500*80", "$", "14 346.41", "No Registrado", "neumaticos", 4, "../../media/img/productos/automotriz/neumaticos/500_80.jpg", 'goma rueda', 20),
    new Producto(202, "Neumático Trasero 6 50*10", "$", "16 692.81", "No Registrado", "neumaticos", 0, "../../media/img/productos/automotriz/neumaticos/6__50_10.jpg", "goma rueda", 28),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Pinza --- pinza

    new Producto(1701, "Pinza de Freno", "204.10$", "54 544.63", "Tracero Derecho.27", "pinza", 2, "../../media/img/productos/automotriz/pinzas/pinza.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Reten --- reten

    new Producto(1604, "Retente Aceite de Ruedas Delanteras", "$", "236.27", "No Registrado", "reten", 2, "../../media/img/productos/automotriz/retenes/delanteras.jpg", 'retente'),
    new Producto(1605, "Retente de Aceite", "$", "348.60", "No Registrado", "reten", 2, "../../media/img/productos/automotriz/retenes/reten.jpg", 'retente'),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Rodamiento --- rodamiento 

    new Producto(1501, "Rodamiento Trasero Conico", "20.83$", "4 987.41", "Union", "rodamiento", 2, "../../media/img/productos/automotriz/rodamientos/azul.jpg", 'caja de bolas'),
    new Producto(1501, "Rodamiento Trasero Conico", "20.83$", "4 987.41", "No Registrado", "rodamiento", 2, "../../media/img/productos/automotriz/rodamientos/01.jpg", 'caja de bolas'),
    // AAAAAAA
    new Producto(1501, "Rodamiento Conico", "20.83$", "16 258.71", "Ford / Ford Sprint / Jeep Cherokee / Nissan / N.Navara / Frontier", "rodamiento", 2, "../../media/img/productos/automotriz/rodamientos/01.jpg", 'caja de bolas'),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Juntas --- juntas

    new Producto(701, "Tapa de BLOCK", "$", "3 733.98", "4D-30", "juntas", 1, "../../media/img/productos/automotriz/sellos/juntaBlock4D.jpg", 'tapa', 6),
    new Producto(702, "Tapa de BLOCK", "$", "4 078.62", "LD-20", "juntas", 2, "../../media/img/productos/automotriz/sellos/juntaBlockLD20.jpg", 'tapa', 7,),
    new Producto(703, "Junta de Inyectores", "0.64$", "175.37", "No Registrado", "juntas", 4),
    
    new Producto(706, "Sello de Aceite C/V", "3.99$", "968.19", "No Registrado", "juntas", 2, "../../media/img/productos/automotriz/sellos/aceite.jpg", 'seyo', 8),
    new Producto(707, "Junta", "0.64$", "11 687.30", "Toyota 2L", "juntas", 2),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Otros --- otros  
    new Producto(3030, "Bomba de Agua", "1$", "19 897.59", "No Registrado", "otros", 2, "../../media/img/productos/automotriz/otros/bomba.jpg"),

    new Producto(3031, "Radiador", "1$", "14 892.81", "No Registrado", "otros", 0, "../../media/img/productos/automotriz/otros/radiador.jpg"),

    new Producto(3031, "Flacher 24V", "1$", "524.02", "L*MAF-1030-24", "otros", 0, "../../media/img/productos/automotriz/otros/flasher.jpg"),

    new Producto(3032, "Rotula de Dirección", "1$", "2265.57", "H100 minibus93", "otros", 4, "../../media/img/productos/automotriz/otros/rotula.jpg"),

    new Producto(3033, "Barra de Transmisión", "1$", "92 578.35", "Toyota", "otros", 1, "../../media/img/productos/automotriz/otros/barra.jpg"),

    new Producto(3034, "Llanta", "1$", "29 897.25", "Toyota", "otros", 1, "../../media/img/productos/automotriz/otros/yanta.jpg"),

    new Producto(3035, "Deslizante de la Caja", "0$", "27 827.82", "Hyundai", "otros", 2, "../../media/img/productos/automotriz/otros/deslisante.jpg"),

    new Producto(3035, "Kit de Clanes", "0$", "1887.78", "Camion Howo", "otros", 4, "../../media/img/productos/automotriz/otros/clanes.jpg"),

    // ------------------------------------------------------------------------------------------------ //
    // ************************************************************************************************ //
    // ------------------------------------------------------------------------------------------------ //

    // Banda --- banda

    new Producto(1401, "Banda", "35$", "7 026.94", "No Registrada", "banda", 2),
];

//Slider//

// Función para crear el slider con los 12 productos más vendidos
function mostrarSliderMejoresVentas() {
    // Filtra productos que tengan ventas registradas y los ordena de mayor a menor
    let productosConVentas = productosTotales.filter(producto => producto.ventas && producto.ventas > 0);
    productosConVentas.sort((a, b) => b.ventas - a.ventas);
    let mejoresProductos = productosConVentas.slice(0, 10);
    
    const sliderTrack = document.getElementById("slider-track");
    sliderTrack.innerHTML = "";
    
    mejoresProductos.forEach(producto => {
        // Se crea la tarjeta usando la misma estructura que en mostrarProductos()
        let cajaContenedora = document.createElement("div");
        cajaContenedora.classList.add("producto-caja");
        
        let cajaSecundaria = document.createElement("div");
        cajaSecundaria.classList.add("caja-secundaria");
        cajaSecundaria.innerHTML = `<p><span class="producto_span"></span> ${producto.nombre}</p>
                                    <p><span class="producto_span">Marca</span> ${producto.marca}</p>
                                    <p><span class="producto_span">Precio</span> $${producto.precio_cup}</p>`;
        cajaContenedora.appendChild(cajaSecundaria);
        
        // Si hay imagen, se establece como fondo
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

      
      
      // Al hacer clic se abre el popup del producto (función ya definida)
      cajaContenedora.addEventListener("click", () => abrirProductoEmergente(producto));
      
      sliderTrack.appendChild(cajaContenedora);
    });
  }
  
  // Función para iniciar el auto-scroll (con loop al llegar al final)
  function iniciarAutoScroll() {
    const sliderContainer = document.getElementById("slider-container");
    let scrollSpeed = 1; // píxeles por intervalo
    let interval = setInterval(() => {
      if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
        sliderContainer.scrollLeft = 0;
      } else {
        sliderContainer.scrollLeft += scrollSpeed;
      }
    }, 20); // cada 20 ms
    
    // Pausar auto-scroll al pasar el mouse sobre el slider
    sliderContainer.addEventListener("mouseover", () => {
      clearInterval(interval);
    });
    
    // Reanudar auto-scroll al quitar el mouse
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
  
//   // Botones de navegación manual
//   document.getElementById("slider-btn-left").addEventListener("click", function() {
//     const sliderContainer = document.getElementById("slider-container");
//     sliderContainer.scrollBy({
//       left: -220, // Ajusta este valor según el ancho de cada tarjeta
//       behavior: 'smooth'
//     });
//   });

//   document.getElementById("slider-btn-right").addEventListener("click", function() {
//     const sliderContainer = document.getElementById("slider-container");
//     sliderContainer.scrollBy({
//       left: 220,
//       behavior: 'smooth'
//     });
//   });

// Inicializar el slider al cargar la página
document.addEventListener("DOMContentLoaded", function() {
mostrarSliderMejoresVentas();
iniciarAutoScroll();
});



    
// 




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

        // Salida primaria
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

    // Salida del Fondo Poup
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

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    let productosFiltrados = productosTotales.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// Filtrar productos por otros_nombres
function filtrarPorOtrosNombres(valor) {
    let productosFiltrados = productosTotales.filter(producto => 
        producto.otros_nombres && producto.otros_nombres.toLowerCase().includes(valor.toLowerCase())
    );
    mostrarProductos(productosFiltrados);
}

// Función de búsqueda
function buscarProducto(event) {
    event.preventDefault();  // Prevenir recarga de la página

    let valorBusqueda = document.getElementById("id_texto_busqueda").value.toLowerCase().trim();
    if (valorBusqueda.length < 3) {
        alert("Debe ingresar al menos 3 caracteres para la búsqueda.");
        return;
    }

    // Filtrar productos considerando nombre, marca y otros_nombres
    let productosFiltrados = productosTotales.filter(producto =>
        producto.nombre && producto.nombre.toLowerCase().includes(valorBusqueda) ||
        producto.marca && producto.marca.toLowerCase().includes(valorBusqueda) ||
        (producto.otros_nombres && producto.otros_nombres.toLowerCase().includes(valorBusqueda)) // Buscar en otros_nombres
    );

    if (productosFiltrados.length > 0) {
        mostrarProductos(productosFiltrados);
    } else {
        contenedorResultados.innerHTML = "<p>No se encontraron productos con ese nombre.</p>";
    }
}

// Prevenir la recarga del formulario buscarProducto
document.querySelector("form").addEventListener("submit", buscarProducto);

// Botones de categoría

// Ferreteria
        // document.getElementById("boton_discof").addEventListener("click", () => {
        //     filtrarPorCategoria("discof");
        // });
document.getElementById("boton_lima").addEventListener("click", () => {
    filtrarPorCategoria("lima");
});
        // //document.getElementById("boton_sierras").addEventListener("click", () => {
        // //    filtrarPorCategoria("sierras");
        // //});
document.getElementById("boton_tornillos").addEventListener("click", () => {
    filtrarPorCategoria("tornillos");
});

// --- --- Automotriz --- --- //

document.getElementById("boton_baterias").addEventListener("click", () => {
    filtrarPorCategoria("baterias");
});
document.getElementById("boton_filtros").addEventListener("click", () => {
    filtrarPorCategoria("filtros");
});
document.getElementById('boton_neumaticos').addEventListener("click", () => {
    filtrarPorCategoria("neumaticos");
});
document.getElementById('boton_amortiguacion').addEventListener("click", () => {
    filtrarPorCategoria("amortiguacion");
});
document.getElementById('boton_aceites').addEventListener("click", () => {
    filtrarPorCategoria("aceites");
});
document.getElementById('boton_frenos').addEventListener("click", () => {
    filtrarPorCategoria("frenos");
});
document.getElementById('boton_kit').addEventListener("click", () => {
    filtrarPorCategoria("kit");
});
document.getElementById('boton_juntas').addEventListener("click", () => {
    filtrarPorCategoria("juntas");
});
document.getElementById('boton_bujias').addEventListener("click", () => {
    filtrarPorCategoria("bujias");
});
document.getElementById('boton_esfericas_sup').addEventListener("click", () => {
    filtrarPorCategoria("esfericas superiores");
});
document.getElementById('boton_correas').addEventListener("click", () => {
    filtrarPorCategoria("correas");
});
document.getElementById('boton_discos').addEventListener("click", () => {
    filtrarPorCategoria("discos");
});
document.getElementById('boton_buje').addEventListener("click", () => {
    filtrarPorCategoria("buje");
});
document.getElementById('boton_anillos').addEventListener("click", () => {
    filtrarPorCategoria("anillos");
});
// document.getElementById('boton_banda').addEventListener("click", () => {
//     filtrarPorCategoria("banda");
// });
document.getElementById('boton_rodamiento').addEventListener("click", () => {
    filtrarPorCategoria("rodamiento");
});
document.getElementById('boton_farol').addEventListener("click", () => {
    filtrarPorCategoria("farol");
});
document.getElementById('boton_reten').addEventListener("click", () => {
    filtrarPorCategoria("reten");
});
document.getElementById('boton_pinza').addEventListener("click", () => {
    filtrarPorCategoria("pinza");
});
document.getElementById('boton_biela').addEventListener("click", () => {
    filtrarPorCategoria("biela");
});
document.getElementById('boton_manguera').addEventListener("click", () => {
    filtrarPorCategoria("manguera");
});
document.getElementById('boton_motor').addEventListener("click", () => {
    filtrarPorCategoria("motor");
});
document.getElementById('boton_alternador').addEventListener("click", () => {
    filtrarPorCategoria("alternador");
});
document.getElementById('boton_liks').addEventListener("click", () => {
    filtrarPorCategoria("liks");
});
document.getElementById('boton_otros').addEventListener("click", () => {
    filtrarPorCategoria("otros");
});
document.getElementById('boton_pegamento').addEventListener("click", () => {
    filtrarPorCategoria("pegamento");
});