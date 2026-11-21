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

// ===== Página de contato =====
(function () {
  const form = document.getElementById('form-contato');
  if (!form) return;

  const campos = { nome: form.nome, email: form.email, mensagem: form.mensagem };
  const contador = document.getElementById('contador');
  const status = document.getElementById('rascunho-status');
  const botao = document.getElementById('btn-enviar');
  const sucesso = document.getElementById('sucesso');
  const CHAVE = 'rascunho-contato';

  const regras = {
    nome: (v) => (v.trim().length < 2 ? 'Digite seu nome (mínimo 2 letras).' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Digite um e-mail válido, como voce@exemplo.com.'),
    mensagem: (v) => (v.trim().length < 10 ? 'Escreva pelo menos 10 caracteres.' : '')
  };

  function validar(nome, forcar) {
    const campo = campos[nome];
    const erro = form.querySelector('[data-erro-para="' + nome + '"]');
    const msg = regras[nome](campo.value);
    const mostrar = forcar || campo.dataset.tocado === '1';
    erro.textContent = mostrar ? msg : '';
    campo.classList.toggle('invalido', mostrar && !!msg);
    campo.classList.toggle('valido', mostrar && !msg);
    return !msg;
  }

  function atualizarContador() {
    const n = campos.mensagem.value.length;
    contador.textContent = n + ' / ' + campos.mensagem.maxLength;
    contador.classList.toggle('limite', n >= campos.mensagem.maxLength - 20);
  }

  // Rascunho automático
  let timer;
  function salvarRascunho() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        localStorage.setItem(CHAVE, JSON.stringify({
          nome: form.nome.value, email: form.email.value,
          assunto: form.assunto.value, mensagem: form.mensagem.value
        }));
        status.textContent = 'Rascunho salvo ✓';
      } catch (e) {}
    }, 500);
  }
  try {
    const r = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (r) {
      form.nome.value = r.nome || '';
      form.email.value = r.email || '';
      form.assunto.value = r.assunto || 'comentario';
      form.mensagem.value = r.mensagem || '';
      if (r.mensagem) status.textContent = 'Rascunho anterior restaurado.';
    }
  } catch (e) {}
  atualizarContador();

  Object.keys(campos).forEach((nome) => {
    const campo = campos[nome];
    campo.addEventListener('blur', () => { campo.dataset.tocado = '1'; validar(nome); });
    campo.addEventListener('input', () => { validar(nome); if (nome === 'mensagem') atualizarContador(); salvarRascunho(); });
  });
  form.assunto.addEventListener('change', salvarRascunho);

  // Ctrl/Cmd + Enter envia
  campos.mensagem.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') form.requestSubmit();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todos = Object.keys(campos).map((n) => validar(n, true));
    if (todos.includes(false)) {
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
      form.querySelector('.invalido').focus();
      return;
    }
    botao.disabled = true;
    form.classList.add('enviando');
    // Sem servidor: simula o envio. Troque por fetch() quando houver um backend.
    setTimeout(() => {
      document.getElementById('sucesso-nome').textContent = form.nome.value.trim().split(' ')[0];
      try { localStorage.removeItem(CHAVE); } catch (e) {}
      form.hidden = true;
      sucesso.hidden = false;
      sucesso.focus();
      botao.disabled = false;
      form.classList.remove('enviando');
    }, 900);
  });

  document.getElementById('nova-mensagem').addEventListener('click', () => {
    form.reset();
    Object.values(campos).forEach((c) => { c.dataset.tocado = ''; c.classList.remove('valido', 'invalido'); });
    form.querySelectorAll('.erro').forEach((el) => (el.textContent = ''));
    atualizarContador();
    status.textContent = 'Seu rascunho é salvo automaticamente.';
    sucesso.hidden = true;
    form.hidden = false;
    form.nome.focus();
  });

  // Copiar endereço
  const btnCopiar = document.getElementById('copiar-endereco');
  if (btnCopiar) {
    btnCopiar.addEventListener('click', async () => {
      const texto = 'IFSP Campus Cubatão – ' + document.getElementById('endereco').textContent;
      const rotulo = btnCopiar.querySelector('span');
      try {
        await navigator.clipboard.writeText(texto);
        rotulo.textContent = 'Copiado!';
      } catch (e) {
        rotulo.textContent = 'Não foi possível copiar';
      }
      setTimeout(() => (rotulo.textContent = 'Copiar endereço'), 2000);
    });
  }
})();

// ===== Entrevista: botão "Copiar link" do vídeo =====
(function () {
  const btn = document.getElementById('yt-copiar');
  if (!btn) return;
  const rotulo = btn.querySelector('span');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.link);
      rotulo.textContent = 'Link copiado!';
    } catch (e) {
      rotulo.textContent = 'Não foi possível copiar';
    }
    setTimeout(() => (rotulo.textContent = 'Copiar link'), 2000);
  });
})();
