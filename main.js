noseX=0;
noseY=0;
rightWristX=0;
rightWristY=0;

function preload() {
     barca= loadImage('https://i.postimg.cc/jdc84SV7/barcita.png');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.position(600,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw()
{
    image(video, 0, 0, 300, 300);
   

    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(barca, rightWristX -30 , rightWristY -80, 50, 50);
}
function modelLoaded() {
    console.log('PoseNet está inicializando');
}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);

            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            rightWristX= results[0].pose.rightWrist.x;
            rightWristY= results[0].pose.rightWrist.y;

            console.log("nariz x = " + noseX);
            console.log("nariz y = " + noseY);

        }
}

function take_snapshot(){
    save('myFilterImage.png');
}
