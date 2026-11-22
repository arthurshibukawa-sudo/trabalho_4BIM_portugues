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

// ===== Textos (conto, resenha e cordel): as páginas são montadas pelo DOM a partir de Dados.js =====
// Cria um elemento com classe e texto (textContent: nunca interpreta HTML)
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

// Transforma a lista "conteudo" de um texto em elementos do DOM
function montarConteudo(conteudo) {
  const fragmento = document.createDocumentFragment();
  conteudo.forEach((bloco) => {
    if (bloco.h3) {
      fragmento.appendChild(criar('h3', '', bloco.h3));
      return;
    }
    const p = criar('p');
    if (bloco.epigrafe) {
      p.className = 'epigrafe';
      p.textContent = bloco.epigrafe;
    } else if (bloco.versos) {
      bloco.versos.forEach((verso, i) => {
        if (i > 0) p.appendChild(document.createElement('br'));
        p.appendChild(document.createTextNode(verso));
      });
    } else {
      if (bloco.negrito) {
        p.appendChild(criar('strong', '', bloco.negrito));
        p.appendChild(document.createTextNode(' '));
      }
      p.appendChild(document.createTextNode(bloco.p));
    }
    fragmento.appendChild(p);
  });
  return fragmento;
}

// Procura um texto pelo id (ex.: "texto-conto-1") em todas as seções de DADOS
const textoPorId = {};
if (typeof DADOS !== 'undefined') {
  Object.values(DADOS).forEach((secao) => secao.textos.forEach((t) => { textoPorId[t.id] = t; }));
}

// Introdução da página e cards de resumo
(function () {
  const lista = document.getElementById('lista-textos');
  if (!lista || typeof DADOS === 'undefined') return;
  const secao = DADOS[lista.dataset.tipo];

  const intro = document.getElementById('intro-texto');
  if (intro) secao.intro.forEach((paragrafo) => intro.appendChild(criar('p', '', paragrafo)));

  secao.textos.forEach((obra) => {
    const col = criar('div', 'col');
    const card = criar('article', 'card h-100 card-resumo');
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-haspopup', 'dialog');
    card.dataset.texto = obra.id;
    card.appendChild(criar('h2', '', obra.titulo));
    obra.metaCard.forEach((linha) => card.appendChild(criar('p', 'meta', linha)));
    card.appendChild(criar('p', 'resumo', obra.resumo));
    card.appendChild(criar('span', 'ler-mais', 'Ler texto completo →'));
    col.appendChild(card);
    lista.appendChild(col);
  });
})();

// Janela de leitura (conto, resenha e cordel): o card abre o texto completo
(function () {
  const dialogo = document.getElementById('leitor');
  if (!dialogo) return;

  const titulo = document.getElementById('leitor-titulo');
  const meta = document.getElementById('leitor-meta');
  const conteudo = document.getElementById('leitor-conteudo');
  let cardAberto = null;

  function abrir(card) {
    const obra = textoPorId[card.dataset.texto];
    if (!obra) return;
    cardAberto = card;
    titulo.textContent = obra.titulo;
    meta.textContent = obra.metaLeitor;
    conteudo.replaceChildren(montarConteudo(obra.conteudo));
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

// ===== Painel de textos (Home) =====
(function () {
  const painel = document.getElementById('painel');
  if (!painel || typeof DADOS === 'undefined') return;

  // --- Arrays de dados: vêm de Dados.js (cada texto do site) ---
  const paraObra = (tipo) => (t) => ({ titulo: t.titulo, tipo: tipo, autor: t.autor, pagina: DADOS[tipo].pagina, aviso: t.aviso });
  const contos = DADOS.conto.textos.map(paraObra('conto'));
  const resenhas = DADOS.resenha.textos.map(paraObra('resenha'));
  const cordeis = DADOS.cordel.textos.map(paraObra('cordel'));

  // concat: junta as três listas em uma só
  const obras = contos.concat(resenhas, cordeis);
  const autores = AUTORES;
  const tipos = Object.keys(DADOS);
  const rotulosTipo = tipos.map((t) => DADOS[t].rotulo);
  const rotulosPlural = tipos.map((t) => DADOS[t].plural);

  // Matriz regular (4 autores x 3 tipos): quantos textos cada autor escreveu de cada tipo
  const matriz = autores.map((autor) => tipos.map((tipo) => obras.filter((o) => o.autor === autor && o.tipo === tipo).length));
  // Matriz irregular: cada autor tem uma lista de títulos de tamanho diferente
  const obrasPorAutor = autores.map((autor) => obras.filter((o) => o.autor === autor).map((o) => o.titulo));

  // --- Funções ---
  // Declaração, COM retorno
  function contarPorTipo(lista, tipo) {
    return lista.filter((o) => o.tipo === tipo).length;
  }
  // Expressão, COM retorno (ignora acentos e maiúsculas na busca)
  const normalizar = function (texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  };
  // Arrow com retorno implícito
  const rotulo = (n) => n + (n === 1 ? ' texto' : ' textos');
  const temAviso = (obra) => obra.aviso;

  let tipoAtual = 'todos';
  let busca = '';

  function filtrar() {
    const termo = normalizar(busca);
    return obras.filter((o) => (tipoAtual === 'todos' || o.tipo === tipoAtual) && normalizar(o.titulo + ' ' + o.autor).includes(termo));
  }

  // SEM retorno: só desenha a lista na tela (DOM)
  function desenharLista(lista) {
    const ul = document.getElementById('painel-lista');
    ul.innerHTML = '';
    lista.forEach((obra) => {
      const li = document.createElement('li');
      li.className = 'painel-item';
      const a = document.createElement('a');
      a.href = obra.pagina;
      const titulo = document.createElement('strong');
      titulo.textContent = obra.titulo;
      const tipo = document.createElement('span');
      tipo.className = 'tipo';
      tipo.textContent = rotulosTipo[tipos.indexOf(obra.tipo)];
      const autor = document.createElement('small');
      autor.textContent = 'por ' + obra.autor + (obra.aviso ? ' · contém aviso de conteúdo' : '');
      a.appendChild(titulo);
      a.appendChild(tipo);
      a.appendChild(autor);
      li.appendChild(a);
      ul.appendChild(li);
    });
    document.getElementById('painel-vazio').hidden = lista.length > 0;
  }

  function desenharResumo(lista) {
    const posicaoFinal = obras.map((o) => o.titulo).indexOf('O Final') + 1;
    const ultimoCordel = obras.map((o) => o.tipo).lastIndexOf('cordel') + 1;
    const algumAviso = obras.some(temAviso);
    const todosDoGrupo = obras.every((o) => autores.includes(o.autor));
    const chips = [
      '<strong>' + lista.length + '</strong> de ' + obras.length + ' textos exibidos',
      'Algum texto com aviso de conteúdo? <strong>' + (algumAviso ? 'Sim' : 'Não') + '</strong>',
      'Todos escritos por integrantes do grupo? <strong>' + (todosDoGrupo ? 'Sim' : 'Não') + '</strong>',
      '“O Final” é o texto nº <strong>' + posicaoFinal + '</strong> da lista',
      'Último cordel: nº <strong>' + ultimoCordel + '</strong>'
    ];
    document.getElementById('painel-resumo').innerHTML = chips.map((c) => '<span class="painel-chip">' + c + '</span>').join('');
  }

  function desenharTabelas() {
    let html = '<table><thead><tr><th>Autor</th>' + rotulosPlural.map((r) => '<th>' + r + '</th>').join('') + '<th>Total</th></tr></thead><tbody>';
    matriz.forEach((linha, i) => {
      const total = linha.reduce((soma, n) => soma + n, 0);
      html += '<tr><th scope="row">' + autores[i] + '</th>' + linha.map((n) => '<td>' + n + '</td>').join('') + '<td>' + total + '</td></tr>';
    });
    html += '</tbody></table>';
    document.getElementById('painel-matriz').innerHTML = html;

    const ul = document.getElementById('painel-irregular');
    ul.innerHTML = '';
    obrasPorAutor.forEach((titulos, i) => {
      const li = document.createElement('li');
      li.textContent = autores[i] + ': ' + rotulo(titulos.length) + ' (' + titulos.join('; ') + ')';
      ul.appendChild(li);
    });
  }

  function atualizar() {
    const lista = filtrar();
    desenharLista(lista);
    desenharResumo(lista);
  }

  // Botões de filtro (mostram a quantidade de cada tipo)
  const botoes = painel.querySelectorAll('[data-tipo]');
  botoes.forEach((botao) => {
    const tipo = botao.dataset.tipo;
    const qtd = tipo === 'todos' ? obras.length : contarPorTipo(obras, tipo);
    botao.textContent = botao.textContent + ' (' + qtd + ')';
    botao.addEventListener('click', () => {
      tipoAtual = tipo;
      botoes.forEach((b) => b.classList.toggle('ativo', b === botao));
      atualizar();
    });
  });
  document.getElementById('painel-busca').addEventListener('input', (e) => {
    busca = e.target.value;
    atualizar();
  });

  atualizar();
  desenharTabelas();
})();

// ===== Fotos que trocam ao clicar: qualquer <img data-alternativa="caminho"> (ex.: Davi Silva) =====
(function () {
  document.querySelectorAll('img[data-alternativa]').forEach((img) => {
    const original = img.getAttribute('src');
    const alternativa = img.dataset.alternativa;
    let mostrandoAlternativa = false;

    new Image().src = alternativa; // pré-carrega para a troca ser instantânea
    img.classList.add('foto-troca');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.title = 'Clique para trocar a foto';

    function trocar() {
      mostrandoAlternativa = !mostrandoAlternativa;
      img.setAttribute('src', mostrandoAlternativa ? alternativa : original);
    }
    img.addEventListener('click', trocar);
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trocar();
      }
    });
  });
})();
