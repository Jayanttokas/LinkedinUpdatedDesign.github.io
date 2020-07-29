const discoverMenu = (display) => {
    if (display === 1) {
        document.getElementById("discoverMenu").style.display="block"
        document.getElementById("main-container").style.opacity = 0.2;
    } else {
        document.getElementById("discoverMenu").style.display="none"     
        document.getElementById("main-container").style.opacity = 1;
    } 

}

const search = (searchShow) => {
    if (searchShow === 1) {
        document.getElementById("searchContainer").style.display="block";
    } else if (searchShow === 0) {
        document.getElementById("searchContainer").style.display="none";
    }
    
    
}