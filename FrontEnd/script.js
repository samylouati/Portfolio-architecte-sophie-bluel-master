console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API
console.log(API_BASE_URL)

getApiWorks(); // appel de la function à l'ouverture de la page
getApiCategories(); // je recupere les categories apres avoir recuperer les travaux

// pour recuperer les WORKS, je fais un fetch :
// fetch (`URL de l'api à appeler`) // si j'arrive à communiquer avec l'API
//     .then ((response) => response.json()) // alors je veux cette reponse en format json
//     .then ((data) => {console.log(data) }) // traduit moi cette reponse (data) pour verifier que ce soit la bonne reposne 
//     .catch ((error) => {console.error(error); }); // si tu n'y arrives pas, donne moi l'erreur

// Etape 1 du guide des étapes clés

function getApiWorks () {
   return fetch (`${API_BASE_URL}/works`) // je recupere les travaux de l'architecte sur l'API
    .then ((response) => response.json()) // je veux ces travaux au format JSON
    .then (works => {
        console.table(works); // je nome ces travaux "projets"
        DisplayWorks(works); // j"appelle ma fonction DisplayWorks
        return data;
    })
    .catch ((error) => {console.error(error)
    })
}

// Fonction pour montrer les elements du tableau

function DisplayWorks(works) {
    const gallery = document.querySelector(".gallery"); // je recupere la gallery dans le DOM
    works.forEach(work => { // pour chaque projetS(ophie) : 
        const figure = document.createElement("figure"); // je crée une balise <figure> pour chaque projet
        figure.classList.add('figure'); // j'applique le style 'figure sur chaque balise <figure>
        const images = document.createElement("img");
        images.src = work.imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        const legend = document.createElement("figcaption"); // je crée la balise <figcaption>
        legend.innerText = work.title; // j'indique que le texte des balises <figcaption> est "title" dans le tableau
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
        DisplayCategories(categories);
    })
    .catch ((error) => {console.error(error)
    })
}

// Fonction pour afficher les categories et les boutons

function DisplayCategories (categories) { 
    const btn_filter = document.createElement("div"); // je creer une DIV pour mes filtres
    const portfolio = document.getElementById("portfolio"); // je recupere l'id portfolio dans le DOM
    const gallery = document.querySelector(".gallery"); // je recupere la div gallery pour cette fonction
    portfolio.insertBefore(btn_filter,gallery); // je veux que mes boutons se placent avant la div gallery
    // portfolio.appendChild(btn_filter); // portfolio est parent de btn_filter
    btn_filter.classList.add("btn_filter"); // j'applique le style .btn_filter à la div btn_filter
    
    categories.forEach(categorie => { // pour chaque categorieS(ophie) : 
        const button = document.createElement("button"); // je crée un bouton pour chaque categories
        button.classList.add("btn")// class à mettre sur mes bouton de trie
        btn_filter.appendChild(button); // gallery est parent de input
        button.innerText = categorie.name; // j'indique que le texte des balises <figcaption> est "title" dans le tableau

        // je veux une fonction sur chaque bouton qui affiche les projetS.categoryId = categoriesS.id
        button.addEventListener("click", function () { // pour chaque boutons, j'appelle la fonction FilterCategrory
    
            FilterbyCategory(work.categoryId, categorie.id);
        })
    })};

// Filtrer avec mes boutons    

function FilterbyCategory (works, ) {
    const worksFiltres = works.filter (function (works, categories) {
    return works.categoryId === categories.id;
});
console.log(worksFiltres)
};