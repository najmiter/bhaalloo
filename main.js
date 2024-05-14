const SPEED = 50;
const PLAYER_IMG_SIDE_LENGTH = 30; // px
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const bgMusic = document.getElementById("bg-music");
const startBtn = document.getElementById("start-btn");

bgMusic.volume = 0.1;

const playerContainer = document.querySelector(".player-container");

bgMusic.addEventListener("pause", (thing) => thing.target.play());
startBtn.addEventListener("click", () => {
    bgMusic.play();
    document.querySelector("#start-btn-container").style.display = "none";
});
document.querySelector("body").addEventListener("keydown", movePlayer);

function movePlayer(key) {
    const previousLeft = playerContainer.getBoundingClientRect().left;
    const previousTop = playerContainer.getBoundingClientRect().top;

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
