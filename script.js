const formCadastro = document.getElementById('form-cadastro');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const btnCadastrar = document.getElementById('btn-cadastrar');
const btnVerCadastros = document.getElementById('btn-ver-cadastros');
const cadastrosDiv = document.getElementById('cadastros');

let cadastros = [];

formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (nome && email && senha) {
    cadastros.push({ nome, email, senha });
    formCadastro.reset();
    alert('Cadastro efetuado com sucesso!');
  } else {
    alert('Preencha todos os campos!');
  }
});

btnVerCadastros.addEventListener('click', () => {
  const listaCadastros = cadastros.map((cadastro, index) => `
    <p>${index + 1}. Nome: ${cadastro.nome}, E-mail: ${cadastro.email}</p>
  `).join('');
  cadastrosDiv.innerHTML = listaCadastros;
});
