function appendNumberToResult(num) {
  const resultElement = document.getElementById("display-result");
  resultElement.innerHTML += num;
}

function clearResult() {
  document.getElementById("display-result").innerHTML = "";
}

function removeLastCharacter() {
  const resultElement = document.getElementById("display-result");
  const currentResult = resultElement.innerHTML;
  resultElement.innerHTML = currentResult.slice(0, -1);
}

function calculateResult() {
  const resultElement = document.getElementById("display-result");
  const currentResult = resultElement.innerHTML.trim();

  if (currentResult) {
    const result = evaluateExpression(currentResult);
    if (result !== null) {
      resultElement.innerHTML = result;
    } else {
      resultElement.innerHTML = "Erro na expressão";
      initiateErrorClearing();
    }
  } else {
    resultElement.innerHTML = "Nada para calcular";
  }
}

function evaluateExpression(expression) {
  try {
    return Function('"use strict";return (' + expression + ")")();
  } catch (error) {
    return null;
  }
}

function initiateErrorClearing() {
  setTimeout(clearResult, 2000);
}
