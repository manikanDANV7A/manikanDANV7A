function preload(){

}
function setup(){
 canvas=createCanvas(350,350);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 video.size(350,350);
 posenet=ml5.poseNet(video,modeloaded);
posenet.on("pose",gotpose);
}
function draw(){
image(video,0,0,350,350);

}
function snapshot(){
    save("Myfilter.png");
}
function gotpose(results){
    if(results.length>0){
        console.log(results);
        console.log(results[0].pose,nose.x);
        console.log(results[0].pose.nose.y);
    }
}
function modeloaded(){
    console.log("Model is loaded");
}