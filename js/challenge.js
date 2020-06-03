document.addEventListener('DOMContentLoaded', function(e){
    const minusButton = document.querySelector('#minus') 
    const plusButton = document.querySelector('#plus') 
    const heartButton = document.querySelector('#heart') 
    const pauseButton = document.querySelector('#pause') 
    let counter = document.querySelector('#counter') 

    let timer = setInterval(Time, 1000) 

    function Time() {
        let number = parseInt(counter.innerText) + 1 
        counter.innerText = number 
    }

    minusButton.addEventListener("click", function(e){
        counter.innerText = parseInt(counter.innerText) - 1 
    }) 

    plusButton.addEventListener("click", function(e){
        counter.innerText = parseInt(counter.innerText) + 1 
    }) 

    pauseButton.addEventListener('click', function(e){
        if (pauseButton.innerText === 'pause') {
            clearInterval(timer) 
            pauseButton.innerText = 'resume' 
        } else {
            timer = setInterval(Time, 1000) 
            pauseButton.innerText = 'pause' 
        }
    }) 

    const likesCount = {} 
    heartButton.addEventListener('click', function(e){
        const likesList = document.querySelector('.likes') 
        const numCounter = counter.innerHTML 
        const li = document.createElement('li') 

        if(!likesCount[numCounter]) {
            likesCount[numCounter] = 1 
            li.textContent = `${numCounter} has been liked 1 time` 
            likesList.appendChild(li) 
            console.log(likesCount) 
        } else {
            likesCount[numCounter]++ 
            console.log(likesCount) 
            let oldLineItem = document.getElementsByClassName(`${numCounter}`) 
            console.log(oldLineItem) 
            li.textContent = `${numCounter} has been liked ${likesCount[numCounter]} times` 
            likesList.appendChild(li) 
        }
    }) 
    let commenter = document.querySelector('#comment-input') 
    
    document.addEventListener('submit', function(e){
        e.preventDefault() 
        let input = commenter.value 
        const listOfComments = document.querySelector('#list') 
        let newComment = document.createElement('p') 
        console.log(newComment) 
        console.log(listOfComments) 
        listOfComments.appendChild(newComment) 
        e.target.reset() 
    })
})