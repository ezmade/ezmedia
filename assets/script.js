top = document.getElementById("top");
form = document.getElementById("forms");
button_order = document.getElementsByClassName("order");
button_hide = document.getElementById("hide");

for (var i = 0; i<button_order.length; i++) {
  button_order[i].onclick = function scrollTo() {
      form.style.display = "grid";
      button_hide.style.display = "grid";
      window.scrollTo(0, (parseInt(form.scrollHeight)/1.6));
  }
}

button_hide.onclick = function hideForm() {
  form.style.display = "none";
  button_hide.style.display = "none";
  window.scrollTo(0, (parseInt(top.scrollHeight)/1.6));
}
