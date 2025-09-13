const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let valido = true;

      // Nome
      const nome = document.getElementById('nome');
      if (nome.value.trim() === "") {
        document.getElementById('erroNome').style.display = "block";
        valido = false;
      } else {
document.getElementById('erroNome').style.display = "none";
      }

      // E-mail
      const email = document.getElementById('email');
      const regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!regexEmail.test(email.value)) {
        document.getElementById('erroEmail').style.display = "block";
        valido = false;
      } else {
        document.getElementById('erroEmail').style.display = "none";
      }

      // Senha
      const senha = document.getElementById('senha');
      if (senha.value.length < 6) {
        document.getElementById('erroSenha').style.display = "block";
        valido = false;
      } else {
        document.getElementById('erroSenha').style.display = "none";
      }

      // Confirmar senha
      const confirmarSenha = document.getElementById('confirmarSenha');
      if (senha.value !== confirmarSenha.value || confirmarSenha.value === "") {
        document.getElementById('erroConfirmarSenha').style.display = "block";
        valido = false;
      } else {
        document.getElementById('erroConfirmarSenha').style.display = "none";
      }

      // Telefone
      const telefone = document.getElementById('telefone');
      const regexTel = /^\(\d{2}\)\s\d{5}-\d{4}$/;
      if (!regexTel.test(telefone.value)) {
        document.getElementById('erroTelefone').style.display = "block";
        valido = false;
      } else {
        document.getElementById('erroTelefone').style.display = "none";
      }

      // Termos
      const termos = document.getElementById('termos');
      if (!termos.checked) {
        document.getElementById('erroTermos').style.display = "block";
        valido = false;
      } else {
        document.getElementById('erroTermos').style.display = "none";
      }

      // Se tudo ok
      if (valido) {
        alert("Cadastro realizado com sucesso! 🚀");
        form.reset();
      }
    });