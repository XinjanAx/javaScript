//h1 {coor: red}
//.parrafito {...}
//#pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const p_id = document.querySelector('#pis');
const input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    parrafo,
    p_id,
    input
});

h1.innerHTML = 'Tu_ñaña <br> potable';
h1.innerText = 'Tu_ñaña <br> potable';

/*
//manda a consola el atributo de nombre pantalla
console.log(h1.getAttribute('pantalla'));

//modificamos el npombre de la clase a 'Durazno'
h1.setAttribute('class','Durazno');
*/

//se agrea un tipo de clase al elemento
h1.classList.add('verengena');
//remover una clase
h1.classList.remove('pito');

//h1.classList.toggle('');
//h1.classList.contains('');

input.value ="araña";

//crea un elemento o etiqueta
const img = document.createElement('img')
img.setAttribute('src','https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-9/121233644_2764074270548918_907104257387872598_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEk6LChI-pocvVWfsOE2k-M3xPSTFGuAc_fE9JMUa4Bz1F0hZvT6tewuV3K9jhaQMPIuHvcg3Cki77dmf0yXDXL&_nc_ohc=Q3p5StsRj00AX8u9jfo&_nc_ht=scontent.fuio5-1.fna&oh=00_AfCShY7rSYsVEySc5U8E6u9c1QPo_QElV3doUoMYA-K1uA&oe=6380E226')
p_id.append(img);