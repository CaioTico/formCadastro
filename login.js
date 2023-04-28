/* Código de validação de formulário de login */

function Validar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    // let csenha = document.getElementById('csenha').value;
    // let name = document.getElementById('nomesobrenome').value;
    // let date = document.getElementById('date').value;
    // let fone = document.getElementById('fone').value;
    // let cpf = document.getElementById('cpf').value;
    // let rua = document.getElementById('rua').value;
    // let numero = document.getElementById('numero').value;
    // let cep = document.getElementById('cep').value;
    // let cidade = document.getElementById('cidade').value;
    // let estado = document.getElementById('estado').value;
    // let complemento = document.getElementById('complemento').value;

    if (!email || !senha) {
        alert("Campos de preenchimento obrigatório. Favor preecher!");
    } else {
        alert("Campos preenchidos com sucesso!");
    }
}