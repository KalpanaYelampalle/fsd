function windowDemo() {
  alert("Welcome to JavaScript");

  let name = prompt("Enter Your Name");

  let choice = confirm("Do you want to continue?");

  document.getElementById("result").innerHTML =
    "Name : " + name + "<br>Confirmation : " + choice;
}
