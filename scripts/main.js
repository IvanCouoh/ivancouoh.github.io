const toggleMenu = document.getElementById('toggle-menu');
const addClass = document.getElementById('list-menu');

toggleMenu.addEventListener("click", () => {
    addClass.classList.toggle("menu__action")
});

const getList = document.querySelectorAll('.list');
function removeMenu() {
    addClass.classList.toggle("menu__action")
}
getList.forEach(i => i.addEventListener('click', removeMenu))
// removeMenu.addEventListener('click', () => {
//     addClass.classList.remove("menu__action")
// });


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 85
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.list a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

window.addEventListener("scroll", () => {
    var icon_top = document.getElementById('go-top');
    icon_top.classList.toggle('sticky', window.scrollY > 150);
});

// gsap.from('.title-logo', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.title-logo, .toggle__menu', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 });
gsap.from('.link', { opacity: 0, duration: 2, delay: .8, y: 25, ease: 'expo.out', stagger: .2 });
gsap.from('#presentacion', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'power3.out' });
// gsap.from('#about, #abilities, #proyectos', { opacity: 0, duration: 2, delay: .8, y: 25, ease: 'power3.out' });

gsap.to('#about, #abilities, #projects', { duration: 2, delay: 1.8, dy: 25, ease: 'power3.out' })
