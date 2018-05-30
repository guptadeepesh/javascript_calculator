var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
function numone(){  
    if (document.display.d1.value == "0" || document.display.d1.value == result ){
    document.display.d1.value = "1";  
    }
   
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "1";  
 }  
   
}  
function numtwo(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "2";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "2";  
 }  
   
}  
function numthree(){  
    
  if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "3";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "3";  
 }  
    
}  
function numfour(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "4";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "4";  
 }  
   
}  
function numfive(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "5";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "5";  
 }  
   
}  
function numsix(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "6";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "6";  
 }  
   
}  
function numseven(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "7";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "7";  
 }  
}  
function numeight(){  
   
 if (document.display.d1.value == "0"){  
    
  document.display.d1.value = "8";  
      
 }  
 else if (document.display.d1.value == result)  
 {  
  document.display.d1.value = "8";  
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "8";  
 }  
   
}  
function numnine(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  document.display.d1.value = "9";  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "9";  
 }  
   
}  
function numzero(){  
   
 if (document.display.d1.value == "0"){  
    
  document.display.d1.value = "0";  
      
 }  
 else if (document.display.d1.value == result)  
 {  
  document.display.d1.value = "0";  
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "0";  
 }  
   
}  
function numdobuzero(){  
   
 if (document.display.d1.value == "0" || document.display.d1.value == result){  
    
  return;  
      
 }  
 else //if(document.display.d1.value != "0")  
 {  
  document.display.d1.value = document.display.d1.value + "00";  
 }  
   
}  
function clr(){  
 document.display.d1.value = "0";  
 document.display.d2.value = "";  
 return;  
}  
  
function operationplus(){  
   
 operation = "+";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
 document.display.d2.value = firstnumber + operation;  
 //alert(firstnumber);  
    
}  
function operationmult(){  
   
 operation = "*";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
 document.display.d2.value = firstnumber + operation;  
   
}  
function operationminus(){  
   
 operation = "-";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
 document.display.d2.value = firstnumber + operation;  
   
}  
function operationdivid(){  
   
 operation = "/";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
 document.display.d2.value = firstnumber + operation;  
   
}  
function operationperc(){  
   
 operation = "%";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
 document.display.d2.value = firstnumber + operation;  
   
}  
function equalsto(){  
   
 secondnumber = parseInt(document.display.d1.value);  
   
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
 }  
 else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
    
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;  
     
 }  
 else if (operation == "%"){  
    
  if (document.display.d1.value == "0"){  
    
  result = firstnumber / 100;  
  document.display.d2.value = firstnumber + operation + "100";  
  }  
  else if (document.display.d1.value != "0")  {  
   result = firstnumber / secondnumber * 100;  
   document.display.d2.value = firstnumber + operation + secondnumber + "*100 = " + result;  
  }  
 }  
 else if (operation == "^"){  
    
  for (var i = 0; i < secondnumber; i++){  
     
   result = firstnumber * i;  
  }  
    
    
 }  
 document.display.d1.value ="";  
 document.display.d1.value = result.toString();  
 document.display.d2.value = firstnumber + operation + secondnumber + " = " + result.toString();  
 return;  
   
}  
  
function sqrots(){  
 firstnumber = document.display.d1.value;  
 result = Math.sqrt(parseInt(document.display.d1.value));  
 document.display.d1.value = result;  
 document.display.d2.value = "sqrt(" + firstnumber + ") = " + result;  
   
}  
  
function operationraistop(){  
   
 operation = "^";  
 firstnumber = parseInt(document.display.d1.value);  
 document.display.d1.value = "0";  
   
}  
