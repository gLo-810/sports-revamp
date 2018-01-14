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

  buttons (){
    this.display.click(this.displayEls.bind(this));

    this.reset.click( () => {
       this.pGrid.html("");
    });
  }

  //display images with names
    displayEls() {
    // clear content to start fresh
    let that = this;
    this.pGrid.html("");
    this.names.forEach(function(name, i) {

    let $picContainer = $('<div class="picture-frame"></div>');
    let  $newImg = $('<img>');
    let  $newName = $('<p>');

    // append to DOM
      $newImg.appendTo($picContainer);
      $newName.text(name);
      $newName.appendTo($picContainer);

      if (baseball.checked) {
           $newImg.attr('src', "./assets/images/baseball/team" + that.numbers[i] + ".jpg");
         } else if (football.checked) {
           $newImg.attr('src', "./assets/images/football/team" + that.numbers[i] + ".gif");
       }
      that.pGrid.append($picContainer);
    });
  }
}

export default Display;
