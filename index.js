var weight = document.querySelector(".weight");
var height = document.querySelector(".height");
var btn= document.querySelector("button");
var output = document.querySelector("h3");

btn.addEventListener('click',function(){
   
  output.innerHTML = weight.value/ (height.value*height.value)
})