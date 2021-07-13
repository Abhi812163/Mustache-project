nosex=0;
nosey=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot(){
    save('MyfilteredImg.png');
}

function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,50,50);
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-23;
        nosey=results[0].pose.nose.y-15;
        console.log("Nose X="+results[0].nosex);
        console.log("Nose Y="+results[0].nosey);
    }
}

function preload(){
    img=loadImage('https://i.postimg.cc/nrW1Y7Kv/unnamed.png');
}