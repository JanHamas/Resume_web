window.addEventListener('pageshow', () => {
    const textAnimate = document.querySelector('.text-animate h3::before');
    textAnimate.style.animation = 'none';  // Remove animation
    setTimeout(() => {
      textAnimate.style.animation = '';   // Reapply animation
    }, 10);
  });
  

// toggle icon navbar


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll sections
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
    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.body.offsetHeight - 1);
};
