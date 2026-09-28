function stringDemo() {
  let str = "Web Development";

  document.getElementById("demo").innerHTML =
    "GIVEN STRING : " +
    str +
    "<br> " +
    "Length : " +
    str.length +
    "<br>Uppercase : " +
    str.toUpperCase() +
    "<br>Lowercase : " +
    str.toLowerCase() +
    "<br>Substring : " +
    str.substring(0, 3) +
    "<br>Replace : " +
    str.replace("Web", "JavaScript");
}