// Sample Calculator

function result() {

    var numberOne = parseInt(document.getElementById('num-1').value);
    var numberTwo = parseInt(document.getElementById('num-2').value);
    var res = document.getElementsByTagName('h2');

    var resultado = numberOne / numberTwo;
    
    res.innerHTML = `${resultado}`
    
}