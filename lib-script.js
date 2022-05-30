function resizeLibWindow() {
    const scaleWidth = window.innerWidth / 1920
    const scaleHeight = window.innerHeight / 1080;
    const scale = Math.min(scaleHeight, scaleWidth)

    const cardLib = document.getElementById("card-lib");
    cardLib.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';
}

//window.onresize = resizeLibWindow;