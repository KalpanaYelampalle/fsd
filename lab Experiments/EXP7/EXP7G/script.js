function Student(name, roll, branch) {
  this.name = name;
  this.roll = roll;
  this.branch = branch;

  // Method
  this.display = function () {
    return (
      "Name : " +
      this.name +
      "<br>Roll No : " +
      this.roll +
      "<br>Branch : " +
      this.branch
    );
  };
}
Object.defineProperty(Student.prototype, "details", {
  get: function () {
    return this.name + " (" + this.branch + ")";
  },
});
function showStudent() {
  let s1 = new Student("Kalpana", 161, "CSM");

  document.getElementById("demo").innerHTML =
    s1.display() + "<br><br><b>Accessor:</b> " + s1.details;
}
