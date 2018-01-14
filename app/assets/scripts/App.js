import SaveInput from './modules/SaveInput';
import Display from './modules/Display';

const saveInput = new SaveInput();
const display = new Display ();



// const pGrid = document.getElementsByClassName('pic-grid-container');
//     const baseball = document.getElementById('baseball');
//     const football = document.getElementById('football');
//     const display = document.getElementById('btn-display');
//     const reset = document.getElementById('btn-reset');

// shuffle arrays
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

// //display images with names
// function displayEls() {
//   // clear content to start fresh
//    pGrid[0].innerHTML = "";
//   names.forEach(function(name, i) {
//
//       let picContainer = document.createElement('div'),
//         newImg = document.createElement('img'),
//         newName = document.createElement('p');
//   // append the elements
//     picContainer.className = "picture-frame";
//     picContainer.appendChild(newImg);
//     picContainer.appendChild(newName);
//     newName.textContent = name;
//
//     if (baseball.checked) {
//                newImg.src = "./assets/images/baseball/team" + numbers[i] + ".jpg";
//              } else if (football.checked) {
//                newImg.src = "./assets/images/football/team" + numbers[i] + ".gif";
//              }
//     pGrid[0].appendChild(picContainer);
//   });
// }

// display.addEventListener('click', function() {
//   displayEls();
// });

random.addEventListener('click', function() {
  shuffle(names);
  shuffle(numbers);
  displayEls();
});

// reset.addEventListener('click', function() {
//   pGrid[0].innerHTML = "";
// });
