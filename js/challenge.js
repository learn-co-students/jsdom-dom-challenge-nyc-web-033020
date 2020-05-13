let counter = document.getElementById("counter")
let ul = document.getElementsByClassName("likes")[0]

window.setInterval(function () {
    counter.innerHTML++
}, 1000)

document.body.addEventListener("click", function (e) {
    if (e.target.id == "minus") {
        counter.innerHTML--
    } else if (e.target.id == "plus") {
        counter.innerHTML++
    } else if (e.target.id == "heart") {
        let likeElement = document.querySelector(`[title='${counter.innerHTML}']`)
        if(likeElement){
            likeElement.className++
            likeElement.innerHTML = `${likeElement.title} likes: ${likeElement.className}`
        }
        else {
            createLike(Number(counter.innerHTML))
        }
    }
})

function createLike(number) {
    let liElement = document.createElement("li")
    liElement.className = 1 
    liElement.innerHTML = `${number} likes: ${liElement.className}`
    liElement.title = number
    ul.appendChild(liElement)
}