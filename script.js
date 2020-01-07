// Sample Calculator

function result() {

    var numberOne = parseInt(document.getElementById('num-1').value);
    var numberTwo = parseInt(document.getElementById('num-2').value);

    var resultado = numberOne + numberTwo;
    
    box-res.innerHTML = `Res ${resultado}`
    
}