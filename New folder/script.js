function cek() {
  let input = document.getElementById("inputNumber").value;
  let result = document.getElementById("result");

  let regex = /^[1-9](\.\d+)?e[-+]?\d+$/i;

  if (regex.test(input)) {
    result.innerHTML = "Valid scientific notation";
    result.style.color = "#4caf50";
  } else {
    let suggestion = buatSaran(input);
    result.innerHTML = "Invalid input" + (suggestion ? "<br>Try: " + suggestion : "");
    result.style.color = "#e53935";
  }
}

function isi(value) {
  document.getElementById("inputNumber").value = value;
}

function buatSaran(input) {
  let num = parseFloat(input);
  if (isNaN(num)) return null;

  let exp = num.toExponential(2);
  return exp.replace("+", "");
}