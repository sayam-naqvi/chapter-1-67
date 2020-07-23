var distance = +prompt("Enter distance is kilometer");
document.write("The distance in kilometer is " + distance + "km" + "<br>");

function meters ( distance ){
    dm = distance/1000;
    document.write("The distance in meters is " + dm + "m" + "<br>");

}
meters(distance);

function feet (distance){
    df = distance*3280.84;
    document.write("The distance in feets is " + df + "ft" + "<br>");

}
feet(distance);

function inch (distance){
    di = distance*39370.1;
    document.write("The distance in inches is " + di + "inch" + "<br>");

}
inch(distance);

function centimeter (distance){
    dc = distance*100000;
    document.write("The distance in centimeters is " + dc + "cm" + "<br>");

}
centimeter(distance);