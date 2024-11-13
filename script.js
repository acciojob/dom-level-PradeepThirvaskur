//your JS code here. If required.
  let levelElement = document.querySelector("#level");
let counter = 0;

while (levelElement.parentElement) {
  levelElement = levelElement.parentElement;
  counter++; 
}

alert(`The level of the element is: ${counter}`);