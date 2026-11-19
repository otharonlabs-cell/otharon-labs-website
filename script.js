/* ==========================================
   OTHARON LABS — SCRIPT PRINCIPAL
   Comprendre. Calculer. Construire le futur.
========================================== */

"use strict";

/* ANNÉE AUTOMATIQUE */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* NAVIGATION */

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ASSISTANT OTHARON */

const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

/* OUVERTURE ET FERMETURE */

if (chatButton && chatBox) {
    chatButton.addEventListener("click", () => {
        const isOpen = chatBox.style.display === "block";

        chatBox.style.display = isOpen ? "none" : "block";

        if (!isOpen && chatInput) {
            chatInput.focus();
        }
    });
}

/* AFFICHAGE DES MESSAGES */

function addMessage(text, type = "") {
    if (!chatMessages) return;

    const message = document.createElement("div");

    message.className = "message";

    if (type === "user") {
        message.classList.add("user-message");
    }

    // textContent empêche l'interprétation du texte comme HTML.
    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* COMPRÉHENSION DES DEMANDES */

function assistantReply(message) {
    const text = message
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    if (!text) {
        return "Veuillez écrire votre question afin que je puisse vous répondre.";
    }

    if (
        text.includes("bonjour") ||
        text.includes("salut") ||
        text.includes("bonsoir") ||
        text.includes("hello")
    ) {
        return "Bonjour et bienvenue chez OTHARON Labs ! Comment puis-je vous aider à découvrir nos activités ?";
    }

    if (
        text.includes("otharon") ||
        text.includes("entreprise") ||
        text.includes("laboratoire")
    ) {
        return "OTHARON Labs est un projet technologique consacré à l'intelligence artificielle, à l'ingénierie, au développement logiciel et à l'innovation.";
    }

    if (
        text.includes("collaboration") ||
        text.includes("partenaire") ||
        text.includes("partenariat")
    ) {
        return "Nous vous remercions pour votre intérêt envers OTHARON Labs. Pour proposer une collaboration, contactez-nous à OTHARONlabs@gmail.com.";
    }

    if (
        text.includes("intelligence artificielle") ||
        text.includes(" ia ") ||
        text === "ia" ||
        text.includes("assistant intelligent")
    ) {
        return "OTHARON explore les systèmes d'intelligence artificielle, les assistants numériques et les solutions d'automatisation.";
    }

    if (
        text.includes("ingenierie") ||
        text.includes("calcul") ||
        text.includes("construction")
    ) {
        return "Notre domaine d'exploration comprend les calculs scientifiques, l'ingénierie et la conception de solutions techniques.";
    }

    if (
        text.includes("application") ||
        text.includes("logiciel") ||
        text.includes("developpement")
    ) {
        return "OTHARON s'intéresse au développement d'applications, de logiciels et de plateformes numériques modernes.";
    }

    if (
        text.includes("innovation") ||
        text.includes("recherche") ||
        text.includes("technologie")
    ) {
        return "L'innovation est au cœur de notre vision : comprendre les problèmes, rechercher des solutions et construire les technologies de demain.";
    }

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("mail") ||
        text.includes("adresse")
    ) {
        return "Vous pouvez contacter OTHARON Labs à cette adresse : OTHARONlabs@gmail.com.";
    }

    if (
        text.includes("projet") ||
        text.includes("services") ||
        text.includes("activites")
    ) {
        return "OTHARON développe une vision autour de l'intelligence artificielle, des applications numériques et des outils d'ingénierie.";
    }

    if (
        text.includes("merci")
    ) {
        return "C'est avec plaisir ! OTHARON Labs vous remercie pour votre visite.";
    }

    if (
        text.includes("au revoir") ||
        text.includes("a bientot")
    ) {
        return "Merci d'avoir visité OTHARON Labs. À bientôt !";
    }

    return "Merci pour votre message et votre intérêt envers OTHARON Labs. Pour une demande particulière ou une collaboration, écrivez-nous à OTHARONlabs@gmail.com.";
}

/* ENVOI DES MESSAGES */

if (chatForm && chatInput) {
    chatForm.addEventListener("submit", event => {
        event.preventDefault();

        const message = chatInput.value.trim();

        if (!message) return;

        addMessage(message, "user");

        chatInput.value = "";
        chatInput.disabled = true;

        const sendButton = chatForm.querySelector("button");

        if (sendButton) {
            sendButton.disabled = true;
        }

        setTimeout(() => {
            const response = assistantReply(message);

            addMessage(response);

            chatInput.disabled = false;

            if (sendButton) {
                sendButton.disabled = false;
            }

            chatInput.focus();

        }, 450);
    });
}

/* FERMETURE AVEC LA TOUCHE ÉCHAP */

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && chatBox) {
        chatBox.style.display = "none";
    }
});

/* FIN DU SCRIPT OTHARON */
