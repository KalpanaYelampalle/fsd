function checkVote() {
  let name = prompt("Enter Your Name");
  let age = Number(prompt("Enter Your Age"));
  let status;
  if (age >= 18) status = "Eligible to Vote";
  else status = "Not Eligible to Vote";

  document.getElementById("result").innerHTML =
    "<table border='2' cellpadding='10'>" +
    "<tr><th>Name</th><th>Age</th><th>Status</th></tr>" +
    "<tr><td>" +
    name +
    "</td><td>" +
    age +
    "</td><td>" +
    status +
    "</td></tr></table>";
}