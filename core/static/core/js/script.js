// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (document.querySelector(`header nav a[href*="${id}"]`)) {
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
                }
            });

            // Active sections for animation on scroll
            sec.classList.add('show-animate');

            // Restart animation for home section
            if (id === 'home') {
                const textAnimate = document.querySelector('.home-content .text-animate h3');
                textAnimate.classList.remove('home-animate');

                // Trigger reflow for h3 animation reset
                void textAnimate.offsetWidth;

                // Reapply the animation for both h3 and its ::before element
                textAnimate.classList.add('home-animate');
            }
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when a navbar link is clicked (on scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    // Animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.body.offsetHeight - 1);
};

// Alret for send message 
function send(){
    a="Your email succesfully sent to hamas jan"
    alert(a)a
    
}
