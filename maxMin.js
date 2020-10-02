function max() 
{ 
   let x = document.getElementById("FirstNumber").value 
   let y = document.getElementById("SecondNumber").value  
   document.getElementById("result").value = Math.max(x, y);
}

function min() 
{ 
   let x = document.getElementById("FirstNumber").value 
   let y = document.getElementById("SecondNumber").value  
   document.getElementById("result").value = Math.min(x, y);
} 
