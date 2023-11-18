document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var confirmarSenha = document.getElementById('confirmar_senha').value;
        var cidade = document.getElementById('cidade').value;
        var telefone = document.getElementById('telefone').value;

        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !senha || !confirmarSenha || !cidade || !telefone) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault(); // impede o envio do formulário
            return;
        }

        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, verifique.');
            event.preventDefault(); // impede o envio do formulário
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script carregado");

    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        console.log("Formulário submetido");

        var telefone = document.getElementById('telefone').value;
        console.log("Telefone: ", telefone);

        var contadorNumeros = telefone.replace(/[^0-9]/g, "").length;
        console.log("Contador de Números: ", contadorNumeros);

        if (contadorNumeros !== 11) {
            alert('O telefone deve conter 11 números.');
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var botaoCadastrar = document.getElementById('cadastrar');

    botaoCadastrar.addEventListener('click', function() {
        this.disabled = true; // Desabilita o botão
        alert("Botão desabilitado e formulário enviado.");
    });
});



