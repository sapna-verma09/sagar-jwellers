/* =================================
   SAGAR JEWELLERS - 3D JAVASCRIPT
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       1. LOADING SCREEN
    =============================== */

    const loader = document.createElement("div");

    loader.className = "loader";

    loader.innerHTML = `
        <div class="loader-logo">
            SJ
        </div>

        <h2>SAGAR JEWELLERS</h2>

        <div class="loader-line">
            <span></span>
        </div>

        <p>Loading Luxury...</p>
    `;

    document.body.prepend(loader);


    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 1200);

    });


    /* ===============================
       2. NAVBAR SCROLL EFFECT
    =============================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    });


    /* ===============================
       3. 3D HERO IMAGE
    =============================== */

    const heroCard =
        document.querySelector(".hero-card");

    if (heroCard) {

        heroCard.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroCard.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -8;

                const rotateY =
                    ((x - centerX) / centerX) * 8;

                heroCard.style.transform =
                    `
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(10px)
                    `;

            }
        );


        heroCard.addEventListener(
            "mouseleave",
            () => {

                heroCard.style.transform =
                    `
                    rotateX(0deg)
                    rotateY(0deg)
                    translateZ(0)
                    `;

            }
        );

    }


    /* ===============================
       4. 3D JEWELLERY CARDS
    =============================== */

    const cards =
        document.querySelectorAll(
            ".jewellery-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                        centerY) * -7;

                const rotateY =
                    ((x - centerX) /
                        centerX) * 7;

                card.style.transform =
                    `
                    translateY(-10px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    translateY(0)
                    rotateX(0)
                    rotateY(0)
                    `;

            }
        );

    });


    /* ===============================
       5. GOLD PARTICLES
    =============================== */

    const particleContainer =
        document.createElement("div");

    particleContainer.className =
        "particle-container";

    document.body.appendChild(
        particleContainer
    );


    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "gold-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 6 + "s";

        particle.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        particle.style.width =
            (2 + Math.random() * 4) + "px";

        particle.style.height =
            particle.style.width;

        particleContainer.appendChild(
            particle
        );

    }


    /* ===============================
       6. FLOATING EFFECT
    =============================== */

    const floatingElements =
        document.querySelectorAll(
            ".jewel-icon"
        );


    window.addEventListener(
        "mousemove",
        (event) => {

            const mouseX =
                (event.clientX /
                    window.innerWidth) - 0.5;

            const mouseY =
                (event.clientY /
                    window.innerHeight) - 0.5;


            floatingElements.forEach(
                (element, index) => {

                    const speed =
                        (index + 1) * 3;

                    element.style.transform =
                        `
                        translate(
                            ${mouseX * speed}px,
                            ${mouseY * speed}px
                        )
                        `;

                }
            );

        }
    );


    /* ===============================
       7. SCROLL REVEAL
    =============================== */

    const revealElements =
        document.querySelectorAll(
            ".section-title, " +
            ".jewellery-card, " +
            ".about-image, " +
            ".about-content, " +
            ".contact-item"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList
                                .add("reveal-show");

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal-element"
            );

            observer.observe(element);

        }
    );


    /* ===============================
       8. SMOOTH MENU
    =============================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

});
// ================= 3D CARD EFFECT =================

const cards = document.querySelectorAll(
    ".collection-card, .gallery-item, .contact-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});