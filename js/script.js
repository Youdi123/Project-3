var images = [
"chicago1.jpg",
"chicago2.jpg",
"chicago3.jpg",
"chicago4.jpg"
];
var i=0;
function slide() {
  document.getElementById("first-image").src=images[i];
  if(i<(images.length-1))
    i++;
  else
    i=0;
}
setInterval(slider,1000) 
