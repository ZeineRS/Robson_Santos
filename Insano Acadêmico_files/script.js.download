function writeTitle() {
  function activeWord(element) {
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((letra, i) => {
      setTimeout(() => {
        element.innerHTML += letra;
      }, 100 * i); // Aumente o valor (150) para tornar a animação mais lenta
    });
  }

  const title = document.querySelector('.digitando');
  activeWord(title);
}

function ativacaoMenu() {
  // Sua implementação da função ativacaoMenu aqui
}

function loopFunctions() {
  writeTitle();
  ativacaoMenu();
}

// Chama as funções inicialmente
loopFunctions();

// Cria um loop que chama loopFunctions a cada X milissegundos (por exemplo, a cada 5000ms ou 5 segundos)
const intervalId = setInterval(loopFunctions, 4000); // Altere o valor para definir o intervalo desejado em milissegundos

// Para parar o loop, você pode usar clearInterval(intervalId)
