const toggleMenu = document.querySelector('a.toggle-nav')
const mainTag = document.querySelector('main')

toggleMenu.addEventListener('click', () => {
  mainTag.classList.toggle('open')

  if (mainTag.classList.contains('open')) {
    toggleMenu.innerHTML = `<img src="assets/close.svg">Close`
  } else {
    toggleMenu.innerHTML = `<img src="assets/menu.svg"> Menu`
  }
})
