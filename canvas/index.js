let bable= document.getElementById('bable');
let bableCanvas=bable.getContext("2d");
let t= setInterval(() => {
  bableCanvas.beginPath();
  let x=Math.random()*1600;
  let y= Math.random()*900;
  let grd=bableCanvas.createRadialGradient(x, y, 40, x, y, 50);
  grd.addColorStop(0,"white");
  grd.addColorStop(1,"red");
  bableCanvas.fillStyle=grd;
  bableCanvas.arc(x,y,50,0, Math.PI *2);
  bableCanvas.stroke();
}, 500);
  // let a= bableCanvas.arc(Math.random()*1600, Math.random()*900,50,0, Math.PI *2);
  // console.log('a :', a);

