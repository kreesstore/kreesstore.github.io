let cont_p = document.getElementById('id_p__slogan');
//  !CREER y CREAR para CRECER!  //
let slogan = [
    '!',
    '!C',
    '!CR',
    '!CRE',
    '!CREE',
    '!CREER',
    '!CREER y',
    '!CREER y C',
    '!CREER y CR',
    '!CREER y CRE',
    '!CREER y CREA',
    '!CREER y CREAR',
    '!CREER y CREAR p',
    '!CREER y CREAR pa',
    '!CREER y CREAR par',
    '!CREER y CREAR para',
    '!CREER y CREAR para C',
    '!CREER y CREAR para CR',
    '!CREER y CREAR para CRE',
    '!CREER y CREAR para CREC',
    '!CREER y CREAR para CRECE',
    '!CREER y CREAR para CRECER',
    '!CREER y CREAR para CRECER!',
]

let slogan_invetido = [
    '!CREER y CREAR para CRECER!',
    '!CREER y CREAR para CRECER',
    '!CREER y CREAR para CRECE',
    '!CREER y CREAR para CREC',
    '!CREER y CREAR para CRE',
    '!CREER y CREAR para CR',
    '!CREER y CREAR para C',
    '!CREER y CREAR para',
    '!CREER y CREAR par',
    '!CREER y CREAR pa',
    '!CREER y CREAR p',
    '!CREER y CREAR',
    '!CREER y CREA',
    '!CREER y CRE',
    '!CREER y CR',
    '!CREER y C',
    '!CREER y',
    '!CREER',
    '!CREE',
    '!CRE',
    '!CR',
    '!C',
    '!',
]

let vuelta = 0;
let vuelta_invertida = 0;

setInterval(()=>{

    if (vuelta < 23) {
        cont_p.innerHTML = '';
        let texto_letra = document.createTextNode(slogan[vuelta]);
        cont_p.appendChild(texto_letra);
        vuelta++
    }

    else if (vuelta < 50){
        vuelta++
    }

    else if (vuelta < 73) {
        cont_p.innerHTML = '';
        let texto_letra = document.createTextNode(slogan_invetido[vuelta_invertida]);
        cont_p.appendChild(texto_letra);
        vuelta_invertida++
        vuelta++
    }

    else {
        vuelta = 0;
        vuelta_invertida = 0
    }
},150);