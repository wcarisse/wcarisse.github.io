//function toggleNavMenu() {
//	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
//}

function toggleNavMenu() {
    var x = document.getElementById("mynav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
} 