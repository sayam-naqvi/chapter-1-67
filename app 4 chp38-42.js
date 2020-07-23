var a = +prompt("Enter marks obtained in 1st subject");
var b = +prompt("Enter marks obtained in 2nd subject");
var c = +prompt("Enter marks obtained in 3rd subject");
var total = +prompt("Enter total marks");

function average (a,b,c){
 avg = (a+b+c)/3;
 return avg;    
}
function percentage (a,b,c,total){
    per = ((a+b+c)/total)*100;
    return per;
}
function mainFunction (){
   
    document.write("average is " + average(a,b,c) + "<br>");
 document.write("percentage is " + percentage(a,b,c,total) + "%" + "<br>"); 
}
mainFunction();
