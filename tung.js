const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const mensagem = document.getElementById('mensagem');
const coracoesContainer = document.getElementById('coracoes-container');
const provocacaoMsg = document.getElementById('provocacao-msg');

const mensagensProvocantes = [
  "Tem certeza disso?",
  "Abandone seus sonhos e clique no sim",
  "Clica no sim, safadinha",
  "Vai negar o que seu coração quer?",
  "O sim é mais gostoso",
  "Não vai mesmo clicar no sim?",
  "Não me deixe esperando..",
  "Você não quer pensar melhor?",
  "Tá apertando no botão errado, neném",
  "Negar o amor é pecado!",
  "Seu coração sabe a verdadeira resposta..",
  "Não minta pra si mesma..",
];

let provocacaoIndex = 0;

btnSim.addEventListener('click', () => {
  mensagem.textContent = 'Agora você deve o cuzinho pro Lucas';
  startCoracoes();
  provocacaoMsg.classList.remove('show');
});

btnNao.addEventListener('mouseenter', () => {
  moveBotaoNao();
  showProvocacao();
});

function startCoracoes() {
  // Cria vários emojis subindo: ❤️🔥💋
  let emojis = ['❤️', '🔥', '💋', '😈'];

  let interval = setInterval(() => {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');

    // Escolhe emoji aleatório
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.textContent = emoji;

    // Adiciona classe pra cor e sombra específicas
    if (emoji === '🔥') coracao.classList.add('fire');
    else if (emoji === '💋') coracao.classList.add('kiss');

    // Posição horizontal aleatória
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.bottom = '-30px';

    coracoesContainer.appendChild(coracao);

    // Remove após animação
    coracao.addEventListener('animationend', () => {
      coracoesContainer.removeChild(coracao);
    });
  }, 300);

  setTimeout(() => clearInterval(interval), 3000);
}

function moveBotaoNao() {
  const btn = btnNao;
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  let maxX = containerWidth - btn.offsetWidth - 20;
  let maxY = containerHeight - btn.offsetHeight - 20;

  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  btn.style.position = 'fixed';
  btn.style.left = newX + 'px';
  btn.style.top = newY + 'px';
}

function showProvocacao() {
  provocacaoMsg.textContent = mensagensProvocantes[provocacaoIndex];
  provocacaoMsg.classList.add('show');

  provocacaoIndex++;
  if (provocacaoIndex >= mensagensProvocantes.length) {
    provocacaoIndex = 0;
  }
}

document.getElementById("btn-sim").addEventListener("click", () => {
  const musica = document.getElementById("musica-fundo");
  musica.play();
});
