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
        console.log('hello')
    }
})