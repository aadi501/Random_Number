let random =Math.floor(Math.random() * 100 + 1);

let submit = document.getElementById('form_sub');
let count = 0;
form_sub.addEventListener('click' ,(ev)=>{
    ev.preventDefault();  
    let num = document.getElementById('input');
    let display = document.getElementById('display');
    count++;
if(num.value > random){
    display.innerHTML = 'The number is smaller';
}
else if (num.value < random){
    display.innerHTML ='The number is bigger ';
}
else {
    display.innerHTML =`congratulation !! You guess the right number --${num.value} <br> Your score is ${100-count}`;
}
    

    num.value ='';
})