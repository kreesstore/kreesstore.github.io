const ir_main = document.getElementById('id_main');

function deslizar(){
    ir_main.scrollIntoView({behavior: "smooth"});
}

function categoria_ferreteria(){
    document.querySelector('.categoria__automotriz').style.display = 'none';
    document.querySelector('.categoria__ferreteria').style.display = 'grid';
}

function categoria_automotriz(){
    document.querySelector('.categoria__automotriz').style.display = 'grid';
    document.querySelector('.categoria__ferreteria').style.display = 'none'
}