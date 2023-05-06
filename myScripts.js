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
   console.log(plusButtons);
   console.log(minusButtonC);

   if (plusButton) {

      plusButtons.forEach(button => button.addEventListener('click', increaseValue));
      minusButtons.forEach(button => button.addEventListener('click', decreaseValue));
      console.log(plusButtons);

   }
   if (minusButtonC) {
      plusButtonC.addEventListener('click', function (event) {
         const numChildren = document.querySelector('.contact__children').value;
         console.log(numChildren);
         if (0 <= numChildren && numChildren < 5) {
            increaseValue(event);
            showChildAges();
         }
      });
      minusButtonC.addEventListener('click', function (event) {
         decreaseValue(event);
         showChildAges();
      });
   }
}

function showChildAges() {
   // Get the value of the contact__children input
   const numChildren = document.querySelector('.contact__children').value;

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



function Dropdown() {
   var x = document.getElementById("header");
   var y = document.getElementById("Subheader");
   var z = document.getElementById("homebtnId");
   console.log("x.classname", x.className);
   if (x.className == "nav_bar" || x.className == "nav_bar active") {
      x.className += " responsive";
      y.className -= " w3-hide-small";
      z.className += " full_width";

   } else if (x.className == "nav_bar responsive") {

      x.className -= "responsive";
      x.className = "nav_bar";
      y.className += " w3-hide-small";
      z.className -= " full_width";
      z.className += " left_links";

   } else if (x.className == "nav_bar active responsive") {
      x.className -= "responsive";
      x.className = "nav_bar active";
      y.className += " w3-hide-small";
      z.className -= " full_width";
      z.className += " left_links";
   }
   console.log("x.className " + x.className);
   console.log("y.className " + y.className);
   console.log("z.className " + z.className);
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
////////////////////////// Form Check Functions //////////////////////	

function validateTextInput(inputName) {
   var input = document.getElementsByName(inputName)[0];
   console.log(input.value)
   if (input.value === "") {
      input.classList.add("error");
      input.classList.remove("success");
   } else {
      input.classList.add("success");
      input.classList.remove("error");
      $('.hf-warning_name').remove();

   }
}
function validateDateInput(inputName) {
   var input = document.getElementsByName(inputName)[0];
   var class_ = document.getElementsByClassName("Ankunft")[1];
   console.log(class_)
   if (input.value === "") {
      class_.classList.add("error");
      class_.classList.remove("success");
   } else {
      var dates = input.value.split(" ");
      if (dates.length !== 3) {
         class_.classList.add("error");
         class_.classList.remove("success");
      } else {
         class_.classList.add("success");
         class_.classList.remove("error");
         $('.hf-warning_dates').remove();
      }
   }
}

function validateEmail(inputName) {
   var email = document.getElementsByName(inputName)[0];
   console.log(email.value);
   var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
   if (!emailRegex.test(email.value)) {
      email.classList.add("error");
      email.classList.remove("success");
      console.log("bad");
   } else {
      console.log("good");
      email.classList.add("success");
      email.classList.remove("error");
      $('.hf-warning_mail').remove();

   }

}

document.addEventListener("DOMContentLoaded", function () {
   ready();
   if (document.querySelector(".container_anfrage")) {
      console.log("Element with class 'container_anfrage' found!");

      document.getElementsByName("firstname")[0].addEventListener("input", function () {
         validateTextInput("firstname");
      });
      document.getElementsByName("lastname")[0].addEventListener("input", function () {
         validateTextInput("lastname");
      });
      document.getElementsByName("dates")[0].addEventListener("input", function () {
         validateDateInput("dates");
      });
      document.getElementsByName("email")[0].addEventListener("input", function () {
         validateEmail("email");
      });
   } else {
      console.log("Element with class 'container_anfrage' not found!");
   }
});

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


