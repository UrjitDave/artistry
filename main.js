// document.getElementById('').addEventListener('click', (e) =>{
// })

let character;
let isBubble = true;
let mins =0;
let seconds =0;
let timex;
let isOrientation = 'front';
let playing = false
const clickAnchor = (properties) => {
    const anchor = document.createElement('a')
    Object.assign(anchor, properties)
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
} 
const downloadFile = (currentDownloadUrl) => {
    clickAnchor({
      href: currentDownloadUrl,
      download: 'artistry.mp4',
    })
  
}
document.getElementById('startbtn').addEventListener('click', (e) => {

    let check = document.querySelector('#cb').checked;
    if(check == true){
        document.getElementById('background').style.display = 'none';
        document.getElementById('background-choose').style.display = 'block';
    }
    else{
        document.getElementById('terms-popup').style.display = 'block';
    }
})
// // Agreed Button
// document.getElementById('agreed-btn').addEventListener('click', (e) => {
//     document.getElementById('background').style.display = 'none';
//     document.getElementById('background-choose').style.display = 'block';
// })
//
document.getElementById('webbtn').addEventListener('click', (e) =>{
    window.open('https://www.amway.my/artistrystudioskin','_blank');
})
//
document.getElementById('terms-link').addEventListener('click', (e) =>{
    document.getElementById('background').style.display = 'none';
    document.getElementById('terms-pg').style.display = 'block';
})
//
document.getElementById('terms-popup-cancelBtn').addEventListener('click', (e) =>{
    document.getElementById('terms-popup').style.display = 'none';
})
//
document.getElementById('Go-to-Read-Btn').addEventListener('click', (e) =>{
    document.getElementById('terms-popup').style.display = 'none';
    document.getElementById('terms-pg').style.display = 'block';
    document.getElementById('background').style.display = 'none';
})
//
document.getElementById('termspg-backBtn').addEventListener('click', (e) =>{
    document.getElementById('terms-pg').style.display = 'none';
    document.getElementById('background').style.display = 'block';
})
//
document.getElementById('Alysaa-btn').addEventListener('click', (e) =>{
    character = 'Alysaa';

    document.getElementById("txt-name").innerHTML = "Alyssa";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn-Border.png')";

    var image = document.getElementById('Dance-with-btn');
    image.style.backgroundImage = "url('./Assets/Dance-with-Alysaa.png')";

    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";

    var image = document.getElementById('Alysaa-Nyokki');
    image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";

    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
})
//
document.getElementById('Nyokki-btn').addEventListener('click', (e) =>{
    character = 'Nyokki';

    document.getElementById("txt-name").innerHTML = "Nyokki";

    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn-Border.png')";

    var image = document.getElementById('Dance-with-btn');
    image.style.backgroundImage = "url('./Assets/Dance-with-Nyokki.png')";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";

    var image = document.getElementById('Alysaa-Nyokki');
    image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";

    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
})
//
document.getElementById('Alysaa-Nyokki').addEventListener('click', (e) =>{
    character = 'Both';

    document.getElementById("txt-name").innerHTML = "Alyssa & Nyokki";

    var image = document.getElementById('Alysaa-Nyokki');
    image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn-Border.png')";

    var image2 = document.getElementById('Dance-with-btn');
    image2.style.backgroundImage = "url('./Assets/Dance-Alyssa-Nyokki.png')";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";

    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";
    
    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
})
//
document.getElementById('Show-your-moves').addEventListener('click', (e) =>{
    character = 'None';

    document.getElementById("txt-name").innerHTML = "";

    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves-Border.png')";

    var image2 = document.getElementById('Dance-with-btn');
    image2.style.backgroundImage = "url('./Assets/Show-Your-Moves-Btn.png')";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";
    
    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";

    var image = document.getElementById('Alysaa-Nyokki');
    image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";
})
//
document.getElementById('Dance-with-btn').addEventListener('click', (e) => {
   
        document.getElementById('background-choose').style.display = 'none';
        document.getElementById('record-dance-ui').style.display = 'block';

        
        
        var image = document.getElementById('Thumbnail');
        // var image2 = document.getElementById('Thumbnail2');
        image.style.display = 'block';
        if(character == 'Alysaa'){
            // image2.style.backgroundImage = "url('')";
            image.style.backgroundImage = "url('./Assets/Alyssa-Img.png')";
        }
        else if(character == 'Nyokki'){
            // image2.style.backgroundImage = "url('')";
            image.style.backgroundImage = "url('./Assets/Nyokki-Img.png')";
        }
        else if(character == 'Both'){
            
            // image2.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Img.png')";
            image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Img.png')";
        }
        else{

            image.style.display = 'none';
            // image2.style.backgroundImage = "url('')";
        }

      
    
    
})
//
document.getElementById('backBtn').addEventListener('click', (e) => {
  
        document.getElementById('record-dance-ui').style.display = 'none';
        document.getElementById('background-choose').style.display = 'block';
   
})
//
document.getElementById('HowdoesitworksBtn').addEventListener('click', (e) => {
   
        document.getElementById('record-dance-ui').style.display = 'none';
        document.getElementById('background-works').style.display = 'block';
  
})
//
document.getElementById('backBtn-works').addEventListener('click', (e) => {
  
    document.getElementById('background-works').style.display = 'none';
    document.getElementById('record-dance-ui').style.display = 'block';
    document.getElementById('background-learn').style.display = 'none';
    

})
//
document.getElementById('backBtn-learn').addEventListener('click', (e) => {
  
    document.getElementById('background-learn').style.display = 'none';
    document.getElementById('record-dance-ui').style.display = 'block';
    document.getElementById('PlayBtnImg').style.display = 'block';
    
    document.querySelector("#learn-vid").pause();
    // if(character == 'Alysaa'){
    //     document.querySelector("#Alyssa-vid").pause();
    // }
    // else if(character == 'Nyokki'){
    //     document.querySelector("#Nyokki-vid").pause();
    // }
    // else if(character == 'Both'){
    //     document.querySelector("#Alyssa-Nyokki-vid").pause();
    // }
    // else{
    //     document.querySelector("#Alyssa-Nyokki-vid").pause();
    // }
})
//
document.getElementById('LearntheDanceBtn').addEventListener('click', (e) => {
  
    document.getElementById('record-dance-ui').style.display = 'none';
    document.getElementById('background-learn').style.display = 'block';
   
                if(character == 'Alysaa'){
                    document.getElementById ('learn-vid').setAttribute('src','./Assets/Dance-Vid-Alyssa.mp4');
                    const  v = document.getElementById ('learn-vid');
                    autoPlayCheck(v);
                }
                else if(character == 'Nyokki'){
                    document.getElementById ('learn-vid').setAttribute('src','./Assets/Dance-Vid-Nyokki.mp4');
                    const  v = document.getElementById ('learn-vid');
                    autoPlayCheck(v);
                }
                else if(character == 'Both'){
                    document.getElementById ('learn-vid').setAttribute('src','./Assets/Dance-Vid-Alyssa-Nyokki.mp4');
                    const  v = document.getElementById ('learn-vid');
                    autoPlayCheck(v);
                }
                else{
                     document.getElementById ('learn-vid').setAttribute('src','./Assets/Dance-Vid-Alyssa-Nyokki.mp4');
                     const  v = document.getElementById ('learn-vid');
                    autoPlayCheck(v);
                }
})
// play btn
const PlaybtnImg = document.querySelector('#PlayBtnImg');

PlaybtnImg.addEventListener("click", event => {
document.querySelector("#learn-vid").play();
playing = true;
document.getElementById('PlayBtnImg').style.display = 'none';
});

document.querySelector("#learn-vid").addEventListener('ended', (e) =>{
    document.getElementById('PlayBtnImg').style.display = 'block';
    playing = false;
});


//
document.getElementById('StartRecordBtn').addEventListener('click', (e) => {
    
    document.getElementById('record-dance-ui').style.display = 'none';
    document.getElementById('background-Record-Top').style.display = 'block';
    document.getElementById('background-Record-Bottom').style.display = 'block';
    
    // document.getElementById("Countdownvid").setAttribute('material', 'shader:chromakey; src:#countdown; color:0 0 0;');

    
      //Zappar User Permissions
      ZapparThree.permissionRequest().then(granted => {

        //Default code for Aframe permissions
        const system = document.querySelector("a-scene").systems["zappar-camera"];
        system.permissionGranted = granted;
        if (granted) {
            system.camera.start(system.userFacing);
            setTimeout(placement(), 2000);
            return;
        }else {
            ZapparThree.permissionDeniedUI();
        }
    });
   
})
//
document.getElementById('backBtn-Record').addEventListener('click', (e) => {
  
    document.getElementById('background-Record-Top').style.display = 'none';
    document.getElementById('background-Record-Bottom').style.display = 'none';
    document.getElementById('record-dance-ui').style.display = 'block';
    
    document.querySelector('#arvid').setAttribute('visible','false');
    document.querySelector('#arvid').removeAttribute('material');
    document.querySelector("#Timer-Bottom").innerHTML = '00:00';
    isRecording = false
    
})
//
document.getElementById('StartRecordBtn-learn').addEventListener('click', (e) => {
  
    document.getElementById('background-learn').style.display = 'none';
    document.getElementById('background-Record-Top').style.display = 'block';
    document.getElementById('background-Record-Bottom').style.display = 'block';
    // document.querySelector('#arvid').setAttribute('visible','true');
    // document.getElementById("Countdownvid").setAttribute('material', 'shader:chromakey; src:#countdown; color:0 0 0;');
    // document.getElementById("Countdownvid").setAttribute('material', 'shader:chromakey; src:#countdown; color:0 0 0;');
    ZapparThree.permissionRequest().then(granted => {

        //Default code for Aframe permissions
        const system = document.querySelector("a-scene").systems["zappar-camera"];
        system.permissionGranted = granted;
        if (granted) {
            system.camera.start(system.userFacing);
            setTimeout(placement(), 2000);
            return;
        }else {
            ZapparThree.permissionDeniedUI();
        }
        // if (this.el.children.length > 0) {
        //     this.el.setAttribute("visible", true);
        // } 
    });
    
    
})
function placement(){
    let myInstantTracker = document.getElementById("my-instant-tracker");
    let myInstantTracker2 = document.getElementById("my-instant-tracker-2");
    const placementUI = document.getElementById("zappar-placement-ui");
    placementUI.style.display = 'block';
    myInstantTracker.setAttribute('visible',true);
    placementUI.addEventListener("click", () => {
        myInstantTracker.setAttribute("zappar-instant", "placement-mode: false;");
        placementUI.style.display ='none';
    })
    let myFaceTracker = document.getElementById("my-face-tracker");

    myFaceTracker.addEventListener("zappar-visible", () => {
        console.log("Face has become visible");
        myFaceTracker.firstElementChild.setAttribute('visible', true)
    });

    myFaceTracker.addEventListener("zappar-notvisible", () => {
        console.log("Face is no longer visible");
        myFaceTracker.firstElementChild.setAttribute('visible', false)
    });
   
    const ARvideo = document.getElementById('arvid');
    ARvideo.removeAttribute('material');
        if(character == 'Alysaa'){
            ARvideo.setAttribute('material', 'shader: chromakey; src: #alysaa; color: 0.1 0.9 0.2;');
            const  v = document.getElementById('alysaa');
            autoPlayCheck(v);
            autoPlayCheck(document.getElementById('bubbles'));
            ARvideo.setAttribute('visible','true');
        }
        else if(character == 'Nyokki'){
            ARvideo.setAttribute('material', 'shader: chromakey; src: #nyokki; color: 0.1 0.9 0.2;');
            const  v = document.getElementById('nyokki');
            autoPlayCheck(v);
            autoPlayCheck(document.getElementById('bubbles'));
            ARvideo.setAttribute('visible','true');
        }
        else if(character == 'Both'){
            ARvideo.setAttribute('material', 'shader: chromakey; src: #alysaa; color: 0.1 0.9 0.2;');
            const  v = document.getElementById('alysaa');
            autoPlayCheck(v);
            document.getElementById('arvid2').setAttribute('material', 'shader: chromakey; src: #nyokki; color: 0.1 0.9 0.2;');
            const  v2 = document.getElementById('nyokki');
            autoPlayCheck(v2);
            autoPlayCheck(document.getElementById('bubbles'));
            ARvideo.setAttribute('visible','true');
            document.getElementById('arvid2').setAttribute('visible','true');
            const placementUI2 = document.getElementById("zappar-placement-ui-2");
            placementUI2.style.display = 'block';
            myInstantTracker2.setAttribute('visible',true);
            placementUI2.addEventListener("click", () => {
                myInstantTracker2.setAttribute("zappar-instant", "placement-mode: false;");
                placementUI2.style.display ='none';
            })
        }
        else{
            ARvideo.setAttribute('visible',false);
        }

}

//
document.getElementById('HowdoesitworksBtn-learn').addEventListener('click', (e) => {
   
    document.getElementById('record-dance-ui').style.display = 'none';
    document.getElementById('background-works').style.display = 'block';

})
document.getElementById('camera-flip').addEventListener('click',(e) => {
    if(isOrientation == 'front'){
        document.getElementById('camera').setAttribute('zappar-camera','user-facing:false');
        isOrientation = 'back'
    }else {
        document.getElementById('camera').setAttribute('zappar-camera','user-facing:true');
        isOrientation = 'front'
    }

})
document.getElementById('Bubble-btn').addEventListener('click', (e) => {
    if(isBubble){
        var image = document.getElementById('Bubble-btn');
        image.style.backgroundImage = "url('./Assets/Bubble-Btn.png')";
        document.getElementById('bubblesvid').setAttribute('visible', false);
        isBubble = false
    } else{
        var image = document.getElementById('Bubble-btn');
        image.style.backgroundImage = "url('./Assets/Bubble-Btn-Border.png')";
        document.getElementById('bubblesvid').setAttribute('visible', true);
        
        isBubble = true
    }
   
})

document.getElementById('backBtn-Share').addEventListener('click', (e) => {
  
    // document.getElementById('background-Record-Top').style.display = 'block';
    // document.getElementById('background-Record-Bottom').style.display = 'block';
    // document.getElementById('Share-ui').style.display = 'none';
    window.location.reload();
            //Play Video
            // const bigBuckBunnyVideo = document.getElementById('nyokki');
            // bigBuckBunnyVideo.muted = false;
            // bigBuckBunnyVideo.pause();

})
// pre-play video as fix for black box bug (Android Only)



function autoPlayCheck(v) {
    v.muted = true
    const playPromise = v.play()
    setTimeout(() => {
      if (playPromise !== undefined) {
        playPromise.then((_) => {
        // Automatic playback started!
        // Show playing UI.
        // We can now safely pause video...
          console.log('inside play promise')
          v.pause()
          v.muted = false
        })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
          })
      }
    }, 1000)

    
    v.addEventListener('click', () => {
      if (!playing) {
        v.play()
        playing = true
      } else {
        v.pause()
        playing = false
      }
    })
  }
   
function startTimer(){
    timex = setTimeout(function(){
        seconds++;    
      if(seconds <10) {
        document.querySelector("#Timer-Bottom").innerHTML = `00:0${seconds}`;} else {
            document.querySelector("#Timer-Bottom").innerHTML =`00:${seconds}`;
        }
       
      
        startTimer();
    },1000);
  }
// Video Recorder Code
let isRecording = false;
document.getElementById('Record-btn').addEventListener('click', () => {
            
            document.getElementById("txt-record").innerHTML = "Recording...";
            document.getElementById('countdowntimer').style.display = 'block';
            const countdownVideo = document.getElementById('countdown');
            //Play Video
            countdownVideo.play();
            countdownVideo.addEventListener('ended', (e) =>{
                document.getElementById('countdowntimer').style.display = 'none';
                if(character == 'Alysaa'){
                    const bigBuckBunnyVideo = document.getElementById('alysaa');
                    bigBuckBunnyVideo.muted = false;
                    bigBuckBunnyVideo.play();
                    document.getElementById('bubbles').play();
                }
                else if(character == 'Nyokki'){
                    const bigBuckBunnyVideo = document.getElementById('nyokki');
                    bigBuckBunnyVideo.muted = false;
                    bigBuckBunnyVideo.play();
                    document.getElementById('bubbles').play();
                }
                else if(character == 'Both'){
                    const bigBuckBunnyVideo = document.getElementById('alysaa');
                    bigBuckBunnyVideo.muted = false;
                    bigBuckBunnyVideo.play();
                    const bigBuckBunnyVideo2 = document.getElementById('nyokki');
                    bigBuckBunnyVideo2.muted = false;
                    bigBuckBunnyVideo2.play();
                    document.getElementById('bubbles').play();
                }
                else{
                    const bigBuckBunnyVideo = document.getElementById('nyokki');
                    bigBuckBunnyVideo.muted = false;
                    bigBuckBunnyVideo.play();
                    document.getElementById('bubbles').play();
                }

                startTimer();

            getMp3Stream(function (audioStream) {
                const canvas = document.querySelector('canvas');
                var canvasStream = canvas.captureStream();

                var finalStream = new MediaStream();
                getTracks(audioStream, 'audio').forEach(function (track) {
                    finalStream.addTrack(track);
                });
                getTracks(canvasStream, 'video').forEach(function (track) {
                    finalStream.addTrack(track);
                });

                var recorder = RecordRTC(finalStream, {
                    type: 'video'
                });

                recorder.startRecording();
                isRecording = true;
                let dataURL;
                document.getElementById('Record-btn').style.display = 'none';
                document.getElementById('Stop-Record-btn').style.display = 'block';
                var stop = false;

                (function looper() {
                    if (stop) {
                        stopRecordFunc();
                        return;
                    }
                    setTimeout(looper, 100);
                })();

                var seconds = 15;
                var interval = setInterval(function () {
                    seconds--;
                }, 1000);

                setTimeout(function () {
                    clearTimeout(interval);
                    stop = true;
                }, seconds * 1000);

                function stopRecordFunc(){
                recorder.stopRecording(function () {
                    clearTimeout(timex);
                    mins =0;      
                    seconds =0;
                            document.getElementById('background-Record-Top').style.display = 'none';
                            document.getElementById('background-Record-Bottom').style.display = 'none';
                            document.getElementById('Share-ui').style.display = 'block';

                            var blob = recorder.getBlob();
                            console.log('blob', blob);
                            dataURL = URL.createObjectURL(blob);
                            document.getElementById ('share-vid').setAttribute('src',dataURL);
                            autoPlayCheck(document.getElementById ('share-vid'));
                            document.getElementById('share-vid-playBtn').addEventListener('click', (e) =>{
                                document.getElementById ('share-vid').play();
                                document.getElementById('share-vid-playBtn').remove();
                            })
                            const fileToInclude = new File([blob], 'artistry.mp4', {
                                  type: 'video/mp4',
                                  lastModified: Date.now(),
                                })
                            const shareObject = {
                                  title: 'Artristy WebAR',
                                  text: '#IamGlenGLow',
                                  files: [fileToInclude],
                                }
                            isRecording = false;
                            document.getElementById('Record-btn').style.backgroundImage = "url('./Assets/Recording-Btn.png')";
                            document.getElementById("txt-record").innerHTML = "Tap button to start recording";
                            audioStream.stop();
                            canvasStream.stop();
                            document.getElementById('share-btn').addEventListener('click', (e)=>{

                                if (navigator.share && navigator.canShare({ files: [fileToInclude] })) {
                                    navigator.share(shareObject)
                                        .then(() => console.log('Successful share'))
                                        .catch((error) => console.log('Error sharing', error));
                                } else {
                                    alert("Web Share API is not supported in your browser.")
                                }
                            });
                            document.getElementById('save-btn').addEventListener('click', (e) => {
                                downloadFile(dataURL);
                            });
                            document.getElementById('share-web-btn').addEventListener('click', (e)=>{
                            window.open('https://www.amway.my/artistrystudioskin','_blank');
                            })
                        });
                        
                    }
            });
            // document.getElementById('Stop-Record-btn').addEventListener('click', stopRecordFunc());
        });
    

        
        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        function getMp3Stream(callback) {
            var file = dataURLtoBlob(blobdataURL);
            var reader = new FileReader();
            reader.file = file;
            reader.onload = (function (e) {
                // Import callback function
                // provides PCM audio data decoded as an audio buffer
                context.decodeAudioData(e.target.result, function (buffer) {
                    createSoundSource(buffer, callback);
                });
            });
            reader.readAsArrayBuffer(reader.file);
        }

        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();
        var gainNode = context.createGain();
        gainNode.connect(context.destination);
        gainNode.gain.value = 0; // don't play for self

        function createSoundSource(buffer, callback) {
            var soundSource = context.createBufferSource();
            soundSource.loop = true;
            soundSource.buffer = buffer;
            soundSource.start(0, 0 / 1000);
            soundSource.connect(gainNode);
            var destination = context.createMediaStreamDestination();
            soundSource.connect(destination);

            // durtion=second*1000 (milliseconds)
            callback(destination.stream);
        }
    });
// Aframe Scripts

AFRAME.registerComponent('click-drag', {
    schema: {
        cameraId: {default: 'camera'},
        groundId: {default: 'ground'},
        dragDelay: {default: 300},
        riseHeight: {default: 1},
      },
      init() {
        this.camera = document.getElementById(this.data.cameraId)
        this.threeCamera = this.camera.getObject3D('camera')
        this.ground = document.getElementById(this.data.groundId)
    
        this.internalState = {
          fingerDown: false,
          dragging: false,
          distance: 0,
          startDragTimeout: null,
          raycaster: new THREE.Raycaster(),
          startPosition: new THREE.Vector3(),
        }
    
        this.fingerDown = this.fingerDown.bind(this)
        this.startDrag = this.startDrag.bind(this)
        this.fingerMove = this.fingerMove.bind(this)
        this.fingerUp = this.fingerUp.bind(this)
    
        this.el.addEventListener('mousedown', this.fingerDown)
        this.el.sceneEl.addEventListener('onefingermove', this.fingerMove)
        this.el.sceneEl.addEventListener('onefingerend', this.fingerUp)
        this.el.classList.add('cantap')  // Needs "objects: .cantap" attribute on raycaster.
      },
      tick() {
        if (this.internalState.dragging) {
          let desiredPosition = null
          if (this.internalState.positionRaw) {
            const screenPositionX = this.internalState.positionRaw.x / document.body.clientWidth * 2 - 1
            const screenPositionY = this.internalState.positionRaw.y / document.body.clientHeight * 2 - 1
            const screenPosition = new THREE.Vector2(screenPositionX, -screenPositionY)
    
            this.threeCamera = this.threeCamera || this.camera.getObject3D('camera')
    
            this.internalState.raycaster.setFromCamera(screenPosition, this.threeCamera)
            const intersects = this.internalState.raycaster.intersectObject(this.ground.object3D, true)
    
            if (intersects.length > 0) {
              const intersect = intersects[0]
              this.internalState.distance = intersect.distance
              desiredPosition = intersect.point
            }
          }
    
          if (!desiredPosition) {
            desiredPosition = this.camera.object3D.localToWorld(new THREE.Vector3(0, 0, -this.internalState.distance))
          }
    
          desiredPosition.y = this.data.riseHeight
          this.el.object3D.position.lerp(desiredPosition, 0.2)
        }
      },
      remove() {
        this.el.removeEventListener('mousedown', this.fingerDown)
        this.el.sceneEl.removeEventListener('onefingermove', this.fingerMove)
        this.el.sceneEl.removeEventListener('onefingerend', this.fingerUp)
        if (this.internalState.fingerDown) {
          this.fingerUp()
        }
      },
      fingerDown(event) {
        this.internalState.startPosition = this.el.object3D.position.clone()
        this.internalState.fingerDown = true
        this.internalState.startDragTimeout = setTimeout(this.startDrag, this.data.dragDelay)
        this.internalState.positionRaw = event.detail.positionRaw
      },
      startDrag(event) {
        if (!this.internalState.fingerDown) {
          return
        }
        this.internalState.dragging = true
        this.internalState.distance = this.el.object3D.position.distanceTo(this.camera.object3D.position)
      },
      fingerMove(event) {
        this.internalState.positionRaw = event.detail.positionRaw
      },
      fingerUp(event) {
        this.internalState.fingerDown = false
        clearTimeout(this.internalState.startDragTimeout)
    
        this.internalState.positionRaw = null
    
        if (this.internalState.dragging) {
          const endPosition = this.el.object3D.position.clone()
          this.el.setAttribute('animation__drop', {
            property: 'position',
            to: `${endPosition.x} ${this.internalState.startPosition.y} ${endPosition.z}`,
            dur: 300,
            easing: 'easeOutQuad',
          })
        }
        this.internalState.dragging = false
      },
});

// AFRAME.registerComponent('main-button', {
//     init: function () {

//         const ARvideo = document.getElementById('arvid');

//         if(character == 'Alysaa'){
//             ARvideo.setAttribute('material', 'shader: chromakey; src: #alyssa; color: 0.1 0.9 0.2;');
//         }
//         else if(character == 'Nyokki'){
//             ARvideo.setAttribute('material', 'shader: chromakey; src: #nyokki; color: 0.1 0.9 0.2;');
//         }
//         else if(character == 'both'){
//             ARvideo.setAttribute('material', 'shader: chromakey; src: #both; color: 0.1 0.9 0.2;');
//         }

//     },
// });
