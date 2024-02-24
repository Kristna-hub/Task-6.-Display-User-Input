
const inputField = document.getElementById('inputFiel');
const displayButton = document.getElementById('displayButton');
const displayParagraph = document.getElementById('displayParagraph');


displayButton.addEventListener('click', function() {

  const inputValue = inputField.value;

 
  displayParagraph.textContent = inputValue;
});
