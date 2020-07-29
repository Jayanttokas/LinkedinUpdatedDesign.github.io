const discoverMenu = (display) => {
    if (display === 1) {
        document.getElementById("discoverMenu").style.display="block"
        document.getElementById("2ndMenu").style.display = "none";
        document.getElementById("main-container").style.opacity = 0.2;
    } else {
        document.getElementById("discoverMenu").style.display="none"
        document.getElementById("2ndMenu").style.display = "block";
        document.getElementById("main-container").style.opacity = 1;
    } 

}