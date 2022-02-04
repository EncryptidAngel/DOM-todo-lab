console.log('sanity check') 


// In your JavaScript file, create cached element references for each element you created above with an id. You should have three cached element references in total, one for the input element, one for the button element, and one for the ul element

// btn.addEventListener('click', function(evt){
//     const listings = document.createElement('li')
//     const 

// })

const btn = document.querySelector('button')


btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  // get the text from the input field
  const inp = document.querySelector('input')
  // and assign it to textContent of newLi
  newLi.textContent = inp.value
  if (inp.value !== "") {
    // attach the newLi to the <ul>
    document.querySelector('ul').appendChild(newLi)
    inp.value = ""
  }
})

document.querySelector('ul').addEventListener('click', handleClick)

function handleClick(evt) {
  // identify the target
  console.log(evt.target)
  const liToAdjust = evt.target
  liToAdjust.style.color = 'orange' 

  // adjust font color
}
function init(){
form.addEventListener("reset", init)
const resetBtn = document.querySelector('#reset-button')
resetBtn.setAttribute(true)
$('#reset-button').trigger("reset");

}

