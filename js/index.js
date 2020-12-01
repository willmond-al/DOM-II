// Your code goes here
const funWelcome = document.querySelector('.intro h2')
funWelcome.addEventListener('mouseover', function(event){
    event.target.style.color = "orange"
    event.target.style.fontSize = "50px"
    setTimeout(() => {
        event.target.style.color = ""
        event.target.style.fontSize = ""

    }, 1000);
})

