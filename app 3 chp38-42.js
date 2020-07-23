var a = +prompt("Enter length of 1st side");
var b = +prompt("Enter length of 2nd side");
var c = +prompt("Enter length of 3rd side");

function min (a,b,c){
    x = (a+b+c)/2;
    return x;
}
var s = min(a,b,c);

function area (s){
    ar = s*(s-a)*(s-b)*(s-c);
    return ar;
}
alert("area of a triangle is " + area(s))