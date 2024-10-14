var num1=document.getElementById("num1")
var num2=document.getElementById("num2")

var result=document.getElementById("res")

var operator=document.getElementById("op")



function add()
{
    var value1=Number(num1.value)
    var value2=Number(num2.value)
    result.textContent=value1+value2
    operator.textContent="Added"
}

function mul()
{
    var value1=Number(num1.value)
    var value2=Number(num2.value)
    result.textContent=value1*value2
    operator.textContent="Multiplied"
}

function sub()
{
    var value1=Number(num1.value)
    var value2=Number(num2.value)
    result.textContent=value1-value2
    operator.textContent="Subtracted"
}

function div()
{
    var value1=Number(num1.value)
    var value2=Number(num2.value)
    if(value2==0)
    {
        result.textContent="undefined"
        operator.textContent="divided"
    }
    else
    {
        result.textContent=(value1/value2).toFixed(2)
        operator.textContent="divided"
    }
    
}