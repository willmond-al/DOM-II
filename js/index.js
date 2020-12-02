// Your code goes here
const titles = document.querySelector('h2')
titles.addEventListener('mouseover', function(event){
    event.target.style.color = "orange"
    event.target.style.fontSize = "50px"
    setTimeout(() => {
        event.target.style.color = ""
        event.target.style.fontSize = ""

    }, 800);
})

const mainImage1 = document.querySelector('.img-content img')
mainImage1.addEventListener('click', function(event){
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg'
    // setTimeout(() => {
    //     event.target.src = "img/adventure.jpg"
    // }, 1500);
})

const mainImage2 = document.querySelector('.inverse-content img')
mainImage2.addEventListener('click', function(event){
    event.target.src = 'https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg'
})

document.addEventListener('keydown', function(event){
    if(event.key === 'b'){
        event.target.style.backgroundColor = "blue"
    } else if (event.key === 'r') {
        event.target.style.backgroundColor = "red"
    } else {
        event.target.style.backgroundColor = ""
    }
})

const logoHeading = document.querySelector('h1')

window.addEventListener('load', function(event){
    logoHeading.textContent = "WELCOME TO..."
    setTimeout(() => {
        logoHeading.textContent = "Fun Bus"
    }, 1500);
})

const topImage = document.querySelector('.intro img')

topImage.addEventListener('dblclick', function(event){
    event.target.src = 'https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42696_WP.jpg'
    // setTimeout(() => {
    //  event.target.src = 'img/fun-bus.jpg'   
    // }, 1000);
})


