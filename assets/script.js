var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".about_text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      //Переливание цветов
      //span.classList.add("wave");
      wrapper.appendChild(span);

    }, 65 * i);
  }(i));
}