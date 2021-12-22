function newElement(){
  //Create input value to display
  var item = document.createElement("li");
  var inputValue = document.getElementById("inputs").value;
  var textNode = document.createTextNode(inputValue);
  item.appendChild(textNode);

  //If-else statement to check whether or not input is empty or not.
  if(inputValue === ''){
    alert("Sorry, to-do item cannot be empty");
  }else{
    document.getElementById("to-do-items").appendChild(item);

  document.getElementById("inputs").value = "";
  
  //Creating a close button for each element.
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  }
}

//Create close element for each to-do item. and if click, hide current item.
  var list = document.getElementsByTagName("li");
  //For loop to go through each element in the list to add a close label.
  for( var i = 0; i < list.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }

}
