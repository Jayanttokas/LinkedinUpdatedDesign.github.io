const discoverMenu = (display) => {
    if (display === 1) {
        document.getElementById("discoverMenu").style.display="block"
        document.getElementById("discoverMenu").classList.add("fadeIn");
        document.getElementById("main-container").style.opacity = 0.2;
    } else {
        document.getElementById("discoverMenu").classList.remove("fadeIn");
        document.getElementById("discoverMenu").style.display="none"     
        document.getElementById("main-container").style.opacity = 1;

    } 

}

const search = (searchShow) => {
    if (searchShow === 1) {
        document.getElementById("searchContainer").style.display="block";
        document.getElementById("searchContainer").classList.add("fadeIn");
        document.getElementById("main-container").style.opacity = 0.2;
    } else if (searchShow === 0) {
        document.getElementById("searchContainer").style.display="none";
        document.getElementById("searchContainer").classList.remove("fadeIn");
        document.getElementById("main-container").style.opacity = 1;
    }
    
    
}

const messageBox = () => {
    
    if ( document.getElementById("messages").style.display === "none" ) {
        document.getElementById("messages").style.display = "block";
        document.getElementById("messages").classList.add("fadeIn");
       
    } else {
        document.getElementById("messages").style.display = "none";
        document.getElementById("messages").classList.remove("fadeIn");

    }  

}

const like = (e) => {
    
}