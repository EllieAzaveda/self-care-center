var affirmButton = document.getElementById("affirmation");
var mantraButton = document.getElementById("mantra");
var receiveMsgButton = document.querySelector("button");
var meditateLogo = document.querySelector("svg");
var returnMsgBox = document.querySelector(".logo-box");
var radioButtons = document.querySelectorAll(".radio-button");
var msgPlaceholder = document.querySelector("p");
var mainPage = document.querySelector(".main");
//Error Handling & Clear Buttons
var clearButton = document.querySelector(".clear-button");
//All Message Interface
var showAllMsgButton = document.querySelector(".show-all-messages-bttn");
var allAffirmations = document.querySelector(".all-affirmations");
var affirmationsList = document.querySelector(".affirmations-list");
var allMantras = document.querySelector(".all-mantras");
var mantrasList = document.querySelector(".mantras-list");
var allMessagesPage = document.querySelector(".all-messages");
//Favorite Message
var favMessageButton = document.querySelector(".favorite-message");
var favoritesPage = document.querySelector(".favorites-page");
var showFavButton = document.querySelector(".show-all-favorites-bttn");
var favoritesList = document.querySelector(".favorites-list");
var backToMainButton = document.querySelector(".back-to-main");


//**Arrays**
affirmList = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]

mantraList = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
]

favoriteList = [];



//**Event Listeners**
receiveMsgButton.addEventListener('click', generateRandomText);
clearButton.addEventListener('click', clearMessage);
showAllMsgButton.addEventListener('click', showAllMsgPage);
receiveMsgButton.addEventListener('click', generateRandomText);
clearButton.addEventListener('click', clearMessage);
favMessageButton.addEventListener('click', addFavorite);
showFavButton.addEventListener('click', showFavorites);
backToMainButton.addEventListener('click', showMainPage);


//**Event Handlers**
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomText() {
  if(document.getElementById("affirmation").checked) {
     var randomAffirmIndex = getRandomIndex(affirmList);
     msgPlaceholder.innerHTML += `${affirmList[randomAffirmIndex]}`;
     toggleMessageBox();
  } else if (document.getElementById("mantra").checked) {
     var randomMantraIndex = getRandomIndex(mantraList);
     msgPlaceholder.innerHTML += `${mantraList[randomMantraIndex]}`;
     toggleMessageBox();
  } else {
     alert("Please select either the affirmation button or mantra button.");
  }
}

function toggleMessageBox() {
  meditateLogo.style.display = "none";
  clearButton.classList.toggle('hidden');
  favMessageButton.classList.toggle('hidden');
}

//Error Handling & Clear Buttons
function clearMessage() {
  msgPlaceholder.innerHTML = "";
  clearButton.classList.toggle("hidden");
  favMessageButton.classList.toggle('hidden');
  meditateLogo.style.display = "inline";
}

//All Message Interface
function showAllMsgPage() {
  mainPage.classList.toggle('hidden');
  allMessagesPage.classList.toggle('hidden');

  for(var i = 0; i < affirmList.length; i++){
    affirmationsList.innerText += `${affirmList[i]}` + "\n";
  }
  for(var i = 0; i < mantraList.length; i++){
    mantrasList.innerText += `${mantraList[i]}` + "\n";
  }
}

//Favorite Message
function addFavorite() {
  var currentMessage = msgPlaceholder.innerText;
  favoriteList.push(currentMessage);
}

function showFavorites() {
  mainPage.classList.toggle('hidden');
  favoritesPage.classList.toggle('hidden');

  for(var i = 0; i < favoriteList.length; i++){
    favoritesList.innerText += `${favoriteList[i]}` + "\n";
    console.log(favoriteList);
  }
}

function showMainPage() {
  mainPage.classList.toggle('hidden');
  favoritesPage.classList.toggle('hidden');
}
