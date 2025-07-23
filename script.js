document.addEventListener("DOMContentLoaded", () => {
    // Function to create and observe intersection observers
    function createObserver(selector, observerOptions, toggleClass) {
        const items = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(toggleClass);
                } else {
                    entry.target.classList.remove(toggleClass);
                }
            });
        }, observerOptions);

        items.forEach((item) => {
            observer.observe(item);
        });
    }

    // Create observers for diffrent sections
    createObserver("#about .phrase", { root: null, threshold: 1 }, "active");
    createObserver(
        "#gallery .image-box",
        { root: null, threshold: 1 },
        "active"
    );
    createObserver(
        "#blog .featured-article, #blog .article",
        { root: null, threshold: 0.3 },
        "fadeInUp"
    );
    createObserver(
        "#contact > div",
        { root: null, threshold: 0.5 },
        "fadeInUp"
    );
});

// Navigation
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");
const listItems = document.querySelectorAll("#nav ul li a");

function toggleMenu() {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("active");
    listItems.forEach((item) => {
        item.classList.toggle("active");
    });
}

function hideMenu() {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
    listItems.forEach((item) => {
        item.classList.remove("active");
    });
}

// Form Submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                form.reset();
                const toast = document.getElementById("toast");
                toast.classList.add("show");
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 5000);
            } else {
                // Handle errors here
                alert(
                    "There was a problem with your submission. Please try again."
                );
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(
                "There was a problem with your submission. Please try again."
            );
        });
});
