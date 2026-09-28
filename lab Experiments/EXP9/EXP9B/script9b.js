function getNumber() {
  return Number(document.getElementById("num").value);
}

function factorial() {
  let n = getNumber();

  let fact = 1;

  for (let i = 1; i <= n; i++) fact *= i;

  document.getElementById("result").innerHTML = "Factorial = " + fact;
}

function fibonacci() {
  let n = getNumber();

  let a = 0,
    b = 1,
    str = "";

  while (a <= n) {
    str += a + " ";

    let c = a + b;

    a = b;

    b = c;
  }

  document.getElementById("result").innerHTML = "Fibonacci Series : " + str;
}

function prime() {
  let n = getNumber();

  let str = "";

  for (let i = 2; i <= n; i++) {
    let flag = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        flag = false;
        break;
      }
    }

    if (flag) str += i + " ";
  }

  document.getElementById("result").innerHTML = "Prime Numbers : " + str;
}

function palindrome() {
  let n = getNumber();

  let temp = n;

  let rev = 0;

  while (temp > 0) {
    rev = rev * 10 + (temp % 10);

    temp = Math.floor(temp / 10);
  }

  if (rev == n)
    document.getElementById("result").innerHTML = n + " is Palindrome";
  else document.getElementById("result").innerHTML = n + " is Not Palindrome";
}
