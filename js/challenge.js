document.addEventListener('DOMContentLoaded', function(e){
    const counter = document.querySelector('#counter')
    const like = document.querySelector('#heart')
    const likesList = document.querySelector('ul')
    const commentsList = document.querySelector('#list')
    const likeCount = {}


    let intervalId = setInterval(function(){
        incrementCounter(1)
    }, 1000)
    

    document.addEventListener('click', function(event){
        
        if (event.target.id === "plus"){
            incrementCounter(1)
        } else if (event.target.id === "minus"){
            incrementCounter(-1)
        } else if (event.target.id === "heart"){
            const currentNum = counter.textContent

            if(likeCount[currentNum]){
                likeCount[currentNum] ++ 
                let li = document.getElementById(currentNum)
                li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times.`
            } else {
                likeCount[currentNum] = 1
                const li = document.createElement('li')
                li.textContent = `${currentNum} has been liked 1 time.`
                li.id = currentNum
                likesList.append(li)
            }

        } else if (event.target.id === "pause"){
            clearInterval(intervalId)
            const minus = document.querySelector('#minus').disabled = true
            const plus = document.querySelector('#plus').disabled = true
            const heart = document.querySelector(`#heart`).disabled = true
            submitButton.disabled = true

            event.target.textContent = "resume"
            event.target.id = "resume"

        } else if (event.target.id === "resume"){
            intervalId = setInterval(function(){
                incrementCounter(1)
            }, 1000)
            const minus = document.querySelector('#minus').disabled = false
            const plus = document.querySelector('#plus').disabled = false
            const heart = document.querySelector(`#heart`).disabled = false
            submitButton.disabled = false

            event.target.textContent = "pause"
            event.target.id = "pause"
        }

    })

    function incrementCounter(num){
        counter.textContent = parseInt(counter.textContent) + num
    }

    document.addEventListener('submit',function(event){
        event.preventDefault()
        const form = event.target
        const comment = form.comment.value
        const p = document.createElement('p')
        p.textContent = comment
        form.reset()

        commentsList.appendChild(p)
    })
})