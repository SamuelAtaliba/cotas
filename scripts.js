/* scripts.js */

function calcularMagicNumber() {
  const precoCota = parseFloat(document.getElementById('precoCota').value);
  const dividendoCota = parseFloat(document.getElementById('dividendoCota').value);

  if (isNaN(precoCota) || isNaN(dividendoCota)) {
      alert('Por favor, insira valores válidos para a cota e o dividendo.');
      return;
  }

  const magicNumber = precoCota / dividendoCota;
  const investimentoNecessario = magicNumber * precoCota;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <p>Magic Number: <strong>${magicNumber.toFixed(2)}</strong> cotas</p>
      <p>Investimento Necessário: R$ <strong>${investimentoNecessario.toFixed(2)}</strong></p>
  `;

  document.getElementById('gerarRelatorio').style.display = 'block';
}

function gerarRelatorio() {
  const precoCota = parseFloat(document.getElementById('precoCota').value);
  const dividendoCota = parseFloat(document.getElementById('dividendoCota').value);
  const magicNumber = parseFloat(document.getElementById('resultado').querySelector('p:first-child strong').textContent);
  const investimentoNecessario = parseFloat(document.getElementById('resultado').querySelector('p:nth-child(2) strong').textContent);

  const relatorio = `
      Relatório de Planejamento - Magic Number\n
      ==========================================\n
      Última Cotação: R$ ${precoCota.toFixed(2)}\n
      Último Dividendo Pago: R$ ${dividendoCota.toFixed(2)}\n
      ------------------------------------------\n
      Magic Number: ${magicNumber.toFixed(2)} cotas\n
      Investimento Necessário: R$ ${investimentoNecessario.toFixed(2)}\n
  `;

  const dataAtual = new Date();
  const nomeArquivo = `relatorio_magic_number_${dataAtual.toLocaleDateString().replaceAll('/', '_')}.txt`;

  // Criar Blob
  const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' });

  // Criar link para download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = nomeArquivo;
  link.click();
}
