var year = +prompt("Enter year");
function leapYear (year){
    if (year % 4 == 0){
        alert(year + " is a leap year");
    }
        else {
            alert(year + " is not a leap year");
        }
}
leapYear(year);