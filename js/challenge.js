document.addEventListener('DOMContentLoaded', function(e){
    const counter = document.getElementById('counter')
    const likesList = document.querySelector('ul')
    const commentsList = document.querySelector('#list')
    const likeCount = {}
  
    let intervalId = setInterval(function(){
      incrementCounter(1)
    }, 1000)
  
    document.addEventListener("click", function(e){
      if(e.target.id === "minus"){
        incrementCounter(-1)
      } else if(e.target.id === "plus"){
        incrementCounter(1)
      } else if(e.target.id === "heart"){
  
          const currentNum = counter.textContent
  
          if(likeCount[currentNum]){
            likeCount[currentNum]++
            let li = document.getElementById(currentNum)
            li.textContent = `${currentNum} has been liked ${likeCount[currentNum]} times 🚀`
          } else {
            likeCount[currentNum] = 1
            const li = document.createElement("li")
            li.id = currentNum
            li.textContent = `${currentNum} has been liked 1 time 🤡`
            likesList.append(li)
          }
      } else if(e.target.id === "pause"){
        clearInterval(intervalId)
  
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('submit').disabled = true
  
        e.target.textContent = 'resume'
        e.target.id = 'resume'
      } else if(e.target.id === 'resume'){
        intervalId = setInterval(function(){
          incrementCounter(1)
        }, 1000)   
  
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
        document.getElementById('submit').disabled = false
  
        e.target.textContent = 'pause'
        e.target.id = 'pause'
      }
    })
  
    document.addEventListener("submit", function(e){
      e.preventDefault()
      const form = e.target
      const comment = form.beef.value
      const p = document.createElement('p')
      p.textContent = comment
      
      form.reset()
      commentsList.append(p)
    })
  
    function incrementCounter(num){
      counter.textContent = parseInt(counter.textContent) + num
    }
  
  })