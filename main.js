function preload()
{

}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oP6-nS7YP/model.json', modelLoaded);

}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw()
{
    image(video,0,0,400,400);
    classifier.classify(video,gotResult);
}
