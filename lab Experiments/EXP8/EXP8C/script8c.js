function printNumbers() {
  let output = "<h3>For Loop</h3>";

  for (let i = 1; i <= 10; i++) output += i + " ";

  output += "<h3>While Loop</h3>";

  let j = 1;

  while (j <= 10) {
    output += j + " ";
    j++;
  }

  output += "<h3>Do While Loop</h3>";

  let k = 1;

  do {
    output += k + " ";
    k++;
  } while (k <= 10);

  document.getElementById("demo").innerHTML = output;
}
