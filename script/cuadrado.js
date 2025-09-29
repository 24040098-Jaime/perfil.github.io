  function calcularCuadrado() {
        let numero = document.getElementById("numero").value;
        if (isNaN(numero)) {
            alert("Por favor ingrese un número válido");
            document.getElementById("numero").value = "";
            return;
        }
        let resultado = numero * numero;
        document.getElementById("resultado").value = resultado;
    }