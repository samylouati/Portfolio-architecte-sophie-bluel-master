console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

const email = document.querySelector("#email"); // je recupere mon input email
const password = document.querySelector("#password"); // je recupere mon imput pasword
const button = document.querySelector("#button");// je  recupere l'input se connecter
console.log(email, password, button);

const formulaire = document.querySelector("form"); // je recupere mon formulaire de ma page login

//Fonction de conexion
function login() {
    const email = document.querySelector("#email").value; //je verifie si les element saisi dans input email sont ok
    const password = document.querySelector("#password").value; //je verifie si les element saisi dans input password sont ok

    let token = {
        email: email,
        password: password
    };

    fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : 'application/json'
        }
    })
    .then((response) => response.json())
    .then(token => {
        console.table(token)});
        if (email.value === token || password.value === token) {
            window
        }
}

// const TextEmail = "sophie.bluel@test.tld";
// const TextPassword = "S0phie";

formulaire.addEventListener("submit", login() )
// {
//     if (email.value === TextEmail || password.value === TextPassword) { //je verifie si la valeur email et password correspond
//         console.log(index.HTML) //ouvrir l'index.html
//     }
//     else { 
//         console.log("L'email et/ou le mot de passe sont incorrect!")
//     }
// });