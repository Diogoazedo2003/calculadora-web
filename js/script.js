// Lógica para a Soma
document.getElementById('somaForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 + num2;

  // Cria a tabela para exibir os resultados
  const resultadoTabela = `
      <table border="1" style="margin-top: 20px; border-collapse: collapse; width: 50%; margin-left: auto; margin-right: auto;">
          <tr>
              <th>Número 1</th>
              <th>Número 2</th>
              <th>Operação</th>
              <th>Resultado</th>
          </tr>
          <tr>
              <td>${num1}</td>
              <td>${num2}</td>
              <td>${num1} + ${num2} =</td>
              <td>${resultado}</td>
          </tr>
      </table>
  `;
  
  document.getElementById('resultado').innerHTML = resultadoTabela;
});

// Lógica para a Divisão
document.getElementById('divisaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado = '';
  
  if (num2 === 0) {
      resultado = 'Erro: Divisão por zero!';
  } else {
      resultado = num1 / num2;
  }

  // Cria a tabela para exibir os resultados
  const resultadoTabela = `
      <table border="1" style="margin-top: 20px; border-collapse: collapse; width: 50%; margin-left: auto; margin-right: auto;">
          <tr>
              <th>Número 1</th>
              <th>Número 2</th>
              <th>Operação</th>
              <th>Resultado</th>
          </tr>
          <tr>
              <td>${num1}</td>
              <td>${num2}</td>
              <td>${num1} ÷ ${num2} =</td>
              <td>${resultado}</td>
          </tr>
      </table>
  `;
  
  document.getElementById('resultado').innerHTML = resultadoTabela;
});

// Lógica para o Resto (Módulo)
document.getElementById('restoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultado = '';
  
  if (num2 === 0) {
      resultado = 'Erro: Divisão por zero!';
  } else {
      resultado = num1 % num2;
  }

  // Cria a tabela para exibir os resultados
  const resultadoTabela = `
      <table border="1" style="margin-top: 20px; border-collapse: collapse; width: 50%; margin-left: auto; margin-right: auto;">
          <tr>
              <th>Número 1</th>
              <th>Número 2</th>
              <th>Operação</th>
              <th>Resultado</th>
          </tr>
          <tr>
              <td>${num1}</td>
              <td>${num2}</td>
              <td>${num1} % ${num2} =</td>
              <td>${resultado}</td>
          </tr>
      </table>
  `;
  
  document.getElementById('resultado').innerHTML = resultadoTabela;
});

// Lógica para a Multiplicação
document.getElementById('multiplicacaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 * num2;

  // Cria a tabela para exibir os resultados
  const resultadoTabela = `
      <table border="1" style="margin-top: 20px; border-collapse: collapse; width: 50%; margin-left: auto; margin-right: auto;">
          <tr>
              <th>Número 1</th>
              <th>Número 2</th>
              <th>Operação</th>
              <th>Resultado</th>
          </tr>
          <tr>
              <td>${num1}</td>
              <td>${num2}</td>
              <td>${num1} × ${num2} =</td>
              <td>${resultado}</td>
          </tr>
      </table>
  `;
  
  document.getElementById('resultado').innerHTML = resultadoTabela;
});

// Lógica para a Subtração
document.getElementById('subtracaoForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 - num2;

  // Cria a tabela para exibir os resultados
  const resultadoTabela = `
      <table border="1" style="margin-top: 20px; border-collapse: collapse; width: 50%; margin-left: auto; margin-right: auto;">
          <tr>
              <th>Número 1</th>
              <th>Número 2</th>
              <th>Operação</th>
              <th>Resultado</th>
          </tr>
          <tr>
              <td>${num1}</td>
              <td>${num2}</td>
              <td>${num1} - ${num2} =</td>
              <td>${resultado}</td>
          </tr>
      </table>
  `;
  
  document.getElementById('resultado').innerHTML = resultadoTabela;
});
