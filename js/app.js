console.log("Linked!");
//landing page with an FLCL banner

//sub header with "Memory Game"
//box for user to input their Initials that gets stored for the high score later
//"Ready" button to take the user to the game scoreboard

//A container div to hold the 6x6 grid
//6x6 grid to hold the Icons
//A start button that reveals all images of the 6x6 for 5 seconds, then starts the timer.
//A reset button that will take the user back to the landing page and shuffles the Icons
//Timer that starts from 00:00:00 and incrememnts by miliseconds until all icons have been matched
//Score board that keeps track of times appended to user's initials
//Alert after all icons have been matched "COngratulations, [user initials]! Your score is [timer]"

//event listener for the board
//variable for 4 four cards

//add event Click
let $container = $(".container");
//reveal card face
function clickCard(evt) {
  // get access to DOM element clicked on
  let image = evt.target;
  console.log(image);
  //extract face of card from the element
  let faceImageSRC = image.getAttribute("data-card-src");
  image.setAttribute("src", faceImageSRC);
  console.log(image);
  //if the images clicked on
  // if (imageA === imageB) {
  //   console.log("A Match");
  //   // stay face up
  // } else {
  //   console.log("not a match");
  //   // flip back to back image
  // }
}
$container.click(clickCard);

// Change two of the cards to different cards
// Check if the two cards that have been clicked on are the same card

// If the two cards aren't the same, flip them back over
