/* Use this sample as a quide */
let sampleButton = document.querySelector('.sampleButton');
sampleButton.addEventListener('click', (event) => {
  alert('You Clicked the Sample Button!')
})

/* NOTE: DO NOT change any HTML or CSS in this exercise, refer to the HTML for the class names of the elements */

/* Step One: Select the container and button elements */
const docContainer = document.querySelector(".container");
const docContainerButton = document.querySelector(".button");

/* Step Two: Use the method addEventListener on the button element, listening for a 'click' event */
/* Step Three: Using the 'event' object in the callback, Change the background color of the button */
/* Step Four: Click on the button, does it work? */
docContainerButton.addEventListener("click", (event) => { 
  event.target.style.color = "white";
  event.target.style.backgroundColor = "green";
  event.target.style.borderColor = "red";
  event.stopPropagation();
  // console.log(event.currentTarget.nodeName);
});



/* Step Five: Use the method addEventListener on the container element, listening for a 'mouseenter' event */
/* Step Six: Using the 'event' object in the callback, Change the background color and the border color of the container */
docContainer.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "gray";
  event.target.style.borderColor = "pink";
  // console.log(event.currentTarget.nodeName);
})

/* Step Seven: Reverse the color changes to the container on a 'mouseleave' event */
docContainer.addEventListener("mouseleave", (event) => {
  event.target.style = "";
  // console.log(event.currentTarget.nodeName);
})

/* Step Eight: Finish the section in TK on stopPropagation */
/* Step Nine: Create a click event on the container, it can do whatever you want it to, but make it visible */
/* Step Ten: Click the button, notice how the container click event also triggers? */
/* Step Eleven: Add stopPropagation to the button click handler */
/* Step Twelve: Click the button now, the click should not propagate to the conainer. */
docContainer.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "orange";
  event.target.style.borderColor = "black";
})

/* All Done! */
