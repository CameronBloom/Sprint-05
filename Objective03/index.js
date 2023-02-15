// Follow the instructions provided in training kit and then follow along here.

const secondHeading = document.querySelector('.second-heading');
secondHeading.textContent = "Updated Content";

const mainHeader = document.querySelector(".main-header").style.color = "green";
console.log(mainHeader);

const customImg = document.querySelector('.custom-img');
customImg.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';

const someClass = document.querySelectorAll("p");
someClass.forEach(elem => {
  elem.style.color = "white"
  elem.style.backgroundColor = "pink"
  elem.style.border = "1px solid black";
  elem.style.padding = "4px";
  elem.style.textAlign = "center";

});

const firstLink = document.querySelector("a");
firstLink.innerText = "Switch!"

const myNav = document.querySelector("nav");
myNav.classList.add("flex-row")

const allLinks = document.querySelectorAll("a");
allLinks.forEach(link => link.href="https://www.google.com");