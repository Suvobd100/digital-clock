function digitalClock(){
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate='AM'; 
    let displayDate=("0"+new Date().getDate()).slice(-2) +'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+ date.getFullYear()
    // console.log(displayDate);
    if (hours === 0){
        hours=12;
    }
    if (hours > 12){
        hours = hours - 12;
        timeFormate = 'PM'
    }

    // add 0 to hours
   
    hours = hours < 10 ? hours = '0' + hours : hours;
    minutes = minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds = seconds < 10 ? seconds = '0' + seconds : seconds;

    let finalTime=`${hours}:${minutes}:${seconds}`;
   
    document.getElementById('time').innerText=finalTime;
    document.getElementById('timeFormate').innerText=timeFormate;
    document.getElementById('date').innerText=displayDate;

    setInterval(digitalClock,1000)
    
}

digitalClock();



