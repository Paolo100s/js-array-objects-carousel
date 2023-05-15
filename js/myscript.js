// variabili globali

const image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const btnPrevious = document.getElementById("previous_img");
const btnNext = document.getElementById("next_img");

// creazione container e side
for (let i=0; i < image.length; i++) {

    const cicleImage = image[i];

    // principale
    const card = document.createElement('div');

    card.classList.add("item");

    card.innerHTML = `<img src="img/${cicleImage}" alt="immagine">`;

    document.getElementById("container").append(card);

    // side
    const cardSide = document.createElement('div');

    cardSide.innerHTML =
    `<div class="opacity"></div>
    <img src="img/${cicleImage}" alt="immagine">`;

    document.getElementById("side_bar").append(cardSide);
}

// selezione elementi
let imagePosition = 0;

    // immagini principali
    const containerImage = document.querySelectorAll("#container div");

    containerImage[imagePosition].classList.add("active");

    // immagini side
    const containerSideImage = document.querySelectorAll("#side_bar div div");

    containerSideImage[imagePosition].classList.remove("opacity");

// funzioni

// next
btnNext.addEventListener("click",
    function () {

        containerImage[imagePosition].classList.remove("active");

        containerSideImage[imagePosition].classList.add("opacity");

        if (imagePosition == containerImage.lenght - 1) {
            imagePosition = -1;
        }

        imagePosition++;

        containerImage[imagePosition].classList.add("active");

        containerSideImage[imagePosition].classList.remove("opacity");
    }
)

// previous
btnPrevious.addEventListener("click",
    function () {

        containerImage[imagePosition].classList.remove("active");

        containerSideImage[imagePosition].classList.add("opacity");

        if (imagePosition == 0) {
            imagePosition = containerImage.length;
        }

        imagePosition--;

        containerImage[imagePosition].classList.add("active");

        containerSideImage[imagePosition].classList.remove("opacity");
    }
)