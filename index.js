console.log("JS")

function onKeyPress(event) {
  var text = document.getElementById("text").innerHTML;
  document.getElementById("text").innerHTML = text + event.target.innerHTML
}

function onRemoveText() {
  document.getElementById("text").innerHTML = ""
}

function onRemoveLast() {
  var text = document.getElementById("text").innerHTML;
  document.getElementById("text").innerHTML = text.substring(0,text.length-1)
}