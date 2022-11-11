// elem = document.getElementsByClassName("items")
// console.log(elem)
// head = document.getElementsByTagName('h3');
// console.log(head);

// const { clear } = require("console");

// let early = document.querySelectorAll('.items')[1].innerHTML;

// document
//   .getElementsByClassName("items")[1]
//   .addEventListener("mousedown", function () {
//     document.querySelectorAll(".items")[1].innerHTML = "I love You a lot.";
//     console.log("mouse down when clicled on container");
//   });
// document.getElementsByClassName('items')[1].addEventListener('mouseup', function
// () {
//     document.querySelectorAll('.items')[1].innerHTML = early;
//     console.log('mouse up when clicled on container')
// })

// document
//   .getElementsByClassName("items")[0]
//   .addEventListener("mousedown", function () {
//     document.querySelectorAll(".items")[0].innerHTML =
//       " <p> This is a para.</p> <br> <ul> <li>i</li><li>love</li><li>you</li></ul>";
//     console.log("Item 1 is clicked.");
//   });
localStorage.setItem("name", "dushi");
// localStorage.clear();
object = {nam : 'dushya/nt', age: 18, branch : "mechanical" , college: "nith"};
// console.log(object);
// console.log(object["age"]);
fuck = ()=>{
    document.getElementsByClassName('items')[1].innerHTML = "Fuck off";
    console.log("timeout fired")
}
// setTimeout(fuck, 5000);
id = setInterval(fuck, 2000)
// clearInterval(id);