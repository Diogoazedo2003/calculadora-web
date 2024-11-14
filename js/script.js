// Lógica para a Soma
document.getElementById('somaForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 + num2;
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
// Lógica para a Divisão
document.getElementById('divisaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2 === 0) {
      document.getElementById('resultado').textContent = 'Erro: Divisão por zero!';
  } else {
      const resultado = num1 / num2;
      document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
});
// Lógica para a Multiplicação
document.getElementById('multiplicacaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 * num2;
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
// Lógica para a Subtração
document.getElementById('subtracaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 - num2;
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
// Lógica para o Resto (Módulo)
document.getElementById('restoForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (num2 === 0) {
      document.getElementById('resultado').textContent = 'Erro: Divisão por zero!';
  } else {
      const resultado = num1 % num2; // Calcula o resto
      document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
});
