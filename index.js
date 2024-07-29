var weight = document.querySelector(".weight");
var height = document.querySelector(".height");
var btn= document.querySelector("button");
var output = document.querySelector("h3");
var output2 = document.querySelector("h2");

btn.addEventListener('click',function(){
   var x = Math.round(weight.value/ (height.value*height.value));
   if(x<=18.5){
output2.innerHTML = "your BMI is underweight";
output2.style.color = "orange";
   }
   else if(x>= 18.5 && x<= 24.5){
    output2.innerHTML = "your BMI is normal";
    output2.style.color = "green";
   }
   else if(x>=25 && x<=39.9){
    output2.innerHTML = "your BMI is overweight";
    output2.style.color = "yellow";
   }
   else{
 output2.innerHTML = "your BMI is obese visit your doctor for a medical check up";
   output2.style.color = "red"
   }
   
   
  output.innerHTML = x;
})