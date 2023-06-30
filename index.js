var text = "";

document.addEventListener("DOMContentLoaded", function (event) {
  const keys = document.querySelectorAll(".key")
  for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", onKeyPress);
  }
  document.querySelector(".remove").addEventListener("click", onRemoveText);
  document.querySelector(".backspace").addEventListener("click", onRemoveLast);
});

function setText() {
  document.getElementById("text").innerHTML = text;
}

function onKeyPress(event) {
  text = text + event.target.innerHTML;
  setText(text);
}

function onRemoveText() {
  text = "";
  setText();
}

function onRemoveLast() {
  text = text.substring(0, text.length - 1);
  setText();
}
