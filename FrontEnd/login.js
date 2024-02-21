console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

const email = document.getElementById("#email"); // je recupere mon input email
const password = document.getElementById("#password"); // je recupere mon imput pasword
const button = document.getElementById("#button");// je  recupere l'input se connecter

const TextEmail = "sophie.bluel@test.tld";
const TextPassword = "S0phie";

button.addEventListener("click", function() {
    if (email === TextEmail || password === TextPassword) { // si mail et password ok
        console.log(index.HTML) //ouvrir l'index.html
    }
    else { 
        console.log("L'email et/ou le mot de passe sont incorrect!")
    }
});