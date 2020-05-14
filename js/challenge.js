document.addEventListener('DOMContentLoaded', function(e){
    const buttonMinus = document.querySelector('#minus') 
    const buttonPlus = document.querySelector('#plus') 
    const buttonHeart = document.querySelector('#heart') 
    const buttonPause = document.querySelector('#pause') 
    let counter = document.querySelector('#counter') 

    let timer = setInterval(Time, 1000) 

    function Time(){
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
            timer = setInterval(Time, 1000)
            buttonPause.innerText = 'pause' 
        }
    })
    
    const LikesCount = {} 
    buttonHeart.addEventListener('click', function(e){
        
        const likeList = document.querySelector('.likes') 
        const counterNum = counter.innerHTML 
        const li = document.createElement('li') 

        if(!likesCount[counterNum]){
            likesCount[counterNum] = 1 
            li.textContent = '${counterNum} has been liked 1 time' 
            likesList.appendChild(li) 
            console.log(likesCount) 
        } else {
            likesCount[counterNum]++ 
            console.log(likesCount) 
            let oldLineItem = document.getElementsByClassName('${counterNum') 
            console.log(oldLineItem) 
            li.textContent = '${counterNum} has been liked ${likesCount[counterNum]} times' 
            likesList.appendChild(li) 
        }
    })
    let commenter = document.querySelector('#comment-input') 

    document.addEventListener('submit', function(e){
        e.preventDefault() 
        let input = commenter.value 
        const listOfComments = document.querySelector('#list') 
        let newComment = document.createElement('p') 
        newComment.innerHTML = input 
        console.log(newComment)  
        console.log(listOfComments)
        listOfComments.appendChild(newComment) 
        e.target.reset()
    })
}) 
