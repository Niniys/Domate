//login
var nome_usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");
var entrar = document.getElementById("entrar");

//cadastrar
var user = document.getElementById("user");
var cadsenha = document.getElementById("cadsenha");
var cadsenha2 = document.getElementById("cadsenha2");

function mostrarsenha() {
    let olho = document.getElementById("aaaa");
    let cadsenha = document.getElementById("cadsenha");

    if(cadsenha.type == "password") {
        olho.src = "../assets/eye.png";
        cadsenha.type = "text";
    } else {
        olho.src = "../assets/hidden.png";
        cadsenha.type = "password";
    }
}

function mostrarsenha2() {
    let zoio = document.getElementById("aaa");
    let cadsenha2 = document.getElementById("cadsenha2");

    if(cadsenha2.type == "password") {
        zoio.src = "../assets/eye.png";
        cadsenha2.type = "text";
    } else {
        zoio.src = "../assets/hidden.png";
        cadsenha2.type = "password";
    }
}

function mostrarsenha3() {
    let oio = document.getElementById("aa");
    let senha = document.getElementById("senha");

    if(senha.type == "password") {
        oio.src = "../assets/eye.png";
        senha.type = "text";
    } else {
        oio.src = "../assets/hidden.png";
        senha.type = "password";
    }
}

function connection() {
    let data = JSON.stringify({
        nome_usuario: nome_usuario.value,
        senha: senha.value,
    });

    var url = "http://10.87.207.4:3000/login";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        "body": data
    })
        .then(res => { return res.json() })
        .then(data => {
            if (data.length > 0) {
                localStorage.setItem("userdata", JSON.stringify(data));
                window.location.reload();
            } else {
                alert("Usuario ou senha incorretos")
            }
        });
    console.log(data);
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        entrar.click();
    }
})

function validaCadSenha() {
    if (cadsenha.value === cadsenha2.value) {
        return true;
    }
    return false;
}

function cadastrar() {
    let data = {
        nome_usuario: user.value,
        senha: cadsenha.value,
        senha: cadsenha2.value
    };

    var url = "http://10.87.207.4:3000/usuario";

    if (validaCadSenha() && data != null) {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json()
                .then(dados => {
                    console.log(dados)
                    localStorage.setItem("userdata", JSON.stringify(data));
                    window.location.reload();
                }))
    } else {
        alert("senhas devem ser iguais")
    }
}