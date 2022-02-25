// scroll
const scrollLinks = document.querySelectorAll(".js-scroll")

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// progress
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${100 * percentage}%`
})

// slides
const allSlides = document.querySelectorAll("div.slides")

allSlides.forEach((slideArea) => {
  const images = slideArea.querySelectorAll("img")
  let currentSlide = 0
  let z = 1

  slideArea.addEventListener("click", () => {
    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1) {
      currentSlide = 0
    }

    z = z + 1

    images.forEach(image => {
      image.style.animation = ""
    })

    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"
  })
})

// intro animation
const allSquares = document.querySelectorAll('.squares')

allSquares.forEach(square => {
  square.addEventListener('mouseover', event => {
    anime({
    	targets: square,
    	rotate: '1turn',
    	duration: 1000,
    	loop: false,
    	direction: 'alternate',
    	easing: 'easeInOutSine',
     	complete: () => { square.style.transform = "" }
    })
  })
})
