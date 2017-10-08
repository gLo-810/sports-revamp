let pGrid = document.getElementsByClassName('pic-grid-container'),
    textarea = document.querySelector('textarea'),
    baseball = document.getElementById('baseball'),
    football = document.getElementById('football'),
    display = document.getElementById('displayBTN'),
    names = [],
    numbers;


// save names without submitting
function saveNames() {
  names = textarea.value.split('\n');
  numbers = Array.from({length:names.length}).map((_,i)=>i); //creates a numbers array that is the same length as the names array, for indexing.
}
// save names to array, no submit button
textarea.addEventListener('blur', saveNames, false);

// shuffle arrays
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

//display images with names
function displayEls() {
  // clear content to start fresh
   pGrid[0].innerHTML = "";
  // create the elements
  let newRow = document.createElement("div");
  newRow.className = "row";
  pGrid[0].appendChild(newRow);
  names.forEach(function(name, i) {

      let picContainer = document.createElement('div'),
        newImg = document.createElement('img'),
        newName = document.createElement('p');
  // append the elements


    picContainer.className = "picture";
    picContainer.appendChild(newImg);
    picContainer.appendChild(newName);
    newName.textContent = name;
    newRow.appendChild(picContainer);

    if (baseball.checked) {
               newImg.src = "./assets/images/baseball/team" + numbers[i] + ".jpg";
             } else if (football.checked) {
               newImg.src = "./assets/images/football/team" + numbers[i] + ".gif";
             }
  });
}

display.addEventListener('click', function() {
  displayEls();
});

random.addEventListener('click', function() {
  shuffle(names);
  shuffle(numbers);
  displayEls();
});
