var modal = document.getElementById("myModal");

var btn = document.getElementById("si");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("su");

var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var sp=document.getElementById("redirect");
sp.onclick=function()
{
  modal.style.display = "none";
  modal1.style.display = "block";
}
var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("createp");

var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button,
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// bloglist*****************************
// function openblog(){
//   window.open('C:\Users\Achlesh.ACHLESH\Desktop\frontend project\stub\html');
// }
