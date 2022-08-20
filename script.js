function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
