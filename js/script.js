const title = document.getElementById('autotext')
const text = "Bonjour et Bienvenue !"

let index = 0;

const speed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

function play() {
    title.innerHTML = text.slice(0, index);

    index++;

    if (index >= text.length) {
        clearInterval(timer);
        setTimeout(() => {
            index = 0;
            timer = setInterval(play, speed(50, 300));
        }, 3000);
    } else {
        title.innerHTML = text.slice(0, index);
        index++;
    }
}

let timer = setInterval(play, 300)

/////////////////////////////////////////////////////////////

const navbarLinks = document.querySelectorAll("");

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    if (link.hash !== "") {
      event.preventDefault();

      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 45,
        behavior: "smooth"
      });

      const activeNavbarLink = document.querySelector('.navbar-nav .active');
      if (activeNavbarLink) {
        activeNavbarLink.classList.remove('active');
      }
      link.closest('a').classList.add('active');
    }
  });
});


//  window.addEventListener('scroll', () =>{
//     if (window.scrollY + window.innerHeight >=
//         document.documentElement.scrollHeight)
//         loadCarousel();
    
// })