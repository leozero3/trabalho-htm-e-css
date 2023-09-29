const textosAleatorios = {
    sobre: "Este é um texto aleatório sobre mim.",
    formacao: "Aqui está um texto aleatório sobre minha formação educacional.",
    portfolio: "Confira alguns projetos aleatórios no meu portfólio.",
    contato: "Você pode entrar em contato comigo através do formulário abaixo."
  };
  
// Função para atualizar o conteúdo da seção
function atualizarConteudoSecao(secao) {
  // Limpa o conteúdo de todas as seções
  Object.keys(textosAleatorios).forEach(key => {
    const secaoElement = document.getElementById(key);
    if (secaoElement) {
      secaoElement.innerHTML = "";
    }
  });

  // Define o texto aleatório para a seção atual
  const secaoElement = document.getElementById(secao);
  if (secaoElement) {
    secaoElement.innerHTML = textosAleatorios[secao];
  }
}
  
  // Event listeners para os links de navegação
  document.querySelector('a[href="#sobre"]').addEventListener("click", () => {
    atualizarConteudoSecao("sobre");
  });
  
  document.querySelector('a[href="#formacao"]').addEventListener("click", () => {
    atualizarConteudoSecao("formacao");
  });
  
  document.querySelector('a[href="#portfolio"]').addEventListener("click", () => {
    atualizarConteudoSecao("portfolio");
  });
  
  document.querySelector('a[href="#contato"]').addEventListener("click", () => {
    atualizarConteudoSecao("contato");
  });