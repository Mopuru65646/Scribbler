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

var modal3 = document.getElementById("myModal3");

var btn31 = document.getElementsByClassName("abc1");

var span3 = document.getElementById("na");

// When the user clicks on the button, open the modal
//  btn31[0].onclick=function() {
//   modal3.style.display = "block";
// }
btn31[0].onclick=function() {
  modal3.style.display = "block";
 }
btn31[1].onclick=function() {
 modal3.style.display = "block";
}
btn31[2].onclick=function() {
 modal3.style.display = "block";
}
btn31[3].onclick=function() {
 modal3.style.display = "block";
}
btn31[4].onclick=function() {
 modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

var btn32=document.getElementsByClassName("fa");
btn32[0].onclick=function(){
  window.location.href='post.html';
}
btn32[1].onclick=function(){
  window.location.href='post.html';
}
btn32[2].onclick=function(){
  window.location.href='post.html';
}
btn32[3].onclick=function(){
  window.location.href='post.html';
}
btn32[4].onclick=function(){
  window.location.href='post.html';
}
