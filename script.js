function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  if (y == null) {
    clearScreen();
  } else {
    return y;
  }
}
