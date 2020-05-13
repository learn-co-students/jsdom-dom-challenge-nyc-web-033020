document.addEventListener('DOMContentLoaded', (event) => {


  const counter = document.getElementById('counter')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const pause = document.getElementById('pause')
  const heart = document.getElementById('heart')
  const comments = document.getElementById('list')
  const ul = document.getElementsByClassName('likes')[0]

  //  const resume = document.getElementBy

  const form = document.getElementById('comment-form')
  //  let num = parseInt( counter.innerHTML)

  let timer = setInterval(increase, 1000)

  function increment(n){
    counter.innerText = parseInt(counter.innerText) +1
  }
  // function increase(){
  //   counter.innerText = parseInt(counter.innerText) +1
  //   }

  plus.addEventListener('click', function(event){
    increment(1)
  })

  // function decrease(i){
  //   counter.innerHTMl = parseInt(counter.innerHTMl) - 1
  //   }

  minus.addEventListener('click', function(event){
    increment(-1)
  })

  pause.addEventListener('click', function(event){
    clearInterval(timer)
    if (pause.innerHTML = "pause"){
        pause.innerHTML = 'resume'
    }

    resume.addEventListener('click', function(event){
      if ( pause.innerHTML = 'resume'){
          pause.innerHTML = "pause"


          }



  })


     })







    document.addEventListener('submit', function(event){
         event.preventDefault()
         const li = document.createElement('li')
          li.innerHTML =  form.comment.value
          comments.appendChild(li)

     })


     heart.addEventListener('click', function(event){
     let  likeNum  = counter.innerHTML
     const li = document.createElement('li')
     li.innerHTML = likeNum
     ul.appendChild(li)
     })


 });

