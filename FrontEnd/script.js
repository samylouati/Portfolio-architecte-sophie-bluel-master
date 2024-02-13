console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API
console.log(API_BASE_URL)

// pour recuperer les WORKS, je fais un fetch :
// fetch (`URL de l'api à appeler`) // si j'arrive à communiquer avec l'API
//     .then ((response) => response.json()) // alors je veux cette reponse en format json
//     .then ((data) => {console.log(data) }) // traduit moi cette reponse (data) pour verifier que ce soit la bonne reposne 
//     .catch ((error) => {console.error(error); }); // si tu n'y arrives pas, donne moi l'erreur

// Etape 1 du guide des étapes clés

function getApiWorks () {
    fetch (`${API_BASE_URL}/works`) // je recupere les travaux de l'architecte sur l'API
    .then ((response) => response.json()) // je veux ces travaux au format JSON
    .then (projets => {
        console.log(projets); // je nome ces travaux "projets"
        DisplayWorks(projets); // j"appelle ma fonction DisplayWorks
        getApiCategories(); // je recupere les categories apres avoir recuperer les travaux
    })
    .catch ((error) => {console.error(error)
    })
}

getApiWorks(); // appel de la function à l'ouverture de la page


// Fonction pour montrer les elements du tableau

function DisplayWorks (projets) {
    const gallery = document.querySelector(".gallery"); // je recupere la gallery dans le DOM
    projets.forEach(projetS => { // pour chaque projetS(ophie) : 
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

// Etape 1.2 du guide des étapes clés

// Fonction pour recuperer les categories

function getApiCategories () {
    fetch (`${API_BASE_URL}/categories`) // je recupere les catégories sur l'API
    .then ((response) => response.json()) // je veux ces catégories au format JSON
    .then (categories => {
        console.log(categories); // je nome ces catégories
        // DisplayCategories(categories);
    })
    .catch ((error) => {console.error(error)
    })
}

// Fonction pour afficher les categories

// function DisplayCategories (categories) { 
//     const filter = document.getElementById("portfolio"); // je recupere l'id "portfolio" dans le DOM
//     categories.forEach(categoriesS => { // pour chaque categorieS(ophie) : 
//         const button = document.createElement("button"); // je crée un bouton pour chaque categories
//         // class à mettre sur mes bouton de trie
//         filter.appendChild(button); // gallery est parent de input
//         button.innerText = categoriesS.name; // j'indique que le texte des balises <figcaption> est "title" dans le tableau
//     })};

// Filtrer avec mes boutons

const TrieObjets = document.querySelector('objet');

TrieObjets.addEventListener("click", function () {
    const objet_test = projets.filter( function (projet) {
        return projet.id = 1;
    });
    console.log(objet_test)
});