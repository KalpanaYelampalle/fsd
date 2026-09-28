function largest() {
  let a = Number(prompt("Enter First Number"));
  let b = Number(prompt("Enter Second Number"));
  let c = Number(prompt("Enter Third Number"));

  if (a == b && b == c) {
    document.getElementById("result").innerHTML = "<h2>EQUAL NUMBERS</h2>";
    alert("EQUAL NUMBERS");
  } else {
    let large = Math.max(a, b, c);

    document.getElementById("result").innerHTML =
      "<h2>" + large + " LARGER NUMBER</h2>";

    alert(large + " LARGER NUMBER");
  }
}