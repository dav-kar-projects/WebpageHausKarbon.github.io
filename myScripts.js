var heroImageHeight = 0;
var headerHeight = 0;
var sendingButton = 0;
var submitButton = 0;
var minusButton = 0;
var plusButton = 0;
var numberField = 0;
var minusButtonC = 0;
var plusButtonC = 0;
var numberFieldC = 0;
var childrenInput;
var plusButtons;
var minusButtons;

function ready() {
   let element = document.getElementById('header');
   let headerImage = document.querySelector('.js_hero_idclass');
   if (element && headerImage) {
      var header = document.getElementById("header");
      // Get the height of the image element
      heroImageHeight = headerImage.offsetHeight;
      headerHeight = header.offsetHeight;
   }
   else if (!headerImage) {
      var header = document.getElementById("header");
      header.classList.add("active");

   }

   //ABSENDEN BUTTON
   let button = document.getElementById("absenden_btn");
   submitButton = document.getElementById('absenden_btn');
   sendingButton = document.querySelector('.sending');
   console.log(submitButton);
   /// Eltern 
   minusButton = document.querySelector('.form-number__minus');
   plusButton = document.querySelector('.form-number__plus');
   numberField = document.querySelector('.form-number');
   minusButtonC = document.querySelector('.form-number__minusC');
   plusButtonC = document.querySelector('.form-number__plusC');
   numberFieldC = document.querySelector('.contact__children');
   childrenInput = document.querySelector('.contact__children');
   plusButtons = document.querySelectorAll('.form-number__plus');

   minusButtons = document.querySelectorAll('.form-number__minus');


   if (plusButton) {

      plusButtons.forEach(button => button.addEventListener('click', increaseValue));
      minusButtons.forEach(button => button.addEventListener('click', decreaseValue));
      console.log(plusButtons);

   }
}

function showChildAges() {
   // Get the value of the contact__children input
   const numChildren = document.querySelector('.contact__children').value;
   console.log(numChildren);
   // Get all of the contact__child-age elements
   const childAgeElements = document.querySelectorAll('.contact__child-age');
   const mainPart = document.querySelectorAll('.contact__children-ages');
   if (numChildren > 0) {
      mainPart[0].style.display = 'inline';
   }
   else {
      mainPart[0].style.display = 'none';
   }
   // Set the visibility of each child age element based on the value of the contact__children input
   for (let i = 0; i < childAgeElements.length; i++) {
      if (i < numChildren) {
         childAgeElements[i].style.display = 'inline';
      } else {
         childAgeElements[i].style.display = 'none';
      }
   }
}

function increaseValue(event) {
   // Get the input element that is associated with the button that was clicked
   var inputElement = event.target.previousSibling.previousSibling;

   // Get the current value of the input element
   let currentValue = parseInt(inputElement.value);

   // Increase the value by 1
   currentValue += 1;

   // Update the value of the input element
   inputElement.value = currentValue;
}

function decreaseValue(event) {
   // Get the input element that is associated with the button that was clicked
   var inputElement = event.target.nextElementSibling;

   // Get the current value of the input element
   let currentValue = parseInt(inputElement.value);

   // Decrease the value by 1, but not below the minimum value
   currentValue = Math.max(currentValue - 1, inputElement.min);

   // Update the value of the input element
   inputElement.value = currentValue;
}

function Decrease() {
   numberField.value = parseInt(numberField.value, 10) - 1;
}
function Increase() {
   numberField.value = parseInt(numberField.value, 10) + 1;
}
function DecreaseC() {
   numberFieldC.value = parseInt(numberFieldC.value, 10) - 1;
}
function IncreaseC() {
   numberFieldC.value = parseInt(numberFieldC.value, 10) + 1;
}


document.addEventListener("DOMContentLoaded", ready);

function myFunction() {
   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > heroImageHeight - headerHeight) {
      // Add the "active" class to the header element
      header.classList.add("active");
   } else {
      // Remove the "active" class from the header element
      header.classList.remove("active");
   }
}

window.onscroll = function () {
   if (document.getElementById("header") && heroImageHeight > 0) {
      myFunction();
   }
};

// Dropdown //////////////////
function DropdownFctStudio() {
   var droopdownelement = document.getElementById("myDropdownPriceStudio");
   if (droopdownelement.className.indexOf("show") !== -1) {
      droopdownelement.classList.remove("show");
      droopdownelement.classList.add("animated");
   } else {
      droopdownelement.classList.add("show");
      droopdownelement.classList.remove("animated");
   }
}
function DropdownFctApp() {
   var droopdownelement = document.getElementById("myDropdownPriceAppartement");
   if (droopdownelement.className.indexOf("show") !== -1) {
      droopdownelement.classList.remove("show");
      droopdownelement.classList.add("animated");
   } else {
      droopdownelement.classList.add("show");
      droopdownelement.classList.remove("animated");
   }
}

//////////Anfrage senden /////////////
// Get the two buttons


