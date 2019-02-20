
// I use this file as a documntation of my train of thought during making slides.js



//pick all images and layer them on the z-index

const slideArea = document.querySelector('div.slides')
const images = slideArea.querySelectorAll('img')

//keep track of 2 things
let currentSlide = 0;
//zero is just the first slide when counting images
let z = 1;
//z is zindex
//the frist image already has a z-index of 1 based on our css

//when i click the slide area. change the slide based on z-index
slideArea.addEventListener("click", () => {

  currentSlide = currentSlide + 1

  // if we run out of sildes we wanna go back to the start
  // if the current slide number is bigger than the images' length -1
  //we go back to the start
  if (currentSlide > images.length - 1) {
    currentSlide = 1
  }

  z = z + 1
  // every time I click,
  //the first time z is going to be 0 and 1
  //the second time is going to be 1 and 2 then 3 and 4 etc

  // Q: How do I get the right slide I am talking about?
  //we want to pick from here a list of images - or a list of objects

  //pick all the images
  //use square brackets because it is a list and we want to pick the currentSlide
  images[currentSlide].style.zIndex = z
  // then change the style of z for every click

  //remove the animation from the style for EVERY image

  images.forEach(singleImage => {
    //now I have access to each image one by one
    //empty strings represents "none"
    singleImage.style.animation = ""
  })
  //apply fade animation back with the same logic as z
  images[currentSlide].style.animation = "fade 0.5s"

})

//mouseover
//when I put my mouse over the images
//put all images in a random place

slideArea.addEventListener('mouseover', () => {

  images.forEach(image => {

    const x = 25 * (Math.floor(Math.random() * 5)) - 50
    const y = 25 * (Math.floor(Math.random() * 5)) - 50

    //changed it so it stays within a grid
    // const x = 100 * Math.random() - 50
    // const y = 100 * Math.random() - 50

    image.style.transform = `translate(${x}px,${y}px)`
  })
})

slideArea.addEventListener('mouseout', () => {
  images.forEach(image => {
    image.style.transform = ""
  })
})

// make it randomy snap to a grid





//For the first time round,
//the animation for fade in applies
//but once we cycle through for the second time,
//the animation has already been applied so it doesn’t re-run,
//so what we’re doing is setting them all to have no animation
//(so anything that had animation can re-add it),
//then setting just the front one to have the animation
//so it’s just that one that fades it in.

//Basically we want to cycle around
//and remove any unused animations
//so we can just have it for the one that’s at the front!
