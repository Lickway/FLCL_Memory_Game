console.log("Linked!");
//Potential timer from https://albert-gonzalez.github.io/easytimer.js/
// var timer = new Timer();
// timer.start({ precision: "secondTenths" });
// timer.addEventListener("secondsUpdated", function(e) {
//   $("#secondTenthsExample .values").html(
//     timer
//       .callbackTimer()
//       .toString(["hours", "minutes", "seconds", "secondTenths"])
//   );
// });

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
let imageA = null;
let imageB = null;
let imageElementA = null;
let backImage = "../images/FLCL_BACK.jpg";

let $container = $(".container");
// $("img").on("click", clickCard);
document.querySelectorAll("img").forEach(element => {
  element.addEventListener("click", clickCard);
});
//reveal card face
function clickCard(evt) {
  // get access to DOM element clicked on
  let imageElement = evt.target;
  // console.log(evt.target);
  // console.log("now: ", imageElement);
  // console.log("prev: ", imageElementA);
  //extract face of card from the element
  let faceImageSRC = imageElement.getAttribute("data-card-src");
  imageElement.setAttribute("src", faceImageSRC);
  //if the images clicked on
  if (imageA === null) {
    //changes src of first image clicked
    imageA = faceImageSRC;
    // store DOM element for first card clicked
    imageElementA = imageElement;
  } else {
    imageB = faceImageSRC;
    if (imageA === imageB) {
      imageElement.removeEventListener("click", clickCard);
      imageElementA.removeEventListener("click", clickCard);
      imageA = null;
      imageB = null;
      imageElementA = null;
      //stay face up
    } else {
      //keeps incorrect icons visible for 1.5 seconds

      setTimeout(function() {
        imageElementA.setAttribute("src", backImage);
        imageElement.setAttribute("src", backImage);
        imageA = null;
        imageB = null;
        imageElementA = null;
      }, 500);
      //revert to back image
    }
    // flip back to back image
  }
}
// $container.click(clickCard);

// Change two of the cards to different cards
// Check if the two cards that have been clicked on are the same card

// If the two cards aren't the same, flip them back over
