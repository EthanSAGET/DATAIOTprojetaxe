// Fonction fictive pour récupérer les cartes de l'utilisateur
function getMesCartes() {
  return [
    { id: 1, nom: "Carte 1", image: "carte1.jpg" },
    { id: 2, nom: "Carte 2", image: "carte2.jpg" },
    // ...
  ];
}

// Fonction fictive pour récupérer les cartes disponibles
function getCartesDisponibles() {
  return [
    {
      id: 101,
      nom: "Carte 101",
      image: "carte101.jpg",
      proprietaire: "utilisateur1",
    },
    {
      id: 102,
      nom: "Carte 102",
      image: "carte102.jpg",
      proprietaire: "utilisateur2",
    },
    // ...
  ];
}

// Affichage des cartes de l'utilisateur
const mesCartesSection = document.querySelector(".cartes-moi");
const mesCartes = getMesCartes();
mesCartes.forEach((carte) => {
  const carteElement = document.createElement("div");
});
