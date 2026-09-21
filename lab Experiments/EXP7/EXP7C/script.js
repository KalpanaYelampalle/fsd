function arrayDemo() {
  let names = ["Kalpana", "Ramya", "Dhana"];
  names.push("Kavya");
  names.sort();
  document.getElementById("demo").innerHTML =
    "Array Elements : " +
    names +
    "<br><br>Length : " +
    names.length +
    "<br><br>First Element : " +
    names[0];
}
