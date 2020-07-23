var amount = +prompt("Enter amount to be withdrawn");
function currency (amount){
    hund = Math.floor(amount/100);
    a = String(hund);
    b = a + "00";
    c = parseInt(b);
    d = amount - c;
    if ( d >=  50 ){
        e = d - 50
        g = "1 fifty notes";
       f = e/10;
        h = Math.floor(f);
        // h = String(h);
        // c = String(c);
         document.write("you will have " + a + " hundred notes " + g + " " + h + " ten notes ");
    }
    else if ( d < 50 ){
        f = d/10;
        h = Math.floor(f);
        // h = String(h);
        // c = String(c);
         document.write("you will have " + a + " hundred notes " + h + " ten notes ");

    }

    

}
currency(amount);