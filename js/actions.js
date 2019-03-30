const aguinaldo = document.getElementById('aguinaldo');
const num = document.getElementById('num');
const mes = document.getElementById('mes');
const outAguinaldo = document.getElementById('out-aguinaldo');

aguinaldo.addEventListener('click', ()=>{
    const salario = num.value;
    const mesTrabajado = mes.value;

    const resultado = (salario * 15);
    const multiply = (resultado/12);
    const parteProporcional = (multiply*mesTrabajado);

    outAguinaldo.value = '$' + parteProporcional;

})