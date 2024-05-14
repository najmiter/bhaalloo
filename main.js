const SPEED = 50;
const PLAYER_IMG_SIDE_LENGTH = 30; // px
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const playerContainer = document.querySelector(".player-container");

document.getElementById("bg-music").volume = 0.1;
document.querySelector("body").addEventListener("keydown", movePlayer);

function movePlayer(key) {
    const previousLeft = playerContainer.getBoundingClientRect().left;
    const previousTop = playerContainer.getBoundingClientRect().top;

    if (key.code == "ArrowRight") {
        playerContainer.style.left =
            previousLeft + SPEED + PLAYER_IMG_SIDE_LENGTH < screenWidth
                ? `${previousLeft + SPEED}px`
                : `${screenWidth - PLAYER_IMG_SIDE_LENGTH}px`;
    }

    if (key.code == "ArrowLeft") {
        playerContainer.style.left =
            previousLeft - SPEED >= 0 ? `${previousLeft - SPEED}px` : 0;
    }

    if (key.code == "ArrowUp") {
        playerContainer.style.top =
            previousTop - SPEED >= 0 ? `${previousTop - SPEED}px` : 0;
    }

    if (key.code == "ArrowDown") {
        playerContainer.style.top =
            previousTop + SPEED + PLAYER_IMG_SIDE_LENGTH < screenHeight
                ? `${previousTop + SPEED}px`
                : `${screenHeight - PLAYER_IMG_SIDE_LENGTH}px`;
    }
}
