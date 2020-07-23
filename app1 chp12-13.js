var value = prompt("Enter a singal letter or digit");

if (value >=String.fromCharCode(65)  && value <=String.fromCharCode(90) ){
    alert ("The given value belongs to uppercase");
}
else if (value >= String.fromCharCode(97) && value <= String.fromCharCode(122) ){
    alert ("The given value belongs to lowercase");
}
else if (value >=0 && value <=9 ){
    alert ("The given value belongs to number");
}
else {
    alert("Invalid Entry");
}