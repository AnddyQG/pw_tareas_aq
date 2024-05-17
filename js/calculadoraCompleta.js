var num1="";
var num2="";
var operacion="";
function agregar(numero){
    if(!operacion){
        num1 += numero;
        document.getElementById("idResultado").innerHTML = num1;
    }else{
        num2+=numero;
        document.getElementById("idResultado").innerHTML=num2;
    }
}


function sumar() {
  operacion = 'sumar';
}
function multiplicar() {
    operacion = 'multiplicar';
  }
  function dividir(){
    operacion='dividir';
  }
  function restar(){
    operacion='restar'
  }
 
  function agregarPunto() {
    if(!operacion){
        if(!num1.includes(".")){
            num1 += ".";
            document.getElementById("idResultado").innerHTML = num1;
        }
    }else{
        if(!num2.includes(".")){
            num2 += ".";
            document.getElementById("idResultado").innerHTML = num2;
        }
    }
}
  function eliminarUltimo() {
    if(!operacion){
        num1 = num1.slice(0, -1);
        if(num1 === ""){
            document.getElementById("idResultado").innerHTML = 0;
        }else{
            document.getElementById("idResultado").innerHTML = num1;
        }
    }else{
        num2 = num2.slice(0, -1);
        if(num2 === ""){
            document.getElementById("idResultado").innerHTML = 0;
        }else{
            document.getElementById("idResultado").innerHTML = num2;
        }
    }
}

  function resetear(){
    
    num1 = "";
    num2 = "";
    operacion = "";
    document.getElementById("idResultado").innerHTML = "0";
  }

function calcular() {
  var respuesta = 0;
  if (operacion == 'sumar') {
    respuesta = parseFloat(num1) + parseFloat(num2);
  }if(operacion=='multiplicar'){
    respuesta = parseFloat(num1) * parseFloat(num2);
  }if(operacion=='dividir'){
    respuesta= parseFloat(num1)/parseFloat(num2);
  }if(operacion=='restar'){
    respuesta= parseFloat(num1)-parseFloat(num2);
  }



  document.getElementById("idResultado").innerHTML = respuesta;

  num1 = "";
  num2 = "";
  operacion = "";
}