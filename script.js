const rulesButton = document.querySelector("#rules-button");
const rulesModal = document.querySelector("#rules-modal");
const rulesModalCloseButton = document.querySelector("#rules-modal > div > div:first-child img");
const rulesModalDetails = document.querySelector("#rules-modal > div");

const scoreHtml = document.querySelector(".total-score");
const rpsContainer = document.querySelector("#rps-container");

const optionRock = document.querySelector("#rps-container #rock");
const optionPaper = document.querySelector("#rps-container #paper");
const optionScissors = document.querySelector("#rps-container #scissors");

const houseOptionsList = ["rock", "paper", "scissors"];
const houseOptionRef = [optionRock, optionPaper, optionScissors];

const pickedModal = document.querySelector(".picked-visi");
const userOptionImg = document.querySelector("#you-picked img");
const houseOptionImg = document.querySelector("#house-picked img");
const unpickedHouse = document.querySelector("#unpicked-house");

const resultModal = document.querySelector("#result");
const result = document.querySelector("#result > p:first-of-type");
const playAgainButton = document.querySelector("#result > p:nth-of-type(2)");





let userOption;
let userOptionSrc;
let houseOption;
let houseOptionSrc;
let score = 0;

rulesButton.onclick = () => {
    rulesModal.style.display = "block";
};

rulesModalCloseButton.addEventListener("click", () => {
    rulesModal.style.display = "none";
});

rulesModal.addEventListener("click", (event) => {
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});

optionRock.addEventListener("click", () => {
    userOption = "rock";
    userOptionSrc = optionRock.src;
    rpsContainer.style.display = "none";
    pickedModal.style.display = "flex";
    userOptionImg.src = userOptionSrc;
    userOptionImg.alt = userOption;
    userOptionImg.id = userOption;
    setTimeout(() => {
        let houseOptionIndex = Math.floor(Math.random() * 3);
        houseOption = houseOptionsList[houseOptionIndex];
        let houseOptionRefObjs = houseOptionRef[houseOptionIndex];
        unpickedHouse.style.display = "none";
        houseOptionImg.style.display = "block";
        houseOptionImg.src = houseOptionRefObjs.src;
        houseOptionImg.alt = houseOptionRefObjs.alt;
        houseOptionImg.id = houseOption;
    },2000)
    setTimeout(() => {
        if ((userOption == "rock" && houseOption == "scissors") || (userOption == "scissors" && houseOption == "paper") || (userOption == "paper" && houseOption == "rock") ) {
            resultModal.style.display = "block";
            result.innerText = "YOU WIN";
            score += 1;
            scoreHtml.innerText = score;
        } else if (userOption == houseOption) {
            resultModal.style.display = "block";
            result.innerText = "DRAW";
        } else {
            resultModal.style.display = "block";
            result.innerText = "YOU LOSE";
        }

        playAgainButton.addEventListener("click", () => {
            rpsContainer.style.display = "flex";
            unpickedHouse.style.display = "block";
            houseOptionImg.style.display = "none";
            pickedModal.style.display = "none";
            resultModal.style.display = "none";
        })
    }, 2200)
});

optionPaper.addEventListener("click", () => {
    userOption = "paper";
    userOptionSrc = optionPaper.src;
    rpsContainer.style.display = "none";
    pickedModal.style.display = "flex";
    userOptionImg.src = userOptionSrc;
    userOptionImg.alt = userOption;
    userOptionImg.id = userOption;
    setTimeout(() => {
        let houseOptionIndex = Math.floor(Math.random() * 3);
        houseOption = houseOptionsList[houseOptionIndex];
        let houseOptionRefObjs = houseOptionRef[houseOptionIndex];
        unpickedHouse.style.display = "none";
        houseOptionImg.style.display = "block";
        houseOptionImg.src = houseOptionRefObjs.src;
        houseOptionImg.alt = houseOptionRefObjs.alt;
        houseOptionImg.id = houseOption;
    },2000)
    setTimeout(() => {
        if ((userOption == "rock" && houseOption == "scissors") || (userOption == "scissors" && houseOption == "paper") || (userOption == "paper" && houseOption == "rock") ) {
            resultModal.style.display = "block";
            result.innerText = "YOU WIN";
            score += 1;
            scoreHtml.innerText = score;
        } else if (userOption == houseOption) {
            resultModal.style.display = "block";
            result.innerText = "DRAW";
        } else {
            resultModal.style.display = "block";
            result.innerText = "YOU LOSE";
        }

        playAgainButton.addEventListener("click", () => {
            rpsContainer.style.display = "flex";
            unpickedHouse.style.display = "block";
            houseOptionImg.style.display = "none";
            pickedModal.style.display = "none";
            resultModal.style.display = "none";
        })
    }, 2200)    
});

optionScissors.addEventListener("click", () => {
    userOption = "scissors";
    userOptionSrc = optionScissors.src;
    rpsContainer.style.display = "none";
    pickedModal.style.display = "flex";
    userOptionImg.src = userOptionSrc;
    userOptionImg.alt = userOption;
    userOptionImg.id = userOption;
    setTimeout(() => {
        let houseOptionIndex = Math.floor(Math.random() * 3);
        houseOption = houseOptionsList[houseOptionIndex];
        let houseOptionRefObjs = houseOptionRef[houseOptionIndex];
        unpickedHouse.style.display = "none";
        houseOptionImg.style.display = "block";
        houseOptionImg.src = houseOptionRefObjs.src;
        houseOptionImg.alt = houseOptionRefObjs.alt;
        houseOptionImg.id = houseOption;
    },2000)
    setTimeout(() => {
        if ((userOption == "rock" && houseOption == "scissors") || (userOption == "scissors" && houseOption == "paper") || (userOption == "paper" && houseOption == "rock") ) {
            resultModal.style.display = "block";
            result.innerText = "YOU WIN";
            score += 1;
            scoreHtml.innerText = score;
        } else if (userOption == houseOption) {
            resultModal.style.display = "block";
            result.innerText = "DRAW";
        } else {
            resultModal.style.display = "block";
            result.innerText = "YOU LOSE";
        }

        playAgainButton.addEventListener("click", () => {
            rpsContainer.style.display = "flex";
            unpickedHouse.style.display = "block";
            houseOptionImg.style.display = "none";
            pickedModal.style.display = "none";
            resultModal.style.display = "none";
        })
    }, 2200)
});