function resizeWindow() {
    const scaleWidth = window.innerWidth / 1920
    const scaleHeight = window.innerHeight / 1080;
    const scale = Math.min(scaleHeight, scaleWidth)

    const gameCanvas = document.getElementById("game-canvas");
    gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';

    const cardsArea = document.getElementById("cards-area");
    let paddingLeft = 270 - 60 - 30; // minus the amount the player 1 has right padding so the cards padding border is in center
    if (scaleWidth > scaleHeight) {
        paddingLeft = 0.5 * (window.innerWidth - scaleHeight * (1920 - paddingLeft * 2)) / scaleHeight;
    }
    cardsArea.style.paddingLeft = paddingLeft + 'px';
}