//je selectionne tous les liens qui ont la classe "js-modale"
//ensuite, je veux que chaque lien, au click, ouvre la modale

document.querySelectorAll('.js-modale').forEach(a => {
    a.addEventListener('click', openModale)
})

let modal = null

// je créé une constante de la fonction, qui prend en parametre l'evenement pour ouvrir la modale
const openModale = function (e) {
    e.preventDefault() 
    const target = document.querySelector(e.target.getAttribut('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden') //Pour que aria deviennent "false" donc visible(pourrait etre un setAttribute = false)
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModale) //pour fermer la modale
    modal.querySelector('.js-close-modale').addEventListener('click', closeModale) // je selectionne mon button, et je veux qu'au click, je ferme la modale
}

// constante de la fonction qui prend en parametre l'evenement pour fermer la modale
const closeModale = function (e) {
    if (modal === null) return
    e.preventDefault()
    target.style.display = "non" //pour cacher le display
    target.setAttribute('aria-hidden', 'true') //Pour que aria deviennent "true" donc cacher
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModale)
    modal.querySelector('.js-close-modale').removeEventListener('click', closeModale) // je selectionne mon button, et je veux qu'au click, je ferme la modale

    modal = null
}