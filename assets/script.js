// var wrapper = document.querySelector(".wrapper");
// var text = document.querySelector(".about_text");

// var textCont = text.textContent;
// text.style.display = "none";

// for (var i = 0; i < textCont.length; i++) {
//   (function(i) {
//     setTimeout(function() {
//       var texts = document.createTextNode(textCont[i])
//       var span = document.createElement('span');
//       span.appendChild(texts);

//       //Переливание цветов
//       //span.classList.add("wave");
//       wrapper.appendChild(span);

//     }, 40 * i);
//   }(i));
// }

var sidebar = document.getElementById("sidebar");
var burger = document.getElementById("menu");

function sidebar_open() {
  sidebar.style.display = "grid";
  burger.setAttribute("onclick", "sidebar_close()");
}

function sidebar_close() {
  sidebar.style.display = "none";
  burger.setAttribute("onclick", "sidebar_open()");
}

