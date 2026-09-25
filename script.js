/* =========================================
   SMOOTH NAVIGATION
========================================= */

document
    .querySelectorAll('.nav-links a, .logo')
    .forEach(link => {

        link.addEventListener('click', function (event) {

            const href =
                this.getAttribute('href');

            if (!href || !href.startsWith('#')) {
                return;
            }

            const target =
                document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });

    });



/* =========================================
   PROJECT LINK LOG
========================================= */

document
    .querySelectorAll('.project-header a')
    .forEach(link => {

        link.addEventListener('click', function () {

            console.log(
                'Opening:',
                this.href
            );

        });

    });



/* =========================================
   HIDE NAVBAR ON SCROLL DOWN
   SHOW NAVBAR ON SCROLL UP
========================================= */

let lastScroll = 0;

const navbar =
    document.querySelector('.navbar');


window.addEventListener(
    'scroll',
    () => {

        if (!navbar) {
            return;
        }

        const currentScroll =
            window.scrollY;


        /* At the very top */

        if (currentScroll <= 20) {

            navbar.style.transform =
                'translateY(0)';

            lastScroll =
                currentScroll;

            return;
        }


        /* Scrolling down */

        if (
            currentScroll > lastScroll &&
            currentScroll > 100
        ) {

            navbar.style.transform =
                'translateY(-100%)';

        }


        /* Scrolling up */

        else {

            navbar.style.transform =
                'translateY(0)';

        }


        lastScroll =
            currentScroll;

    },
    {
        passive: true
    }
);