let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById('fahrenheit');

function CtoF()
{
    let x = ( parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(x.toFixed(2));
}

function FtoC()
{
    let y = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(y.toFixed(2));
    console.log(y);
}