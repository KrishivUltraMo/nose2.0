noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://lh3.googleusercontent.com/proxy/9joe3jVPRf_vsDQRKWzVXBL9wKlY-4UD7uwE8JdoBisj1_hy7NyWMVGncvBPlPocR1SyKUi24hPP8mkfYaGFaePZAQaD-FA');

}

function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();

poseNet=ml5.poseNet (video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX= results[0].pose.nose.x -15 ;
    noseY= results[0].pose.nose.y;
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
    }
}




function modelLoaded(){
console.log('PoseNet Is Initialized');
}




function draw(){
image(video,0,0,500,500);
image(clown_nose,noseX,noseY,30,30)
}

function Take_snapshot(){
 save('Myself.png');
}
