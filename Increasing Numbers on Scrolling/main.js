let nums=document.querySelectorAll(".nums .num");

let numSection=document.querySelector(".counting");
let started=false

window.onscroll=function(){
    if (window.scrollY >= numSection.offsetTop){
        // if variable not false then turn on the function
        if(!started){
            nums.forEach((num)=>{startCounting(num)})

        }
        // to stop counting when function finished
        started=true
    }
}


function startCounting(el){
    
let goal=el.dataset.goal
let count=setInterval(()=>{
    el.textContent++;
    if( el.textContent==goal){
        clearInterval(count)
    }
},2000/ goal)

}

