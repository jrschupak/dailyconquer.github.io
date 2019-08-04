

window.addEventListener('load', (event) => {
	console.log('main.js is loaded and connected')
})


var enterBtn = document.getElementsByClassName("enter"); // Find the paragraph element in the page
  
  enterBtn.onclick = function() {
  	console.log('enter button on click works')
  }; // Add onclick function to element
    
  
window.onlaod() {
	console.log('window onload console.log works')
}