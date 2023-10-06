// Função para atualizar o conteúdo da seção
function atualizarConteudoSecao(secao) {
  // Esconde todas as seções
  const secoes = document.querySelectorAll('section');
  secoes.forEach(secaoElement => {
    secaoElement.style.display = 'none';
  });

  // Exibe a seção desejada
  const secaoElement = document.getElementById(secao);
  if (secaoElement) {
    secaoElement.style.display = 'block';
  }
}

// Event listeners para os links de navegação
const linksDeNavegacao = document.querySelectorAll('a[data-target]');
linksDeNavegacao.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita a ação padrão de navegação

    const secaoAlvo = link.getAttribute('data-target');
    atualizarConteudoSecao(secaoAlvo);
  });
});

// Inicialmente, exibe a seção "Sobre Mim"
atualizarConteudoSecao("sobre");
