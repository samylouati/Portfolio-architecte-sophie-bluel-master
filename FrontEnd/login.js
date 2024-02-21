console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

//Fonction pour recuperer les id login sur l'API
function getApiUsers() {
    fetch (`${API_BASE_URL}/userd/login`,
    method: 'POST',

 localStorage