function getInput() {
  let name = prompt("Enter your Name");
  let age = document.getElementById("age").value;
  alert("Name : " + name);
  document.getElementById("display").innerHTML = "Age : " + age;
}
