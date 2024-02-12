console.log('yo') // pour verfifier si mon console.log fonctionne (f12) sur le navigateur

const API_BASE_URL = "http://localhost:5678/api"; // je crée cette variable pour l'url de base de l'API

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
    .then ((data) => {
        console.log(data);
        DisplayWorks();
    })
    .catch ((error) => {console.error(error)
    })
}

// je crée ce qui va me servir à afficher les images du portfolio, fonction DisplayWorks
const article = API_BASE_URL[0];
const gallery = document.querySelector(".gallery"); // je recupere la gallery

// const figure = document.createElement("figure"); // je crée une balise <figure>
// figure.classList.add('figure'); // j'applique le style 'figure' sur la balise <figure>

// const images = document.createElement("img"); // je crée une balise <img>
// images.src = article.imageUrl; // je veux que la source soit "imageUrl" present dans le tableau 

// const legend = document.createElement("figcaption"); // je crée une balise <figcaption>
// legend.innerText = article.title; // je veux que le text de legend soit "title" present dans le tableau 

// gallery.appendChild(figure); // gallery est parent de figure
// figure.appendChild(images); // figure est parent de images
// figure.appendChild(legend); // figure est parent de legend

// Fonction pour montrer les elements du tableau

function DisplayWorks () {
    Projet.forEach(article) => {
        const figure = document.createElement("figure"); // je crée une balise <figure> pour chaque projet
        figure.classList.add('figure'); // j'applique le style 'figure sur chaque balise <figure>
        const images = document.createElement("img");
        images.src = imageUrl; // j'indique que le chemin des images est "imageUrl" dans le tableau
        const legend = document.createElement("figcaption"); // je crée la balise <figcaption>
        legend.innerText = title; // j'indique que le texte des balises <figcaption> est "title" dans le tableau
        gallery.appendChild(figure); // gallery est parent de chaque <figure>
        figure.appendChild(images); // figure est parent de images
        figure.appendChild(legend); // figure est parent de legend
    }


}

function updateDots () {
	allDots.forEach((dot, Index) => {
		if (Index === currentSlideIndex) {
			dot_selected = dot.classList.add('dot_selected');
		}
		else {
			dot_unselected = dot.classList.remove('dot_selected');
		}
	});
}