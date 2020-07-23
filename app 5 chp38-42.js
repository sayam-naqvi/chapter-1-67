var str = prompt("Enter any string");
var char = prompt("Enter character whose index is to be find");
function met (str,char){
    var b = char
    for ( i = 0; i < str.length ; i++ ){
        if (b === str[i]){
            alert("The character is found at " + i);
        
        }
        
    }


    
}
met(str,char);
