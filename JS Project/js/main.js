function logoMouseOver() {
    document.getElementById("logo").src ="Images/logoGold.png";
}

function logoMouseOut() {
    document.getElementById("logo").src ="Images/logoBlack.png";  
}

// function changeCelestite() {
//     document.getElementById("celestite1").src = "Images/celestite2.jpg";
// }
        
function changeCelestite() {
    if (celestite1.src.contains("celestite")) {
        Image.src = "Images/celestite.jpg";
    } else {
        Image.src = "Images/celestite2.jpg";
    }
}
