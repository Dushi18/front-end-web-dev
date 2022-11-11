const add = new Date();
const day = add.getDate() +" "+ add.getMonth()+" "+ add.getFullYear();
const time =  add.getHours() + ":" + add.getMinutes() + ":" + add.getSeconds();
console.log(day);
console.log(time);
document.getElementById('date').innerText = day;
tmr = setInterval(function timer() {
    document.getElementById('time').innerText= time;
},1000);


document.getElementById('button1').addEventListener('click', ()=>{
    let valuename = document.getElementById('name').value;
    let quote = document.getElementById('description').value;
    document.getElementById('name1').innerText=valuename;
    document.getElementById('quote1').innerText=quote;
})

// valuename = document.getElementById('name').valu