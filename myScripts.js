console.log("connected")


////////////////    Header Transofrmation   //////////////////////////
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 200) {
    var element = document.getElementById("header");
    element.classList.add("active");
 } else {
    var element = document.getElementById("header");
    element.classList.remove("active");

 }
}
/////////////////////////////////////////////////////////////////////