// ChinaBox - Script principal

// Message de bienvenue dans la console
console.log("Bienvenue chez ChinaBox !");


// Année automatique dans le pied de page
const annee = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${annee} ChinaBox - Importation et vente en ligne`;
}


// Confirmation avant ouverture WhatsApp
const boutonWhatsApp = document.querySelector(".btn");

if (boutonWhatsApp) {

    boutonWhatsApp.addEventListener("click", function() {

        console.log("Client redirigé vers WhatsApp pour une commande.");

    });

}


// Message automatique au chargement du site
window.onload = function() {
    console.log("Le site ChinaBox est chargé avec succès.");
};
