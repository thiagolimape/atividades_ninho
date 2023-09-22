function mostrarConteudo() {
    const dropdown = document.getElementById('pesquisa-dropdown');
    const selectedContent = document.getElementById(`${dropdown.value}-content`);
    
    const contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
    }
    
    selectedContent.classList.add('active');
  }
  