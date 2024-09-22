const display = document.getElementById("display");

function appendtodiplay(input){
  if (display.value == "Error"){
    display.value = "";
    display.value += input;
  } else if (display.value == "function Error() { [native code] }"){
    display.value = "";
    display.value += input;
  } else if (display.value == "undefined"){
    display.value = "";
    display.value += input;
  } else {
    display.value += input;
  }
}

function cleardisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

function removenumber(){
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}