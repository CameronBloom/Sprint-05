
const contentData = [
  { imageURL: "https://source.unsplash.com/random/200x200/", title: "First Image", description: "A Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
  { imageURL: "https://source.unsplash.com/random/200x200/", title: "Second Image", description: "B Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
  { imageURL: "https://source.unsplash.com/random/200x200/", title: "Third Image", description: "C Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
  { imageURL: "https://source.unsplash.com/random/200x200/", title: "Fourth Image", description: "D Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
]

const pageContainer = document.querySelector(".page-container");

function makeComponent({ imageURL, title, description}) {
  // const pageContainer = document.querySelector(".page-container");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  
  const imageElement = document.createElement("img");
  
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");
  
  const textHeading = document.createElement("h2")
  
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-wrapper")
  
  const textDescription = document.createElement("p");

  // pageContainer.appendChild(contentContainer);
  contentContainer.appendChild(imageContainer);
  contentContainer.appendChild(descriptionContainer);
  imageContainer.appendChild(imageElement);
  descriptionContainer.appendChild(textHeading);
  descriptionContainer.appendChild(textContainer);
  textContainer.appendChild(textDescription);

  imageElement.src = imageURL;
  textHeading.textContent = title;
  textDescription.textContent = description;
  
  return contentContainer;
}

const contentCards = contentData.map(imageInfo => {
  return makeComponent(imageInfo);
})

contentCards.forEach(card => {
  pageContainer.append(card);
})