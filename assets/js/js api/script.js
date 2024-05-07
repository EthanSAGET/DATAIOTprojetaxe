/*// JavaScript pour la page cartes (script.js)

// Clé API HP (remplacez par votre clé réelle)
const apiKey = 'YOUR_API_KEY';

// Fonction pour charger les cartes
function chargerCartes(cartesAffichier) {
    const cartesContainer = document.querySelector('.cartes .carte-container');
    cartesContainer.innerHTML = ''; // Vider le conteneur avant de le remplir

    cartesAffichier.forEach(carte => {
        const carteElement = document.createElement('div');
        carteElement.classList.add('carte');
        carteElement.innerHTML = `
            <img src="<span class="math-inline">\{carte\.image\}" alt\="</span>{carte.nom}">
            <h3>${carte.nom}</h3>
            <p>Maison : ${carte.maison}</p>
            <p>Rareté : ${carte.rareté}</p>
            <p>Type : <span class="math-inline">\{carte\.type\}</p\>
<button class\="btn btn\-fav" data\-carte\-id\="</span>{carte.id}">
                ${carte.favoris ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
        `;

        cartesContainer.appendChild(carteElement);
    });
}

// Fonction pour filtrer les cartes (non implémentée dans cet exemple)
function filtrerCartes() {
    // ...
}

// Événement pour le formulaire de filtrage (non implémenté dans cet exemple)
document.querySelector('.filtres form').addEventListener('submit', (event) => {
    // ...
});

// Événement pour les boutons "Favoris"
document.querySelectorAll('.carte .btn-fav').forEach(button => {
    button.addEventListener('click', () => {
        const carteId = parseInt(button.dataset.carteId);
        const carte = cartes.find(carte => carte.id === carteId);

        // Gérer la logique pour ajouter ou supprimer la carte des favoris (non implémentée)
        carte.favoris = !carte.favoris;
        button.textContent = carte.favoris ? 'Retirer des favoris' : 'Ajouter aux favoris';

        // Mettre à jour l'affichage de la carte
        // ... (par exemple, en rechargeant la carte ou en modifiant le CSS)
    });
});

// Charger les cartes au démarrage de la page
fetch(`https://api.potterapi.com/v1/cards?sort=asc&pageSize=10&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const cartesAffichier = data.cards.map(carte => {
            return {*/
