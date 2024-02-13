console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API
console.log(API_BASE_URL)

// pour recuperer les WORKS, je fais un fetch :
// fetch (`URL de l'api à appeler`) // si j'arrive à communiquer avec l'API
//     .then ((response) => response.json()) // alors je veux cette reponse en format json
//     .then ((data) => {console.log(data) }) // traduit moi cette reponse (data) pour verifier que ce soit la bonne reposne 
//     .catch ((error) => {console.error(error); }); // si tu n'y arrives pas, donne moi l'erreur

// Etape 1 du guide des étapes clés

getApiWorks(); // appel de la function à l'ouverture de la page

function getApiWorks () {
    fetch (`${API_BASE_URL}/works`) // je recupere les travaux de l'architecte sur l'API
    .then ((response) => response.json())
    .then (projets => {
        console.log(projets);
        DisplayWorks(projets); // j"appelle ma fonction DisplayWorks
    })
    .catch ((error) => {console.error(error)
    })
}

// Fonction pour montrer les elements du tableau

const gallery = document.querySelector(".gallery"); // je recupere la gallery dans le DOM

function DisplayWorks (projets) {
    projets.forEach(projetS => {
        const figure = document.createElement("figure"); // je crée une balise <figure> pour chaque projet
        figure.classList.add('figure'); // j'applique le style 'figure sur chaque balise <figure>
        const images = document.createElement("img");
        images.src = projetS.imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        const legend = document.createElement("figcaption"); // je crée la balise <figcaption>
        legend.innerText = projetS.title; // j'indique que le texte des balises <figcaption> est "title" dans le tableau
        gallery.appendChild(figure); // gallery est parent de chaque <figure>
        figure.appendChild(images); // figure est parent de images
        figure.appendChild(legend); // figure est parent de legend    
})};