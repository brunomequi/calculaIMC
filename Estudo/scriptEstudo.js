// let teste = document.getElementById('teste');
// let botao = document.getElementById('botaoAcessar');

// const novaFuncao = () => {
//   teste.innerText = 'Bem vindo';
//   botao.hidden = true;
//   alert('clicou');

//   let botaoSair = document.createElement('button');
//   botaoSair.innerText = 'sair';
//   botaoSair.onclick = sair;
//   teste.appendChild(botaoSair);
// };

// const sair = () => {
//   alert('Até mais');
//   teste.innerHTML = 'Você saiu';
//   botao.hidden = false;
// };

const pedir = () => {
  var valor = Number(prompt('Digite um valor'));
  switch (valor) {
    case 1:
      alert('Pediu água');
      break;

    default:
      break;
  }
};
