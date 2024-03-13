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
    DisplayWorksInModale(allWorks);
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
    const btn_all = document.createElement("button"); // je crée un bouton "Tous"
    btn_all.classList.add("btn"); // j'applique le style "all" au bouton 
    btn_all.innerText = "Tous"; // je met du texte : "Tous"
    btn_filter.appendChild(btn_all); // la <div> "btn_filter" est parent de "Tous"

    //EventListener pour afficher "Tous" les travaux
    btn_all.addEventListener("click", function () { 
        ClearWorks(); // jappel la fonction pour nettoyer la gallery
        DisplayWorks(allWorks); // je montre les "Works"
        btn_active(this);
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
            btn_active(this);
        });
    }); 
};

// Fonction pour afficher le bouton actif
function btn_active (activeBtn) {
    const all_btn = document.querySelectorAll('.btn');
    all_btn.forEach(btn => {
        if (btn === activeBtn) {
            btn.classList.add('btn_active');
        }
        else {
            btn.classList.remove('btn_active');
        }})
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
    gallery.innerHTML = ""; //permet de tout supprimer dans la gallery à l'appel de la fonction
}

// Fonction pour afficher "Tous" les categories > intégré dans la fonction DisplayCategories

// all.addEventListener("click", function () { 
//     ClearWorks(); // jappel la fonction pour nettoyer la gallery
//     const WorksFiltered = allWorks.filter (work => work.categoryId === category.id);
//     console.log(WorksFiltered);
//     DisplayWorks(WorksFiltered); // je montre les "Works"
// });

// Etape 2 : creation de la page login

//Etape 2.2 : administrer la conexion (fichier login.js) + fonction pour verifier si le token est dans le localStorage

document.addEventListener("DOMContentLoaded", function() { // appel de la fonction pour verifier si le token est dans le localstorage
   
    const token = localStorage.getItem('token'); // variable pour le token en localstorage

    if (token) { // si token dans localstorage, alors j'affiche les elements adminMode
        
        const elementsadmin = document.querySelectorAll('.adminMode') // je recupere tous les elements adminMode pour rendre visible

        elementsadmin.forEach(element => {
            element.style.display = 'flex';
        });
        
    } else {
        // si le token n'existe pas, rien à changer
    }
});

// Supprimer le token du localStorage en logout : 

const logout = document.querySelector('#logout'); //je recupere mon id logout dans le DOM

logout.addEventListener('click', function() { //evenement au click > supprime le token du localstorage
    localStorage.removeItem('token');
})

//addEvendListener pour ouvrir la modale 

const modify = document.querySelector('#admin2');

modify.addEventListener('click', function(event) {
    event.preventDefault(); // pour eviter de recharger la page

    const modale = document.querySelector('.modalesContainer');
    const modaleDelete = document.querySelector('.modale.modaleDelete')
    const modaleAdd = document.querySelector('.modale.modaleAdd');

    modale.style.display = "flex";
    modaleDelete.style.display = "flex";
    modaleAdd.style.display = "none";

});

//Fonction pour afficher les travaux dans la modale 

function DisplayWorksInModale(works) {
    const galleryModale = document.querySelector(".galleryModale"); //Je cible galleryModale dans le DOM
   console.log(works);
    works.forEach(work => { // pour chaque "work" dans "works" : 
        const article = document.createElement("article"); // je crée une balise <article>
        article.classList.add("photosModale"); // j'applique le style "photosModale" sur chaque balise <article>
       
        const imagesModale = document.createElement("img");
        imagesModale.src = work.imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        
        const icons = document.createElement('button');
        icons.setAttribute('id', `${work.id}`);// je leur assigne l'id correspondant le tableau work
        icons.classList.add("fa-solid", "fa-trash-can", "trashBtn");   
        
        //addEventListener pour supprimer :
        icons.addEventListener('click', function(event) {
            event.preventDefault(); // evite le rechargement de la page

            const workId = work.id;
            //Index pour cibler l'element à supprimer dans le tableau works :
            const indexToRemove = works.findIndex(item => item.id === workId);
            if (indexToRemove !== -1) {
                //supprimer l'element du tableau works
                works.splice(indexToRemove, 1);
                //supprimer l'<article> correspondant de la modale
                article.remove();
                //appel de la fonction pour supprimer l'element de l'API
                deleteWork(work.id);

                //verifier s'il reste d'autres articles dans la modale pour eviter qu'elle ne se ferme
                const remainingArticles = document.querySelectorAll('.photosModale');
                if (remainingArticles.length === 0) {
                    //aucun article restant, fermer la modale
                    const modale = document.querySelector('modalesContainer');
                    modale.style.display = 'none';
                }
            }
        });

        article.appendChild(icons);
        article.appendChild(imagesModale);
        galleryModale.appendChild(article);
    })
};

//function displayworksinmodale version Seb :
// function DisplayWorksInModale(works) {
//      const galleryModale = document.querySelector(".galleryModale"); //Je cible galleryModale dans le DOM
//      let html = "" ;
//      works.forEach(work => {
//         html += `<article class="photosModale">
//             <img src="${work.imageUrl}" >
//             <i class="fa-solid fa-trash"></i>
//         </article>`;
//      })
//      galleryModale.innerHTML = html;
// }

//addEventListener pour fermer la modale : 

const closeModaleDelete = document.querySelector("#closeModaleDelete");

closeModaleDelete.addEventListener('click', function() {
    const modale = document.querySelector('.modalesContainer');
    const modaleDelete = document.querySelector('.modale.modaleDelete');

    modale.style.display = "none";
    modaleDelete.style.display = "none";
});

//fonction pour ouvrir la modaleAdd

const btnAddPhotos = document.querySelector('#addPhoto');

btnAddPhotos.addEventListener('click', function() {

    const modale = document.querySelector('.modalesContainer');
    const modaleAdd = document.querySelector('.modale.modaleAdd');
    const modaleDelete = document.querySelector('.modale.modaleDelete');

    modale.style.display = "flex";
    modaleAdd.style.display = "flex";
    modaleDelete.style.display = "none";
});

//function pour fermer la modaleAdd

const closeModaleAdd = document.querySelector("#closeModaleAdd");

closeModaleAdd.addEventListener('click', function() {
    const modale = document.querySelector('.modalesContainer');
    const modaleAdd = document.querySelector('.modale.modaleAdd');
    const modaleDelete = document.querySelector('.modale.modaleDelete');

    modale.style.display = "none";
    modaleAdd.style.display = "none";
    modaleDelete.style.display = "none";
});

//function pour revenir sur la modale Delete à partir de la modale Add

const btnPrevious = document.querySelector('#previous');

btnPrevious.addEventListener('click', function() {
    const modaleAdd = document.querySelector('.modale.modaleAdd');
    const modaleDelete = document.querySelector('.modale.modaleDelete');

    modaleAdd.style.display = 'none';
    modaleDelete.style.display = 'flex';
});

//Fonction pour fermer les modales en cliquant en dehors de celles ci :

const modalesContainer = document.querySelector('.modalesContainer');

modalesContainer.addEventListener('click', function(event) {
    //je verifie si l'element cliqué est la div modalesContainer elle meme
    if(event.target === modalesContainer) {
        //si c'est le cas, fermez toutes les modales et masquer modalesContainer
        const modales = document.querySelectorAll('.modale');
        modales.forEach(modale => {
            modale.style.display = 'none';
        });
        modalesContainer.style.display = 'none'
    }
});

//Fonction pour supprimer les elements dans la modaleDelete (ajouter à la modalDelete en addEventListener)

function deleteWork(workId) {
    fetch(`${API_BASE_URL}/works/${workId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la supression du travail');
        }
        console.log('travail supprimer avec succès');
    })
    .catch(error => {
        if (error.name !== 'AbortError') {
            console.error('Erreur lors de la suppression :', error);
        }
    });
}

//afficher l'image chargée dans la modaleAdd : 

function imageUpload(event) {
    const file = event.target.files[0]; //recupere le fichier selectionné
    const imageUrl = URL.createObjectURL(file); //créer une URL pour le fichier selectionné
    const uploadImage = document.querySelector('#uploadImage')//je recupere l'image dans le DOM
    const icon = document.querySelector('#iconToHide');//icone à  cacher au chargement de l'image
    const btn = document.querySelector('#btnToHide');//btn à cacher au chargement de l'image

    //mettre à jours l'attribut src de l'element img avec l'URL de l'image chargée
    uploadImage.src = imageUrl;
    uploadImage.style.display = 'block'; //pour aficher l'image
    icon.style.display = 'none'; //pour cacher l'icone
    btn.style.display = 'none'; // pour cacher le bouton
}

//ecouter les changements dans l'input file pour le chargement d'image 
const imageUrlInput = document.querySelector('#imageUrl');
imageUrlInput.addEventListener('change', imageUpload);