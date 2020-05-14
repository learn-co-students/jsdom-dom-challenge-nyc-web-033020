document.addEventListener("DOMContentLoaded", () => {
const buttonMinus = document.querySelector('#minus')
const buttonPlus = document.querySelector('#plus')
const buttonHeart = document.querySelector('#heart')
const buttonPause = document.querySelector('#pause')
let counter = document.querySelector('#counter')

let timer = setInterval(incTime, 1000)

function incTime(){
    let number = parseInt(counter.innerText) + 1
    counter.innerText = number 
}

buttonMinus.addEventListener("click", function(e){
    counter.innerText = parseInt(counter.innerText) - 1
})

buttonPlus.addEventListener("click", function(e){
    counter.innerText = parseInt(counter.innerText) + 1 
})

buttonPause.addEventListener('click', function(e){
    if (buttonPause.innerText === 'pause'){
       clearInterval(timer)
       buttonPause.innerText = 'resume'
    } else {
        timer = setInterval(incTime, 1000)
        buttonPause.innerText = 'pause'
    }
})

const likesCount = { }

buttonHeart.addEventListener('click', function(e){
    const likesList = document.querySelector('.likes')
    const counterNum = counter.innerHTML
    const li = document.createElement('li')

    if (!likesCount[counterNum]) {
        likesCount[counterNum] = 1 
        //  li.classList.add(`${counterNum}`)
         li.textContent = `${counterNum} has been liked 1 time`
         likesList.appendChild(li)
         console.log(likesCount)
        //   likes.innerText = `${clickedCounter} likes for ${counterNum}`
        //   likesList.appendChild(likes)
    } else {
        likesCount[counterNum] ++
        console.log(likesCount)
         let oldLineItem = document.getElementsByClassName(`${counterNum}`)
         console.log(oldLineItem)
         li.textContent = `${counterNum} has been liked ${likesCount[counterNum]} times`
        likesList.appendChild(li)
    }
})


let commenter = document.querySelector('#comment-input')

document.addEventListener('submit', function(e){
    e.preventDefault()
   let input = commenter.value
   const listOfComs = document.querySelector('#list')
   let newCom = document.createElement('p')
   newCom.innerHTML = input 
   console.log(newCom)
   console.log(listOfComs)
   listOfComs.appendChild(newCom)
   e.target.reset()

})

})