var heroImageHeight = 0;
var headerHeight = 0;
var sendingButton = 0;
var submitButton = 0;
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

// Add a click event listener to the submit button

