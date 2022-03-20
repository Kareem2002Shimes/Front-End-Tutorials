function countDown(){
    let countDownDate=new Date("Dec 20, 2022 00:00:00").getTime();
    let dateNow=new Date().getTime();
    let gap=countDownDate - dateNow;
    

    let second=1000;
    let minute=second * 60;
    let hour= minute *60;
    let day= hour *24;


    let textDay= Math.floor((gap / day));
    let textHour= Math.floor((gap % day) / hour);
    let textMinute= Math.floor((gap % hour) / minute);
    let textSecond= Math.floor((gap % minute) / second);

    
    document.querySelector(".second").innerHTML=textSecond;
    
    document.querySelector(".day").innerHTML=textDay;
    document.querySelector(".hour").innerHTML=textHour;
    document.querySelector(".minute").innerHTML=textMinute;

    if (gap < 0 ){
        clearInterval(count);
        document.write(`Hello from ${dateNow}`);
    }

}
let count =setInterval (countDown,1000);



