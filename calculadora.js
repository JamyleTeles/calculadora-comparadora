console.log("=== CALCULADORA ===");

const calcular = function () {

  // Entrada
  const n1 = parseInt(document.getElementById("n1").value || 0);
  const n2 = parseInt(document.getElementById("n2").value || 0);
  const operator = document.getElementById("operador").value;
  console.log(n1, operator, n2);

  // Processamento
  let result;

  switch (operator) {
    case "maiorque":
        if(n1>n2){
            result = "Verdade!";
        } else result = "Mentira!"
      
      break;

    case "menorque":
        if(n1<n2){
            result = "Verdade!";
        } else result = "Mentira!"
      break;

    case "maiorigual":
        if(n1>=n2){
            result = "Verdade!";
        } else result = "Mentira!"
      break;

    case "menorigual":
        if(n1<=n2){
            result = "Verdade!";
        } else result = "Mentira!"
      break;

    case "diferente":
        if(n1!=n2){
            result = "Verdade!";
        } else result = "Mentira!"
      break;

      case "igual":
        if(n1==n2){
            result = "Verdade!";
        } else result = "Mentira!"
      break;
  }

  // Saída
  document.getElementById("result").value = result;
};

