function preload(){

}
function setup(){
canvas=createCanvas(350,350);
camera=createCapture(VIDEO);
camera.hide();
}
function draw(){
image(camera,0,0,350,350)
}