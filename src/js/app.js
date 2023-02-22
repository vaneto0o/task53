import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  //THis block will be executed once page is loaded and ready
  
  var productDiv = document.querySelector('.product');
  var productPrice = document.querySelectorAll('p')[1].innerHTML;
  var span = document.createElement('span');
  span.class = "data-price";
  span.className = "data-price";
  productDiv.setAttribute('data-price', productPrice);
  productDiv.appendChild(span);

});
