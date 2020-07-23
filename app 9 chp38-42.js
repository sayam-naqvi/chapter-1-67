var hour = +prompt("Enter collective hour of work","workhour + overtime");
if ( hour <= 40)
{ 
    alert("Sorry you are not eligible for overtime pay");

}
else {
    function overtime(hour){
        hour = hour-40;
        pay = 12*hour;
        alert("Overtime pay is " + pay);
    }

}
overtime(hour);