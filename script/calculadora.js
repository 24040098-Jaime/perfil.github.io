function calcularOperacion(operador) {
            let num1 = document.getElementById("numero1").value;
            let num2 = document.getElementById("numero2").value;
            let resultado;

            if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
                alert("Ingrese números válidos para la operación");
                return;
            }
            switch (operador) {
                case "+":
                    resultado = parseFloat(num1) + parseFloat(num2);
                    break;
                case "-":
                    resultado = parseFloat(num1) - parseFloat(num2);
                    break;
                case "*":
                    resultado = parseFloat(num1) * parseFloat(num2);
                    break;
                case "/":
                    if (parseFloat(num2) === 0) {
                        alert("No se puede dividir entre cero");
                        return;
                    }
                    resultado = parseFloat(num1) / parseFloat(num2);
                    break;
            }
            document.getElementById("resultado").value = resultado;
            document.getElementById("numero1").value = "";
            document.getElementById("numero2").value = "";
        }