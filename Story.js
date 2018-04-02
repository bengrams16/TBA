var audioDoor= new Audio("Door Opening.mp3");
var audioAxe= new Audio("Metal Sound.mp3");
var audioHammer=new Audio("Hammer Hit.mp3");
var audioFail=new Audio("Fail.mp3");


document.getElementById('s4').addEventListener("click",function(){
var a=prompt("Would you like to restart the game?");
if(a=="yes"){
  location.reload();
}
else{
  alert("The game is over, thank you for playing.")}
});

var lives=[0,1];
var money=[0,10000];

var inventory = [];
inventory.push("Inventory:");
inventory.push("Lives=",lives[1]);
inventory.push("Money=",money[1]);

document.getElementById("inv_box").innerHTML=inventory;

document.getElementById("s1").style.display="block";

document.getElementById('s1c1').addEventListener("click",function(){
document.getElementById("s2p1").style.display="block"
document.getElementById("s1c2").style.display="none"
alert("Very interesting choice mon ami");
audioDoor.play();
});

document.getElementById("s1c2").addEventListener("click",function(){
document.getElementById("s2p2").style.display="block";
document.getElementById("s1c1").style.display="none"
alert("Have you chosen wrong?")
audioDoor.play();
});

document.getElementById("s2p1c1").addEventListener("click",function(){
document.getElementById("s3p1").style.display="block";
document.getElementById("s2p1c2").style.display="none";
document.getElementById('s4').style.display="block";
inventory.push("screwdriver")
document.getElementById("inv_box").innerHTML=inventory;
});

document.getElementById("s2p1c2").addEventListener("click",function(){
document.getElementById("s3p2").style.display="block";
document.getElementById("s2p1c1").style.display="none";
document.getElementById('s4').style.display="block";
inventory.pop(lives);
inventory.push("axe");
inventory.pop(money);
audioAxe.play();

document.getElementById("inv_box").innerHTML=inventory;


});

document.getElementById("s2p2c1").addEventListener("click",function(){
document.getElementById("s3p3").style.display="block";
document.getElementById("s2p2c2").style.display="none";
document.getElementById('s4').style.display="block";
inventory.pop(lives);
inventory.pop(money);
inventory.push("paperclip");
audioFail.play();
document.getElementById("inv_box").innerHTML=inventory;
});

document.getElementById("s2p2c2").addEventListener("click",function(){
document.getElementById("s3p4").style.display="block";
document.getElementById("s2p2c1").style.display="none";
document.getElementById('s4').style.display="block";
inventory.push("hammer")
audioHammer.play();
document.getElementById("inv_box").innerHTML=inventory;
});
