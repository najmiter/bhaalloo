const SPEED = 50;
const PLAYER_IMG_SIDE_LENGTH = 30; // px
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const bgMusic = document.getElementById("bg-music");
const startBtn = document.getElementById("start-btn");
const fruits = document.querySelector(".fruits");
let elemets = [];

// bgMusic.volume = 0.1;

const playerContainer = document.querySelector(".player-container");

bgMusic?.addEventListener("pause", (thing) => thing.target.play());
startBtn.addEventListener("click", () => {
    bgMusic?.play();
    document.querySelector("#start-btn-container").style.display = "none";
    document.querySelector("body").addEventListener("keydown", movePlayer);
});

document.querySelector(".fruits").addEventListener("click", (e) => {
    elemets = elemets.filter((el) => el !== e.target);
    console.log(e.target.getBoundingClientRect().top);
    fruits.removeChild(e.target);
});

function movePlayer(key) {
    const previousLeft = playerContainer.getBoundingClientRect().left;
    const previousTop = playerContainer.getBoundingClientRect().top;

    if (key.code == "KeyN") {
        const el = document.createElement("div");
        el.textContent = ["🥰", "🍉", "🍎", "🥬"].at(
            Math.trunc((Math.random() * 100000) % 4)
        );
        el.setAttribute("class", "dynamic");
        el.setAttribute("data-id", elemets.length);
        el.style.left = Math.trunc((Math.random() * 1000000) % 95) + "%";
        elemets.push(el);
        fruits.appendChild(el);
    }

    if (key.code == "ArrowRight" || key.code == "KeyD") {
        playerContainer.style.left =
            previousLeft + SPEED + PLAYER_IMG_SIDE_LENGTH < screenWidth
                ? `${previousLeft + SPEED}px`
                : `${screenWidth - PLAYER_IMG_SIDE_LENGTH}px`;
    }

    if (key.code == "ArrowLeft" || key.code == "KeyA") {
        playerContainer.style.left =
            previousLeft - SPEED >= 0 ? `${previousLeft - SPEED}px` : 0;
    }

    if (key.code == "ArrowUp" || key.code == "KeyW") {
        playerContainer.style.top =
            previousTop - SPEED >= 100 ? `${previousTop - SPEED}px` : 100;
    }

    if (key.code == "ArrowDown" || key.code == "KeyS") {
        playerContainer.style.top =
            previousTop + SPEED + PLAYER_IMG_SIDE_LENGTH < screenHeight
                ? `${previousTop + SPEED}px`
                : `${screenHeight - PLAYER_IMG_SIDE_LENGTH}px`;
    }
}
