console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

const email = document.querySelector("#email"); // je recupere mon input email
const password = document.querySelector("#password"); // je recupere mon imput pasword
const button = document.querySelector("#button");// je  recupere l'input se connecter
console.log(email, password, button);

const TextEmail = "sophie.bluel@test.tld";
const TextPassword = "S0phie";

button.addEventListener("click", function() {
    if (email.value === TextEmail || password.value === TextPassword) { // si mail et password ok
        console.log(index.HTML) //ouvrir l'index.html
    }
    else { 
        console.log("L'email et/ou le mot de passe sont incorrect!")
    }
});