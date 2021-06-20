// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const m=document.getElementById('modal')
// Your JavaScript code goes here!
m.classList.add('hidden')
const get = document.querySelectorAll('.like-glyph')
for (var i = 0; i < get.length; i++) {
get[i].addEventListener('click',function(e){
  mimicServerCall()
  .then(()=> {if(this.innerHTML===EMPTY_HEART)
    return this.innerHTML=FULL_HEART, this.classList.add('activated-heart')
    else if(this.innerHTML===FULL_HEART)
    return this.innerHTML=EMPTY_HEART, this.classList.remove('activated-heart')
   
  
  })
  .catch(()=> m.classList.remove('hidden'),
  setTimeout(function(){m.classList.add('hidden')},3000)) 
})}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
