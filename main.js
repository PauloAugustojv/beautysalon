/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: HAMBURGUER E X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Declaração de função para mudar o header da página quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scrol é maior que a altura da header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menos que a altura do header
  }
}

// Declaração da Biblioteca de Transição com o Scroll do Mouse
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ScrolReveal: Mostrar elementos com transição quando der scroll na página

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
 `,
  { interval: 100 }
)

// Lógica do Botão  voltar para o top

const backToTopButton = document.querySelector('.back-to-top')

function backTopTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Quando Rolar o Scroll >>>> será realizados estas Funções
window.addEventListener('scroll', function () {
  backTopTop()
  changeHeaderWhenScroll()
  activaMenuAtCurrentSection()
})

/* Menu ativo conforme a seção visível na página*/
const sections = document.querySelectorAll('main section[id]')

function activaMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
