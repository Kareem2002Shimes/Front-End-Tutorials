let skillsSection=document.querySelector(".skills");

let prosgressBar=document.querySelectorAll(".skills .progress-bar");

window.onscroll=function (){
    if (window.scrollY >= skillsSection.offsetTop -100){
        prosgressBar.forEach((prog)=>{
            prog.style.width=prog.dataset.width
        })
    }
}