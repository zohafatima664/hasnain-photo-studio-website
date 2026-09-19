
    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.getElementById("menuButton");
        const navLinks = document.getElementById("navLinks");

        if (menuButton && navLinks) {
            // Hamburger button click event
            menuButton.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                navLinks.classList.toggle("active");
            });

            // Close menu when any nav link is clicked
            const links = navLinks.querySelectorAll("a");
            links.forEach(function (link) {
                link.addEventListener("click", function () {
                    navLinks.classList.remove("active");
                });
            });

            // Close menu when clicking outside
            document.addEventListener("click", function (event) {
                const isClickInsideMenu = navLinks.contains(event.target);
                const isClickOnButton = menuButton.contains(event.target);

                if (!isClickInsideMenu && !isClickOnButton) {
                    navLinks.classList.remove("active");
                }
            });
        } else {
            console.warn("menuButton ya navLinks ID HTML mein nahi mili.");
        }
    });
