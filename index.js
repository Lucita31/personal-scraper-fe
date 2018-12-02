var form = document.querySelector('form');
var button = document.querySelector('.submit-btn')
var spinner = document.querySelector('.spinner')
var inputField = document.querySelector('#input-field');
var image1 = document.querySelector('#image1');
var image2 = document.querySelector('#image2');
var image3 = document.querySelector('#image3');
var image4 = document.querySelector('#image4');
var image5 = document.querySelector('#image5');
var image6 = document.querySelector('#image6');
var image7 = document.querySelector('#image7');
var image8 = document.querySelector('#image8');
var image9 = document.querySelector('#image9');
var image10 = document.querySelector('#image10');

button.addEventListener("click", function(event) {
  event.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  button.value = "Heck yeah man..."

  fetch(`http://localhost:3000/dadjokes/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => button.value = "Get Dad Jokes")
    .then(() => clearInput())
    .catch(error => console.error("sorry, please try again."));
}

function clearInput() {
  inputField.value = "";
}

function updateImages(images) {
  image1.src = images[0];
  image2.src = images[1];
  image3.src = images[2];
  image4.src = images[3];
  image5.src = images[4];
  image6.src = images[5];
  image7.src = images[6];
  image8.src = images[7];
  image9.src = images[8];
  image10.src = images[9];
  image11.src = images[10];
}
