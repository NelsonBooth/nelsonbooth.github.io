/*---JavaScript for toggle menu---*/
    var navLinks = document.getElementById("navLinks")
    function showMenu(){
        navLinks.style.right = "0"
    };
    function hideMenu(){
        navLinks.style.right = "-200px"
    };

/*---JavaScript for Smooth Scrolling---*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});