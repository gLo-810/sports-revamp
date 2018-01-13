import $ from 'jquery';

class Display {
  // dom selection usually and firing events when a page loads.
  constructor(){
    const pGrid = document.getElementsByClassName('pic-grid-container');
        const baseball = document.getElementById('baseball');
        const football = document.getElementById('football');
        const display = document.getElementById('btn-display');
        const reset = document.getElementById('btn-reset');
    this.events();
  }

  //events to watch for such as click
  events(){
    display.addEventListener('click', function() {
      displayEls();
    });

    reset.addEventListener('click', function() {
      pGrid[0].innerHTML = "";
    });
  }

  // methods to be called from events

  //display images with names
  function displayEls() {
    // clear content to start fresh
     pGrid[0].innerHTML = "";
    names.forEach(function(name, i) {

        let picContainer = document.createElement('div'),
          newImg = document.createElement('img'),
          newName = document.createElement('p');
    // append the elements
      picContainer.className = "picture-frame";
      picContainer.appendChild(newImg);
      picContainer.appendChild(newName);
      newName.textContent = name;

      if (baseball.checked) {
                 newImg.src = "./assets/images/baseball/team" + numbers[i] + ".jpg";
               } else if (football.checked) {
                 newImg.src = "./assets/images/football/team" + numbers[i] + ".gif";
               }
      pGrid[0].appendChild(picContainer);
    });
  }

}

export default ClassName;
