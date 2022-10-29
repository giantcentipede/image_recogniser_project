Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });

}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xdDaBB7FD/model.json',modelLoaded);

console.log("ml5 version: ",ml5.version);

function modelLoaded () {
    console.log("model loaded");
    
}


function identify() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}

function gotResult(error,results) {
    if (error) {
       
    }
    else {
        console.log(results);
        document.getElementById("identify_image").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}