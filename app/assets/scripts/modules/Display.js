import $ from 'jquery';
import SaveInput from './SaveInput';

class Display extends SaveInput {
  // dom selection usually and firing events when a page loads.
  constructor(names, numbers){
    super(names, numbers);

    this.pGrid = $('.pic-grid-container');
    this.baseball = $('#baseball');
    this.football = $('#football');
    this.display = $('#btn-display');
    this.reset = $('#btn-reset');
    this.buttons();
  }


  //events to watch for such as click
    buttons (){

    this.display.click(this.displayEls.bind(this));


    // reset.addEventListener('click', function() {
    //   pGrid[0].innerHTML = "";
    // });
  }

  // methods to be called from events

  //display images with names


    displayEls() {
    // clear content to start fresh
    let that = this;
    this.pGrid.html("");
    this.names.forEach(function(name, i) {

        let picContainer = document.createElement('div'),
          newImg = document.createElement('img'),
          newName = document.createElement('p');
    // append the elements
      picContainer.className = "picture-frame";
      picContainer.appendChild(newImg);
      picContainer.appendChild(newName);
      newName.textContent = name;

      if (baseball.checked) {
                 newImg.src = "./assets/images/baseball/team" + that.numbers[i] + ".jpg";
               } else if (football.checked) {
                 newImg.src = "./assets/images/football/team" + that.numbers[i] + ".gif";
               }
      that.pGrid.append(picContainer);
    });
  }
}

export default Display;
