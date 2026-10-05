function denomination() {
  let amount = Number(prompt("Enter Amount"));

  let notes = [100, 50, 20, 10, 5, 2, 1];

  let output = "<h2>Denomination</h2>";

  for (let note of notes) {
    let count = Math.floor(amount / note);

    if (count > 0) {
      output += count + " - " + note + "'s <br>";

      amount %= note;
    }
  }

  document.getElementById("demo").innerHTML = output;
}
