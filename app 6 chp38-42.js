var str = prompt("Enter string of length not more than 25");
ar = [];
a = [];
var b;
document.write("Original text" + "<br>" + str + "<br>");
function sentence (str)
{

    for (i=0 ; i < str.length ; i++){
        if ( str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" )
        {
          a += str[i];
                     
        }
        else{
            ar += str[i];
            
            
        }
        
       
    }
    document.write("After removing vowels" + "<br>" + ar + "<br>" );
    a.splice(0,a.length);
    


}
sentence(str);

