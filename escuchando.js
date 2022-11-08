const titulo = document.querySelector('h1');
const input1 = document.querySelector('#c1');
const input2 = document.querySelector('#c2');
const boton = document.querySelector('#btCalcular');
const pResultado = document.querySelector('.resultado');

boton.addEventListener('click',btn1Click);
                //      evento / accion
function btn1Click(){
    var suma = Number(input1.value) + Number (input2.value);
    pResultado.innerText = "Resultado: " + suma;
}