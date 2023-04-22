music1 = "";
music2 = "";
leftWrist_X = 0;
leftWrist_Y = 0;
rightWrist_X = 0;
rightWrist_Y = 0;
function preload(){
    music1 = loadSound("believer.mp3");
    music2 = loadSound("bones.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(results){
    if (results.lenght > 0){
        console.log(results)

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}