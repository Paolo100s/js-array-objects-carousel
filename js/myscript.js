// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.


// Array
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel\\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

// Variabili globali
const container = document.getElementById("container");
const sidebar = document.getElementById("side_bar");

// Ciclo degli oggetti
images.forEach(element => {

    // Container
    const card = 
    `
    <div class="item">
        <div class="image">
            <img src="${element.image}" alt="immagine">
        </div>
        <div class="info">
            <h4>${element.title}</h4>
            <p>${element.text}</p>
        </div>
    </div>
    `;
    container.innerHTML += card;

    // Sidebar
    const cardSide =
    `
    <div>
        <img src="${element.image}" alt="sideimmagine">
        <div class="opacity"></div>
    </div>
    `;

    sidebar.innerHTML += cardSide;
});

// Assegnazione classi
const activeCard = document.querySelector('#container .item');
activeCard.classList.add('active');

// const activeCardSide = document.querySelector('#side_bar div');
// activeCardSide.classList.add('selected');


// Button
const btnPrevious = document.getElementById("previous_img");
const btnNext = document.getElementById("next_img");

// Array immagini
const arrayCard = document.querySelectorAll('#container .item');
const arrayCardSide = document.querySelectorAll('#side_bar img');


// Scorrimento
let imagePosition = 0;
btnNext.addEventListener('click', next);
btnPrevious.addEventListener('click', previous);

// console.log(btnNext, btnPrevious);

// funzioni
function next() {
    if (imagePosition < (arrayCard.length -1)) {

        arrayCard[imagePosition].classList.remove('active');
        arrayCardSide[imagePosition].classList.remove('selected');

        imagePosition++;

        arrayCard[imagePosition].classList.add('active');
        arrayCardSide[imagePosition].classList.add('selected');

    } else if (imagePosition === (arrayCard.length - 1)) {

        arrayCard[imagePosition].classList.remove('active');
        arrayCardSide[imagePosition].classList.remove('selected');

        imagePosition = 0;

        arrayCard[imagePosition].classList.add('active');
        arrayCardSide[imagePosition].classList.add('selected');
    }
};

function previous() {
    if (imagePosition > 0) {

        arrayCard[imagePosition].classList.remove('active');
        arrayCardSide[imagePosition].classList.remove('selected');
       
        imagePosition--;

        arrayCard[imagePosition].classList.add('active');
        arrayCardSide[imagePosition].classList.add('selected');

    } else if (imagePosition === 0) {

        arrayCard[imagePosition].classList.remove('active');
        arrayCardSide[imagePosition].classList.remove('selected');

        imagePosition = arrayCard.length - 1;

        arrayCard[imagePosition].classList.add('active');
        arrayCardSide[imagePosition].classList.add('selected');
    }
}
