// animation
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
