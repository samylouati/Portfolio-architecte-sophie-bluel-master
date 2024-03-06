console.log('modale yo') // fichier script modale ok !

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

//je recupere les elements dont j'aurais besoin dans le DOM 

const modalesContainer = document.querySelector("modalesContainer"); //la div qui contient les modales
// const modaleDelete = document.querySelector("modaleDelete"); //la modale qui permet de supprimer les projets
// const modaleAdd = document.querySelector("modaleAdd"); //la modale qui permet d'ajouter des projets
// const galleryModale = document.querySelector("galleryModale");//la div qui affiche les projets dans la modale
// const BtnModify = document.querySelector("modify"); //je cible le bouton "modifier" qui a pour id "admin2"
// console.log(BtnModify);

// Fonction pour afficher les projets dans la modale
function displayWorksInModal(works) {
    const galleryModale = document.querySelector('.galleryModale');
    galleryModale.innerHTML = ''; // Efface le contenu actuel de la modale

    works.forEach(work => {
        const article = document.createElement('article');
        article.classList.add('photosModale');

        const img = document.createElement('img');
        img.src = work.imageUrl;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Supprimer';
        deleteBtn.classList.add('btn', 'btn-delete');

        deleteBtn.addEventListener('click', () => {
            // Ajoutez ici la logique pour supprimer le projet
            // Vous pouvez utiliser work.id ou work.title pour identifier le projet à supprimer
            // Une fois supprimé, actualisez la modale ou rafraîchissez la page si nécessaire
        });

        article.appendChild(img);
        article.appendChild(deleteBtn);
        galleryModale.appendChild(article);
    });
}

// Écouteur d'événement pour le lien "modifier"
const modifyLink = document.getElementById('admin2');
modifyLink.addEventListener('click', () => {
    if (isAdmin()) {
        // Afficher la modale avec les projets
        const modalContainer = document.querySelector('.modalesContainer');
        modalContainer.style.display = 'flex';

        // Récupérer les travaux depuis l'API et les afficher dans la modale
        getApiWorks()
            .then(works => {
                displayWorksInModal(works);
            })
            .catch(error => {
                console.error(error);
            });
    }
});

// Fonction pour supprimer un projet
function deleteProject(projectId) {
    // Ajoutez ici la logique pour supprimer le projet en utilisant son identifiant (projectId)
}

// Fonction pour vérifier si l'utilisateur est un administrateur
function isAdmin() {
    const token = localStorage.getItem('token');
    return token !== null;
}