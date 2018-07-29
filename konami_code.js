const codes = [
  "ArrowUp",
  "ArrowUp",
//  "ArrowDown",
//  "ArrowDown",
//  "ArrowLeft",
//  "ArrowRight",
//  "ArrowLeft",
//  "ArrowRight",
//  "b",
//  "a"
];

function init() {
  // your code here
  const input = document.querySelector('input')
  input.addEventListener('keydown', function(e) {
    console.log('oui' + e.which);
    onKeyDownHandler(e)
  })
}
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
    console.log('touche correct detectee : ' + key);
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
    console.log('touche incorrect detectee : ' + key);

  }
}

init();
