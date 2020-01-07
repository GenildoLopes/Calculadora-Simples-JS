// Sample Calculator

function result() {

    var numberOne = parseInt(document.getElementById('num-1').value);
    var numberTwo = parseInt(document.getElementById('num-2').value);

    var res = document.getElementById('res-txt');

    var resultNumber = numberOne / numberTwo;

    total = resultNumber.toFixed(2);

    res.innerHTML = `${total}`
    
    
}