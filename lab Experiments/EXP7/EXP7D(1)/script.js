function mathDemo() {
  document.getElementById("result").innerHTML =
    "PI = " +
    Math.PI +
    "<br>Square Root of 64 = " +
    Math.sqrt(64) +
    "<br>2 Power 5 = " +
    Math.pow(2, 5) +
    "<br>Maximum = " +
    Math.max(20, 30, 10) +
    "<br>Minimum = " +
    Math.min(20, 30, 10) +
    "<br>Random Number = " +
    Math.random();
}