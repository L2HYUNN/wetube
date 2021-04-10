const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn")
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = (event) => {
    console.log(event);
}

const startRecording = () => {
    const videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.ondataavailable = handleVideoData;
    videoRecorder.start();
}

const getVideo = async () => {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop Recording";
        streamObject = stream;
        startRecording(stream); 
    } catch(error) {
        recordBtn.innerHTML = " Cant Record ";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }

}

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if(recorderContainer) {
    init()
}