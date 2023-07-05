let usuario = document.querySelector("login");


const checkInputs = (email, senha) => {
    console.log("entrou");
    let control = true;

    if (email.value.trim() == "") {
        email.classList.add("erro");
        control = false;
      }

    if (senha.value.trim() == "") {
        senha.classList.add("erro");
        control = false;
    }

    return control;
    
};

usuario.addEventListener("submit", (event) => {
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");

    if (!checkInputs(email, senha)) {
        event.preventDefault();
    } else {
        const usuario = {
            email: email.value,
            senha: senha.value,
        };
        console.log(usuario);

        const usuarioJson = JSON.stringify(usuario);
        console.log(usuarioJson);
    }
});

listUsuario.forEach(usuario => {
    if(usuario.email.toUpperCase() === email.trim()) {-+9+9999999+f
        (usuario.senha.toUpperCase() === email.trim().toUpperCase()) {

        } {
            console.log("valido");
        }
        else {
            event.preventDefault();
        }
        
    }
})
