import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  //THis block will be executed once page is loaded and ready
  
  const price=document.getElementsByClassName('price');
  var elements = document.getElementByClassName('product');
  for(var i=0; i < elements.length; i++){
    elements[i].setAttribure('data-price', price[0].innerHTML);
  }
});
