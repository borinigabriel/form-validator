const formulario = document.getElementById('formulario');
const senha1El = document.getElementById('senha1');
const senha2El = document.getElementById('senha2');
const containerMensagem = document.querySelector('.message-container');
const mensagem = document.getElementById('mensagem');

let formularioValido = false;
let senhasCoincidem = false;

// função para formatar o telefone
function formatarTelefone(telefone) {
  // remove qualquer caractere não numérico
  telefone = telefone.replace(/\D/g, '');
  // aplica a formatação (XX) XXXXX-XXXX
  return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function validarFormulario() {
  // usar a API de restrições HTML para verificar a validade do formulário
  formularioValido = formulario.checkValidity();
  
  // s o formulário não for válido
  if (!formularioValido) {
    mensagem.textContent = 'Por favor, preencha todos os campos.';
    mensagem.style.color = 'red';
    containerMensagem.style.borderColor = 'red';
    return;
  }
  
  // verificar se ambos os campos de senha coincidem
  if (senha1El.value === senha2El.value) {
    senhasCoincidem = true;
    senha1El.style.borderColor = 'green';
    senha2El.style.borderColor = 'green';
  } else {
    senhasCoincidem = false;
    mensagem.textContent = 'Certifique-se de que as senhas coincidam.';
    mensagem.style.color = 'red';
    containerMensagem.style.borderColor = 'red';
    senha1El.style.borderColor = 'red';
    senha2El.style.borderColor = 'red';
    return;
  }

  // se o formulário for válido e as senhas coincidirem
  if (formularioValido && senhasCoincidem) {
    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';
    containerMensagem.style.borderColor = 'green';
  }
}

function armazenarDadosFormulario() {
  const usuario = {
    nome: formulario.nome.value,
    telefone: formatarTelefone(formulario.telefone.value), // Formata o telefone
    email: formulario.email.value,
    site: formulario.site.value,
    senha: formulario.senha.value,
  };
  // fazer algo com os dados do usuário
  console.log(usuario);
}

function processarDadosFormulario(e) {
  e.preventDefault();
  // validar o formulário
  validarFormulario();
  // enviar o formulário se for válido
  if (formularioValido && senhasCoincidem) {
    armazenarDadosFormulario();
  }
}

// add Event Listener
formulario.addEventListener('submit', processarDadosFormulario);
