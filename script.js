
// Add number
var outputScreen = document.getElementById("output-screen");
  
function display(num){
  outputScreen.value +=  num;
}

// evaluate

function calculate(){
  outputScreen.value = eval(outputScreen.value)
}

// Clear
function erase(){
  outputScreen.value ="";
}

// delete

function del(){

  outputScreen.value = outputScreen.value.slice(0,-1)
}