export function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal')

  function reveal() {
    const windowHeight = window.innerHeight
    const elementVisible = 150

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top
      if (top < windowHeight - elementVisible) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
  }

  window.addEventListener('scroll', reveal)
  window.addEventListener('load', reveal)
}
