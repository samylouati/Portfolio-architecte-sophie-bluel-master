console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

// pour recuperer les WORKS, je fais un fetch :
// fetch (`URL de l'api à appeler`) // si j'arrive à communiquer avec l'API
//     .then ((response) => response.json()) // alors je veux cette reponse en format json
//     .then ((data) => {console.log(data) }) // traduit moi cette reponse (data) pour verifier que ce soit la bonne reposne 
//     .catch ((error) => {console.error(error); }); // si tu n'y arrives pas, donne moi l'erreur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API
console.log(API_BASE_URL)

// Etape 1 du guide des étapes clés

getApiWorks(); // appel de la function pour recuperer les travaux à l'ouverture de la page
getApiCategories(); // appel de la fonction pour les categories à l'ouverture de la page

//Fonction pour recuperer les travaux de l'architecte : 

function getApiWorks() {
   return fetch (`${API_BASE_URL}/works`) // je recupere les travaux de l'architecte sur l'API /works
    .then ((response) => response.json()) // je veux ces travaux au format JSON
    .then (works => {
        console.table(works); // je nome l'ensemble des travaux recuperer "works"
        //DisplayWorks(works); // j"appelle ma fonction DisplayWorks pour montrer les "works" (en commentaire, sinon le DisplayWorks se fait deux fois)
        return works;
    })
    .catch ((error) => {console.error(error)
    })
}

// je stock les "works" recuperés dans cette variable
let allWorks = []; 
getApiWorks().then(works => {
    allWorks = works; // je stock donc les works recuperer dans la variable allWorks
    DisplayWorks(allWorks); // j'affiche tous les works initiaux
})

// Fonction pour montrer les elements du tableau "works"

function DisplayWorks(works) {
    const gallery = document.querySelector(".gallery"); // je recupere la "gallery" dans le DOM
    works.forEach(work => { // pour chaque "work" dans "works" : 
        const figure = document.createElement("figure"); // je crée une balise <figure>
        figure.classList.add("figure"); // j'applique le style "figure" sur chaque balise <figure>
        const images = document.createElement("img");
        images.src = work.imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        const legend = document.createElement("figcaption"); // je crée la balise <figcaption>
        legend.innerText = work.title; // j'indique que le texte des balises <figcaption> est "title" dans le tableau
        gallery.appendChild(figure); // "gallery" est parent de chaque <figure>
        figure.appendChild(images); // <figure> est parent de <images>
        figure.appendChild(legend); // <figure> est parent de <legend>  
    })
};

// Etape 1.2 du guide des étapes clés

// Fonction pour recuperer les categories

function getApiCategories() {
    fetch (`${API_BASE_URL}/categories`) // je recupere les catégories sur l'API
    .then ((response) => response.json()) // je veux ces catégories au format JSON
    .then (categories => {
        console.table(categories); // je nome ces catégories
        DisplayCategories(categories); // je montre ces categories
    })
    .catch ((error) => {console.error(error)
    })
}

// Fonction pour afficher les categories et les boutons

function DisplayCategories(categories) { 
    const btn_filter = document.createElement("div"); // je creer une <DIV> pour mes filtres
    const portfolio = document.getElementById("portfolio"); // je recupere l'id "#portfolio" dans le DOM
    const gallery = document.querySelector(".gallery"); // je recupere la <div> "gallery" pour cette fonction
    portfolio.insertBefore(btn_filter,gallery); // je veux que mes boutons se placent avant la <div> "gallery"
    btn_filter.classList.add("btn_filter"); // j'applique le style "".btn_filter" à la <div> "btn_filter"
    const all = document.createElement("button"); // je crée un bouton "Tous"
    all.classList.add("all"); // j'applique le style "all" au bouton 
    all.innerText = "Tous"; // je met du texte : "Tous"
    btn_filter.appendChild(all); // la <div> "btn_filter" est parent de "Tous"

//EventListener pour afficher "Tous"
    all.addEventListener("click", function () { 
        ClearWorks(); // jappel la fonction pour nettoyer la gallery
        DisplayWorks(allWorks); // je montre les "Works"
    });
    
    categories.forEach(category => { // pour chaque categorie dans categories : 
        const button = document.createElement("button"); // je crée un <bouton>
        button.classList.add("btn")// je leur applique le style "btn"
        btn_filter.appendChild(button); // "gallery" est parent de <button>
        button.innerText = category.name; // j'indique que le texte des balises <figcaption> est "title" dans le tableau

        // je veux une fonction sur chaque bouton qui affiche "work.categoryId = categorie.id"
        button.addEventListener("click", function () { 
            ClearWorks(); // jappel la fonction pour nettoyer la gallery
            const WorksFiltered = allWorks.filter (work => work.categoryId === category.id);
            console.log(WorksFiltered);
            DisplayWorks(WorksFiltered); // je montre les "Works"
        });
    }); 
};

// Fonction pour filtrer avec mes boutons

// j'insert la fonction en entier dans l'EventListener car probleme avec category qui n'est pas definit
// function FilterbyCategory(works) {
//     const WorksFiltered = works.filter (work => work.categoryId === category.id);
//     console.log(WorksFiltered)
// };

// Fonction pour supprimer les elements de la <div> "gallery"
function ClearWorks() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
}

// Fonction pour afficher "Tous" les categories > intégré dans la fonction DisplayCategories

// all.addEventListener("click", function () { 
//     ClearWorks(); // jappel la fonction pour nettoyer la gallery
//     const WorksFiltered = allWorks.filter (work => work.categoryId === category.id);
//     console.log(WorksFiltered);
//     DisplayWorks(WorksFiltered); // je montre les "Works"
// });