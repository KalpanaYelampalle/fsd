function dateDemo() {
  let today = new Date();

  document.getElementById("demo").innerHTML =
    "Current Date : " +
    today +
    "<br>Day : " +
    today.getDate() +
    "<br>Month : " +
    (today.getMonth() + 1) +
    "<br>Year : " +
    today.getFullYear() +
    "<br>Hours : " +
    today.getHours() +
    "<br>Minutes : " +
    today.getMinutes();
}