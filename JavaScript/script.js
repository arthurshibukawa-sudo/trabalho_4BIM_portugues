const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const iconOn = document.getElementById('icon-on');
const iconOff = document.getElementById('icon-off');

function aplicarTema(tema) {
  htmlElement.setAttribute('data-theme', tema);
  iconOff.classList.toggle('d-none', tema !== 'dark');
  iconOn.classList.toggle('d-none', tema === 'dark');
  try { localStorage.setItem('tema', tema); } catch (e) {}
}

// Lembra o tema escolhido ao trocar de página
let salvo = 'light';
try { salvo = localStorage.getItem('tema') || 'light'; } catch (e) {}
aplicarTema(salvo);

toggleButton.addEventListener('click', () => {
  aplicarTema(htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Janela de leitura (conto, resenha e cordel): o card abre o texto completo
(function () {
  const dialogo = document.getElementById('leitor');
  if (!dialogo) return;

  const titulo = document.getElementById('leitor-titulo');
  const meta = document.getElementById('leitor-meta');
  const conteudo = document.getElementById('leitor-conteudo');
  let cardAberto = null;

  function abrir(card) {
    const modelo = document.getElementById(card.dataset.texto);
    if (!modelo) return;
    cardAberto = card;
    titulo.textContent = modelo.dataset.titulo || '';
    meta.textContent = modelo.dataset.meta || '';
    conteudo.replaceChildren(modelo.content.cloneNode(true));
    conteudo.scrollTop = 0;
    document.body.classList.add('leitor-aberto');
    dialogo.showModal();
  }

  document.querySelectorAll('.card-resumo').forEach((card) => {
    card.addEventListener('click', () => abrir(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrir(card);
      }
    });
  });

  // Fecha no botão X ou ao clicar fora da caixa (Esc já fecha sozinho)
  dialogo.addEventListener('click', (e) => {
    if (e.target === dialogo || e.target.closest('[data-fechar]')) dialogo.close();
  });

  dialogo.addEventListener('close', () => {
    document.body.classList.remove('leitor-aberto');
    if (cardAberto) cardAberto.focus();
  });
})();
