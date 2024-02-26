console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

const email = document.querySelector("#email"); // je recupere mon input email
const password = document.querySelector("#password"); // je recupere mon imput pasword
const button = document.querySelector("#button");// je  recupere l'input se connecter
console.log(email, password, button);

const formulaire = document.querySelector("form"); // je recupere mon formulaire de ma page login
console.log(formulaire);

//Fonction de conexion
function login() {
    const email = document.querySelector("#email").value; //je créé une variable pour la saisi de l'email
    const password = document.querySelector("#password").value; //je créé une variable pour la saisi de password

    let data = {  // je crée la variable pour indiquer ce qu'il y a dans data
        email: email,
        password: password
    };

    const chargeUtile = JSON.stringify(data); // je crée une variable pour les données qui vont etre envoyé à l'API

    // jenvoie les data sur l'API avec la method POST 
    fetch (`${API_BASE_URL}/users/login`, {
        method: 'POST',
        body: chargeUtile, // j'envoie les data en format JSON, l'API le lit en data, en passant par la variable crée plus haut 
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    .then((response) => {
        if (!response.ok) {
            throw new Error('Il y a une erreur dans le mail et/ou le mot de passe'); // M'indique si il y a une erreur dans l'identifiant
        }
        return response.json(); // Me donne la reponse au format JSON si reponse ok
    })
    .then(data => {
        localStorage.setItem('token', data.token); // je stocke le retour du token dans le localstorage
        window.location.href = "admin.html";
    })
    .catch ((error) => {
        console.error(error)
        alert("Identifiants invalides, veuillez reessayer!"); // fonction qui devrait afficher en pop up le message d'erreur
    })
};

// addEventListener pour écouter la fonction login 
button.addEventListener('click', function(conexion) {
    conexion.preventDefault();
    login();
});