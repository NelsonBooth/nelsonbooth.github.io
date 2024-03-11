/*---JavaScript for toggle menu---*/
function showMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function(){

});

/*---JavaScript for Smooth Scrolling---*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});