 
Webcam.attach('#camera');

camera = document.getElementById("camera");


Webcam.set({
    width:350,
    height: 300,
    image_format:'png',
    png_quality:90
});


function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document .getElementById("resultimg").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/VrMy4tTYy/model.json', modelLoaded);


function modelLoaded() {
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('captured_image');

    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuaracy").innerHTML=results[0].confidence.toFixed(3);
    }
}