componentEffects();

function componentEffects() {
  let scroll_reveal = ScrollReveal({
    origin: "top",
    distance: "65px",
    duration: 2000,
    delay: 450,
  });

  scroll_reveal.reveal('.hero-name-title',{origin:'bottom'})
  scroll_reveal.reveal('.nav-links',{origin:'bottom'})
  scroll_reveal.reveal('.btn',{origin:'bottom'})
  scroll_reveal.reveal('.nav-links',{origin:'bottom'})
  scroll_reveal.reveal('.social-media',{origin:'bottom'})

//   section class="hero-detail" Components
scroll_reveal.reveal('.hero-img')
scroll_reveal.reveal('.hero-name',{origin:'top'})

// Section About
scroll_reveal.reveal('.about-me',{origin:'bottom'})
scroll_reveal.reveal('.about-section-image',{origin:'bottom'})

// Service Section
scroll_reveal.reveal('.discover',{origin:'bottom'})
scroll_reveal.reveal('.heading',{origin:'bottom'})
scroll_reveal.reveal('.row',{origin:'bottom'})

// Contact Me
scroll_reveal.reveal('.contact-me',{origin:'bottom'})
}

// Toggle Menu JS
let menu_items = document.getElementById('menu-items')
menu_items.style.height = '0px'

function showMenu() {
    if(menu_items.style.height === '0px') {
        menu_items.style.height = '200px'
    }
    else {
       menu_items.style.height = '0px'
    }
}

