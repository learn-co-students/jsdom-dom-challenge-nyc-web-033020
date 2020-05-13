let counter = document.getElementById("counter")
let ul = document.getElementsByClassName("likes")[0]
let pauseButton = document.getElementById("pause")

let intervalID = window.setInterval(function () {
    counter.innerHTML++
}, 1000)


document.body.addEventListener("click", function (e) {
    if (e.target.id == "minus" && pauseButton.id == "pause") {
        counter.innerHTML--
    } else if (e.target.id == "plus" && pauseButton.id == "pause") {
        counter.innerHTML++
    } else if (e.target.id == "heart" && pauseButton.id == "pause") {
        let likeElement = document.querySelector(`[title='${counter.innerHTML}']`)
        if(likeElement){
            likeElement.className++
            likeElement.innerHTML = `${likeElement.title} likes: ${likeElement.className}`
        }
        else {
            createLike(Number(counter.innerHTML))
        }
    } else if (e.target.id == 'pause') {
        pauseButton.id = "resume"
        pauseButton.innerHTML = " resume "
        window.clearInterval(intervalID)
    } else if (e.target.id == "resume") {
        intervalID = window.setInterval(function () {
          counter.innerHTML++
        }, 1000) 
        pauseButton.id = "pause"
        pauseButton.innerHTML = " pause "
    }
})

document.body.addEventListener("submit", function(e) {
    e.preventDefault()
    let userComment = document.createElement("p")
    userComment.innerHTML = e.target[0].value
    comments.appendChild(userComment)
})

function createLike(number) {
    let liElement = document.createElement("li")
    liElement.className = 1 
    liElement.title = number
    liElement.innerHTML = `${number} likes: ${liElement.className}`
    ul.appendChild(liElement)
}

let comments = document.querySelector(".comments")
