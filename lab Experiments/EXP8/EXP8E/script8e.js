function checkArmstrong() {
  let num = Number(prompt("Enter Number"));

  let temp = num;

  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;

    sum += digit * digit * digit;

    temp = Math.floor(temp / 10);
  }

  if (sum == num)
    document.getElementById("demo").innerHTML = num + " is an Armstrong Number";
  else
    document.getElementById("demo").innerHTML =
      num + " is NOT an Armstrong Number";
}