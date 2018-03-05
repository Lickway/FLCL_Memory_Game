// console.log("Linked!");
let icons = [
  "images/FLCL_Cigarette.jpg",
  "images/FLCL_Silhouette.jpg",
  "images/FLCL_Angel.jpg",
  "images/FLCL_Annoyed.jpg",
  "images/FLCL_Baseball_Guitar.jpg",
  "images/FLCL_Horn.jpg",
  "images/FLCL_Moped.jpg",
  "images/FLCL_Kneeling.jpg",
  "images/FLCL_Baseball_Hit.jpg",
  "images/FLCL_Bat.jpg",
  "images/FLCL_Drink.jpg",
  "images/FLCL_Bed.jpg",
  "images/FLCL_Logo_Cat.jpg",
  "images/FLCL_Logo_Japanese.jpg",
  "images/FLCL_Mamimi.jpg",
  "images/FLCL_Piggyback.jpg",
  "images/FLCL_Popcicle.jpg",
  "images/FLCL_Portrait.jpg",
  "images/FLCL_Cigarette.jpg",
  "images/FLCL_Silhouette.jpg",
  "images/FLCL_Angel.jpg",
  "images/FLCL_Annoyed.jpg",
  "images/FLCL_Baseball_Guitar.jpg",
  "images/FLCL_Horn.jpg",
  "images/FLCL_Moped.jpg",
  "images/FLCL_Kneeling.jpg",
  "images/FLCL_Baseball_Hit.jpg",
  "images/FLCL_Bat.jpg",
  "images/FLCL_Drink.jpg",
  "images/FLCL_Bed.jpg",
  "images/FLCL_Logo_Cat.jpg",
  "images/FLCL_Logo_Japanese.jpg",
  "images/FLCL_Mamimi.jpg",
  "images/FLCL_Piggyback.jpg",
  "images/FLCL_Popcicle.jpg",
  "images/FLCL_Portrait.jpg"
];
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let createBoard = () => {
  icons = shuffle(icons);
  // debugger;
  for (let i = 0; i < icons.length; i++) {
    //create 2 image DOM nodes
    let $iconNode1 = $("<img>");
    //set src
    $iconNode1.attr("src", "images/FLCL_BACK.jpg");
    //set data src
    $iconNode1.attr("data-card-src", icons[i]);
    //class to tile
    $iconNode1.attr("class", "tile");
    let $iconNode2 = $("<img>");
    //selects DOM node for container
    let $container = $(".container");
    //adds icon nodes to the container
    $container.append($iconNode1, $iconNode2);
  }
};
createBoard();

//event listener for the board
//variable for 4 four cards
//add event Click
let imageA = null;
let imageB = null;
let imageElementA = null;
//use to count numer of matches to claim a win
var matches = 0;
let backImage = "images/FLCL_BACK.jpg";

let $container = $(".container");
document.querySelectorAll("img").forEach(element => {
  element.addEventListener("click", clickCard);
});
//reveal card face
function clickCard(evt) {
  // get access to DOM element clicked on
  let imageElement = evt.target;
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
      matches ++;
      console.log(matches);
      winState();
      //stay face up
    } else {
      //keeps incorrect icons visible for 1.5 seconds
      setTimeout(function() {
        imageElementA.setAttribute("src", backImage);
        imageElement.setAttribute("src", backImage);
        imageA = null;
        imageB = null;
        imageElementA = null;
      }, 500); //flips card over after .5seconds if not a match
    }
  }
}
//prompt that asks for user's name
let userName = prompt("Please enter your name", "");
//adds user name to page
if (userName != null) {
    document.getElementById('welcome').innerHTML =
    "Hello " + userName + "! Good Luck!";
}
//Timer that adds 1 every second.
let counter = 0;
window.setInterval(function() {
  document.getElementById('timer').innerHTML = counter ++;
}, 1000);
// potential win state alert
function winState() {
  if (matches === 18) {
    alert("Congratulations " + userName + "! You won at " + counter + " seconds!")
  }
};
