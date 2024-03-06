console.log('modale yo') // fichier script modale ok !

//je recupere les elements dont j'aurais besoin dans le DOM pour les modales

//Fonction pour afficher les travaux dans la modale 

function DisplayWorksInModale(works) {
    const galleryModale = document.querySelector(".galleryModale"); //Je cible galleryModale dans le DOM
    works.forEach(work => { // pour chaque "work" dans "works" : 
        const article = document.createElement("article"); // je crée une balise <article>
        article.classList.add("photosModale"); // j'applique le style "photosModale" sur chaque balise <article>
        const imagesModale = document.createElement("img");
        imagesModale.src = work.imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        galleryModale.appendChild(article); // "gallery" est parent de chaque <figure>
        article.appendChild(imagesModale); // <figure> est parent de <images>
    })
};