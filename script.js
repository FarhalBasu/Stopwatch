var isStop=true;
var s=0;
var min=0;
var hr=0;

// function to start stopWatch
function start(){
    if(isStop==true){
        isStop=false;
        timer();

    }

}
//function to start a timer
function timer(){
    if(isStop==false)
    {   s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);
        s+=1;
        if(s==60){
            s=0;
            min++;
        }
        if(min==60){
            min=0;
            hr++;
        }
        if(s<10){
            s = "0"+s; 
        }
        if(min<10){
            min = "0"+min; 
        }
        if(hr<10){
            hr = "0"+hr; 
        }
        
        document.getElementById("stopwatch").innerHTML=hr+" : "+min+" : "+s;
        setTimeout("timer()",1000);
    }

}
//function to stop stopWatch
function stop(){
    isStop=true;

}
//function to reset stopWatch
function reset(){
isStop=true;
s=0;
min=0;
hr=0;
stopwatch.innerHTML="00 : 00 : 00";
}
