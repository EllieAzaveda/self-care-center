var affirmButton = document.getElementById("affirmation");
var mantraButton = document.getElementById("mantra");
var receiveMsgButton = document.querySelector("button");
var meditateLogo = document.querySelector("svg");
var returnMsgBox = document.querySelector(".logo-box");
var radioButtons = document.querySelectorAll(".radio-button");
var msgPlaceholder = document.querySelector("p");

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


//Event Listeners

receiveMsgButton.addEventListener('click', generateRandomText);

//Event Handlers


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomText() {
  meditateLogo.style.display = "none";

  if(document.getElementById("affirmation").checked) {
     var randomAffirmIndex = getRandomIndex(affirmList);
     msgPlaceholder.innerHTML += `${affirmList[randomAffirmIndex]}`;
  } else if (document.getElementById("mantra").checked) {
     var randomMantraIndex = getRandomIndex(mantraList);
     msgPlaceholder.innerHTML += `${mantraList[randomMantraIndex]}`;
  } else {
     alert("Please select affirmation or mantra.");
  }
}
