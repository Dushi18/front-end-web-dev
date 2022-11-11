let elem  = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
// elemClass[0].style.background =" yellow;"

elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// elemClass[0].classList.add("bg-primary")

console.log("from here");
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);