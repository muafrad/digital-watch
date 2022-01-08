function myTime() {
    var myDate = new Date();
    var hr,min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes();
    var sec = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();
    var M = (myDate.getHours() >= 12) ? "PM" : "AM";

    if (myDate.getHours() == 0) {
        hr = 12;
    }else if(myDate.getHours() > 12){
        hr = myDate.getHours() - 12;
    }else{
        hr = myDate.getHours();
    }
 
    document.getElementsByClassName("hour")[0].innerHTML = hr;
    document.getElementsByClassName("min")[0].innerHTML = min;
    document.getElementsByClassName("sec")[0].innerHTML = sec;

    var myDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
    myMonth=["January", "February", "March", "April", "May", "June","July","August", "September", "October", "November", "December"],
    date = myDate.getDate();

    var currentDate = date + "/ " + myMonth[myDate.getMonth()] + " " + myDate.getFullYear();
    var currentDay = myDay[myDate.getDay()];
 
    document.getElementsByClassName("day")[0].innerHTML = currentDay;
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
    document.getElementsByClassName("M")[0].innerHTML = M;
}

myTime();
setInterval(() => {
    myTime();
}, 1000);