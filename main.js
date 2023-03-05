// document.getElementById('').addEventListener('click', (e) =>{
// })

let character;
let isBubble = true;
let mins = 0;
let seconds = 0;
let timex;
let isOrientation = 'back';
let playing = false
const placementUI = document.getElementById("zappar-placement-ui");
const placementUI2 = document.getElementById('zappar-placement-ui-2');
const hotspot = document.getElementById('hotspot')
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
    if (check == true) {
        document.getElementById('background').style.display = 'none';
        document.getElementById('background-choose').style.display = 'block';
    } else {
        document.getElementById('terms-popup').style.display = 'block';
    }
})
// // Agreed Button
// document.getElementById('agreed-btn').addEventListener('click', (e) => {
//     document.getElementById('background').style.display = 'none';
//     document.getElementById('background-choose').style.display = 'block';
// })
//
document.getElementById('webbtn').addEventListener('click', (e) => {
    window.open('https://www.amway.my/artistrystudioskin', '_blank');
})
//
document.getElementById('terms-link').addEventListener('click', (e) => {
    document.getElementById('background').style.display = 'none';
    document.getElementById('terms-pg').style.display = 'block';
})
//
document.getElementById('terms-popup-cancelBtn').addEventListener('click', (e) => {
    document.getElementById('terms-popup').style.display = 'none';
})
//
document.getElementById('Go-to-Read-Btn').addEventListener('click', (e) => {
    document.getElementById('terms-popup').style.display = 'none';
    document.getElementById('terms-pg').style.display = 'block';
    document.getElementById('background').style.display = 'none';
})
//
document.getElementById('termspg-backBtn').addEventListener('click', (e) => {
    document.getElementById('terms-pg').style.display = 'none';
    document.getElementById('background').style.display = 'block';
})
//
document.getElementById('Alysaa-btn').addEventListener('click', (e) => {
    character = 'Alysaa';
    document.getElementById("StartRecordBtn").style.top = "10vh"
    document.getElementById("LearntheDanceBtn").style.top = "10vh"
    document.getElementById("HowdoesitworksBtn").style.top = "10vh"


    document.getElementById("txt-name").innerHTML = "Alyssa";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn-Border.png')";

    var image = document.getElementById('Dance-with-btn');
    image.style.backgroundImage = "url('./Assets/Dance-with-Alysaa.png')";

    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";

    // var image = document.getElementById('Alysaa-Nyokki');
    // image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";

    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
})
//
document.getElementById('Nyokki-btn').addEventListener('click', (e) => {
    character = 'Nyokki';

    document.getElementById("txt-name").innerHTML = "Nyokki";
    document.getElementById("StartRecordBtn").style.top = "10vh"
    document.getElementById("LearntheDanceBtn").style.top = "10vh"
    document.getElementById("HowdoesitworksBtn").style.top = "10vh"


    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn-Border.png')";

    var image = document.getElementById('Dance-with-btn');
    image.style.backgroundImage = "url('./Assets/Dance-with-Nyokki.png')";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";

    // var image = document.getElementById('Alysaa-Nyokki');
    // image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";

    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
})
//
// document.getElementById('Alysaa-Nyokki').addEventListener('click', (e) => {
//     character = 'Both';

//     document.getElementById("txt-name").innerHTML = "Alyssa & Nyokki";
//     document.getElementById("StartRecordBtn").style.top = "10vh"
//     document.getElementById("LearntheDanceBtn").style.top = "10vh"
//     document.getElementById("HowdoesitworksBtn").style.top = "10vh"


//     var image = document.getElementById('Alysaa-Nyokki');
//     image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn-Border.png')";

//     var image2 = document.getElementById('Dance-with-btn');
//     image2.style.backgroundImage = "url('./Assets/Dance-Alyssa-Nyokki.png')";

//     var image = document.getElementById('Alysaa-btn');
//     image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";

//     var image = document.getElementById('Nyokki-btn');
//     image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";

//     var image = document.getElementById('Show-your-moves');
//     image.style.backgroundImage = "url('./Assets/Show-Your-Moves.png')";
// })
//
document.getElementById('Show-your-moves').addEventListener('click', (e) => {
    character = 'None';

    document.getElementById("txt-name").innerHTML = "Show your moves";
    document.getElementById("txt-name").style.top = "30vh"
    document.getElementById("StartRecordBtn").style.top = "30vh"
    document.getElementById("LearntheDanceBtn").style.top = "30vh"
    document.getElementById("HowdoesitworksBtn").style.top = "30vh"


    var image = document.getElementById('Show-your-moves');
    image.style.backgroundImage = "url('./Assets/Show-Your-Moves-Border.png')";

    var image2 = document.getElementById('Dance-with-btn');
    image2.style.backgroundImage = "url('./Assets/Show-Your-Moves-Btn.png')";

    var image = document.getElementById('Alysaa-btn');
    image.style.backgroundImage = "url('./Assets/Alyssa-Btn.png')";

    var image = document.getElementById('Nyokki-btn');
    image.style.backgroundImage = "url('./Assets/Nyokki-Btn.png')";

    // var image = document.getElementById('Alysaa-Nyokki');
    // image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Btn.png')";
})
//
document.getElementById('Dance-with-btn').addEventListener('click', (e) => {

    document.getElementById('background-choose').style.display = 'none';
    document.getElementById('record-dance-ui').style.display = 'block';


    var image = document.getElementById('Thumbnail');
    // var image2 = document.getElementById('Thumbnail2');
    image.style.display = 'block';
    if (character == 'Alysaa') {
        placementUI.innerHTML = "Tap here to place Alysaa";
        // image2.style.backgroundImage = "url('')";
        image.style.backgroundImage = "url('./Assets/Alyssa-Img.png')";
    } else if (character == 'Nyokki') {
        placementUI.innerHTML = "Tap here to place Nyokki";
        // image2.style.backgroundImage = "url('')";
        image.style.backgroundImage = "url('./Assets/Nyokki-Img.png')";
    } else if (character == 'Both') {
        placementUI.innerHTML = "Tap here to place Alysaa";
        placementUI2.innerHTML = "Tap here to place Nyokki";
        // image2.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Img.png')";
        image.style.backgroundImage = "url('./Assets/Alyssa-Nyokki-Img.png')";
    } else {
        hotspot.setAttribute('visible',false)
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

    if (character == 'Alysaa') {
       
        document.getElementById('learn-vid').setAttribute('src', './Assets/Dance-Vid-Alyssa.mp4');
        const v = document.getElementById('learn-vid');
        autoPlayCheck(v);


    } else if (character == 'Nyokki') {
        
        document.getElementById('learn-vid').setAttribute('src', './Assets/Dance-Vid-Nyokki.mp4');
        const v = document.getElementById('learn-vid');
        autoPlayCheck(v);

    } else if (character == 'Both') {
       
        document.getElementById('learn-vid').setAttribute('src', './Assets/Dance-Vid-Alyssa-Nyokki.mp4');
        const v = document.getElementById('learn-vid');
        autoPlayCheck(v);

    } else {
        document.getElementById('learn-vid').setAttribute('src', './Assets/Dance-Vid-Alyssa-Nyokki.mp4');
        const v = document.getElementById('learn-vid');
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

document.querySelector("#learn-vid").addEventListener('ended', (e) => {
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
            // system.camera.start(system.userFacing);
            system.camera.start();
            setTimeout(placement(), 4000);
            return;
        } else {
            ZapparThree.permissionDeniedUI();
        }
    });

})
//
document.getElementById('backBtn-Record').addEventListener('click', (e) => {

    document.getElementById('background-Record-Top').style.display = 'none';
    document.getElementById('background-Record-Bottom').style.display = 'none';
    document.getElementById('record-dance-ui').style.display = 'block';

    document.querySelector('#arvid').setAttribute('visible', 'false');
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
            // system.camera.start(system.userFacing);
            system.camera.start();
            setTimeout(placement(), 4000);
            return;
        } else {
            ZapparThree.permissionDeniedUI();
        }
        // if (this.el.children.length > 0) {
        //     this.el.setAttribute("visible", true);
        // } 
    });


})

function placement() {
    let myInstantTracker = document.getElementById("my-instant-tracker");
    let myInstantTracker2 = document.getElementById("my-instant-tracker-2");
    // placementUI.innerHTML = "Tap here to place";
    placementUI.style.display = 'block';
    
    myInstantTracker.setAttribute('visible', true);
    // placementUI.addEventListener("click", () => {
    //     myInstantTracker.setAttribute("zappar-instant", "placement-mode: false;");
    //     placementUI.style.display ='none';
    // })
    let hasPlaced = false;
    placementUI.addEventListener("click", () => {
        hasPlaced = true;
        myInstantTracker.setAttribute("zappar-instant", "placement-mode: false;");
        placementUI.style.display = 'none';
        // ...hide our hotspot...
        hotspot.setAttribute("visible", "false");
        setTimeout((e) => {
            const ARvideo = document.getElementById('arvid');
            ARvideo.removeAttribute('material');
            if (character == 'Alysaa' && hasPlaced) {
                
                ARvideo.setAttribute('material', 'shader: chromakey; src: #alysaa; color: 0.1 0.9 0.2;');
                const v = document.getElementById('alysaa');
                autoPlayCheck(v);
                setTimeout(() => {
                    ARvideo.setAttribute('visible', 'true');
                }, 200)
            } else if (character == 'Nyokki' && hasPlaced) {
                ARvideo.setAttribute('material', 'shader: chromakey; src: #nyokki; color: 0.1 0.9 0.2;');
                const v = document.getElementById('nyokki');
                autoPlayCheck(v);
                setTimeout(() => {
                    ARvideo.setAttribute('visible', 'true');
                }, 200)

            } else if (character == 'Both' && hasPlaced) {

                ARvideo.setAttribute('material', 'shader: chromakey; src: #alysaa; color: 0.1 0.9 0.2;');
                const v = document.getElementById('alysaa');
                autoPlayCheck(v);
                setTimeout(() => {
                    ARvideo.setAttribute('visible', 'true');
                }, 200)
                

                placementUI2.style.display = 'block';
                myInstantTracker2.setAttribute('visible', true);
                placementUI2.addEventListener("click", () => {
                    myInstantTracker2.setAttribute("zappar-instant", "placement-mode: false;");
                    placementUI2.style.display = 'none';
                    document.getElementById('hotspot2').setAttribute('visible',false);
                    document.getElementById('arvid2').setAttribute('material', 'shader: chromakey; src: #nyokki; color: 0.1 0.9 0.2;');
                    const v2 = document.getElementById('nyokki');
                    autoPlayCheck(v2);
                    document.getElementById('arvid2').setAttribute('visible', 'true');
                    })
                    
            } else {
                ARvideo.setAttribute('visible', false);
            }
        }, 200)
    })

    // let myFaceTracker = document.getElementById("my-face-tracker");

    // myFaceTracker.addEventListener("zappar-visible", () => {
    //     console.log("Face has become visible");
    //     myFaceTracker.firstElementChild.setAttribute('visible', true)
    // });

    // myFaceTracker.addEventListener("zappar-notvisible", () => {
    //     console.log("Face is no longer visible");
    //     myFaceTracker.firstElementChild.setAttribute('visible', false)
    // });

}

//
document.getElementById('HowdoesitworksBtn-learn').addEventListener('click', (e) => {

    document.getElementById('record-dance-ui').style.display = 'none';
    document.getElementById('background-works').style.display = 'block';

})
document.getElementById('camera-flip').addEventListener('click', (e) => {
    if (isOrientation == 'front') {
        document.getElementById('camera').setAttribute('zappar-camera', 'user-facing:false');
        isOrientation = 'back'
    } else {
        document.getElementById('camera').setAttribute('zappar-camera', 'user-facing:true');
        isOrientation = 'front'
    }

})
document.getElementById('Bubble-btn').addEventListener('click', (e) => {
    if (isBubble) {
        var image = document.getElementById('Bubble-btn');
        image.style.backgroundImage = "url('./Assets/Bubble-Btn.png')";
        document.getElementById('bubblesvid').setAttribute('visible', false);
        isBubble = false
    } else {
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
    }, 1100)


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

function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds < 10) {
            document.querySelector("#Timer-Bottom").innerHTML = `00:0${seconds}`;
        } else {
            document.querySelector("#Timer-Bottom").innerHTML = `00:${seconds}`;
        }


        startTimer();
    }, 1000);
}

// Video Recorder Code
let isRecording = false;
document.getElementById('Record-btn').addEventListener('click', () => {
    document.getElementById('Record-btn').style.display = "none"
    document.getElementById("txt-record").innerHTML = "Recording...";
    // document.getElementById('countdowntimer').style.display = 'block';
    // const countdownVideo = document.getElementById('countdown');
    // countdownVideo.style.display = "none"
    // //Play Video
    // countdownVideo.play();
    const countdownTest = document.querySelector('#countdown-test')
    countdownTest.play();
    document.querySelector('#countvid').setAttribute('visible', 'true')

    countdownTest.addEventListener('ended', (e) => {
        document.getElementById('bubbles').muted = true;
        document.getElementById('bubbles').play();
        document.getElementById('Record-btn').style.display = 'none';
        document.getElementById('Stop-Record-btn').style.display = 'block';
        document.querySelector('#countvid').setAttribute('visible', 'false');
        document.getElementById('bubblesvid').setAttribute('visible', true);
        // document.getElementById('countdowntimer').style.display = 'none';
        if (character == 'Alysaa') {
            const bigBuckBunnyVideo = document.getElementById('alysaa');
            bigBuckBunnyVideo.muted = false;
            bigBuckBunnyVideo.play();
            
        } else if (character == 'Nyokki') {
            const bigBuckBunnyVideo = document.getElementById('nyokki');
            bigBuckBunnyVideo.muted = false;
            bigBuckBunnyVideo.play();
            
        } else if (character == 'Both') {
            document.getElementById('alysaa').muted = true;
            document.getElementById('alysaa').play();
            document.getElementById('nyokki').play();
        } else {
            const bigBuckBunnyVideo = document.getElementById('nyokki');
            bigBuckBunnyVideo.muted = false;
            bigBuckBunnyVideo.play();
        }
        // console.log(window.innerHeight, window.innerWidth)
        /*  document.querySelector('#bubblesvid').setAttribute('width', `${window.innerWidth/100}`)
          document.querySelector('#bubblesvid').setAttribute('height', `${window.innerHeight/100}`)
          document.querySelector('#bubblesvid').setAttribute('visible', 'true')*/

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

            var recorder = new MediaRecorder(finalStream);

            let chunks = [];

            recorder.ondataavailable = (e) => {
                chunks.push(e.data);
            };

            // recorder.startRecording();
            recorder.start(1000);

            recorder.onstop = stopRecording
            isRecording = true;
            let dataURL;
            
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


            function stopRecordFunc() {
                recorder.stop();
            }

            function stopRecording() {
                clearTimeout(timex);
                mins = 0;
                seconds = 0;
                document.getElementById('background-Record-Top').style.display = 'none';
                document.getElementById('background-Record-Bottom').style.display = 'none';
                document.getElementById('Share-ui').style.display = 'block';
    
                const blob = new Blob(chunks, { type: "video/mp4" });
                console.log('blob', blob);
                console.log('chunks', chunks);
                dataURL = URL.createObjectURL(blob);
                document.getElementById('share-vid').setAttribute('src', dataURL);
                autoPlayCheck(document.getElementById('share-vid'));
                document.getElementById('share-vid-playBtn').addEventListener('click', (e) => {
                    document.getElementById('share-vid').play();
                    document.getElementById('share-vid-playBtn').remove();
                })
                const fileToInclude = new File([blob], `artistry_${Date.now()}.mp4`, {
                    type: 'video/mp4',
                    lastModified: Date.now(),
                  })
                const shareObject = {
                    title: '',
                    text: '',
                    files: [fileToInclude],                       
                }
                isRecording = false;
                document.getElementById('Record-btn').style.display = 'block';
                document.getElementById('Stop-Record-btn').style.display = 'none';
                document.getElementById("txt-record").innerHTML = "Tap button to start recording";
                audioStream.stop();
                canvasStream.stop();
                document.getElementById('share-btn').addEventListener('click', (e) => {
                    try {
                        if (navigator.share && navigator.canShare({files: [fileToInclude]})) {
                            navigator.share(shareObject)
                                .then(() => console.log('Successful share'))
                                .catch((error) => console.log('Error sharing', error));
                        } else {
                            alert("Web Share API is not supported in your browser.")
                        }
                    } catch {
                        alert("Sharing is not supported in your browser")
                    }
                });
                // document.getElementById('save-btn').addEventListener('click', (e) => {
                //     downloadFile(dataURL);
                // });
                document.getElementById('share-web-btn').addEventListener('click', (e) => {
                    window.open('https://www.amway.my/artistrystudioskin', '_blank');
                })
            }

            document.querySelector('#Stop-Record-btn').addEventListener('click', (e) =>{
                document.getElementById('alysaa').pause();
                document.getElementById('nyokki').pause();
                document.getElementById('both').pause();
                stopRecordFunc();
            });
        });
        
    });


    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
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
// bitmaps cause texture issues on iOS this workaround prevents black textures and crashes
const IS_IOS =
    /^(iPad|iPhone|iPod)/.test(window.navigator.platform) ||
    (/^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1)
if (IS_IOS) {
    window.createImageBitmap = undefined
}
//Orientation change CSS
function getOrientation(){
    var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    return orientation;
    }
    window.onresize = function(){
    Logorecorder = document.getElementById('Logo-recordscr');
    Backbtn = document.getElementById('backBtn-Record');
    Bottombtn = document.getElementById('background-Record-Bottom');
    BottomWhite = document.getElementById('Bottom-white-bg');
      const o = getOrientation();
      if(o === 'Landscape'){
        const Ele = document.getElementById('background-Record-Top')
        enterFullScreen(Ele);
        // alert('Please change device orientation to Potrait for best viewing experience')
        Logorecorder.style.width = '20vw'
        Logorecorder.style.height = '10vw'
        Logorecorder.style.left = '40vw'
        Logorecorder.style.top = '2vw'
        Backbtn.style.width = '11vw'
        Backbtn.style.height = '3vw'
        Backbtn.style.left = '3vw'
        Backbtn.style.top = '3vw'
        Bottombtn.style.width = '30%'
        Bottombtn.style.height = '50%'
        Bottombtn.style.left = '70%'
        Bottombtn.style.transformOrigin = 'bottom right'
        Bottombtn.style.transform = 'rotate(-90deg)'
        BottomWhite.style.width = '57vw'
        BottomWhite.style.height = '18vw'
        BottomWhite.style.left = '30vw'
        document.getElementById('Bubble-btn').style.left = '30vw'
        document.getElementById('Record-btn').style.left = '54vw'
        document.getElementById('Stop-Record-btn').style.left = '54vw'
        document.getElementById('camera-flip').style.left = '76vw'
        document.getElementById('txt-record').style.left = '33vw'
        document.getElementById('Timer-Bottom').style.left = '48vw'
        document.getElementById('Timer-Bottom').style.bottom = '33vh'
      }else{
        Logorecorder.style.width = '40vw'
        Logorecorder.style.height = '20vw'
        Logorecorder.style.left = '30vw'
        Logorecorder.style.top = '8vw'
        Backbtn.style.width = '15vw'
        Backbtn.style.height = '4vw'
        Backbtn.style.left = '10vw'
        Backbtn.style.top = '12vw'
        Bottombtn.style.width = '100%'
        Bottombtn.style.height = '30%'
        Bottombtn.style.left = '0%'
        Bottombtn.style.transformOrigin = ''
        Bottombtn.style.transform = ''
        BottomWhite.style.width = '100vw'
        BottomWhite.style.height = '30vw'
        BottomWhite.style.left = '0vw'
        document.getElementById('Bubble-btn').style.left = '6vw'
        document.getElementById('Record-btn').style.left = '45vw'
        document.getElementById('Stop-Record-btn').style.left = '45vw'
        document.getElementById('camera-flip').style.left = '85vw'
        document.getElementById('txt-record').style.left = '25vw'
        document.getElementById('Timer-Bottom').style.left = '40vw'
        document.getElementById('Timer-Bottom').style.bottom = '17vh'
      }
    }
    function enterFullScreen(element) {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        }else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();     // Firefox
        }else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();  // Safari
        }else if(element.msRequestFullscreen) {
          element.msRequestFullscreen();      // IE/Edge
        }
      };
      
    //   let btn = document.getElementById("full_screen");
    //   btn.addEventListener("click", function(){
    //     let videoEle = document.querySelector('video');
        
    //   });
      
      document.addEventListener('fullscreenchange', (event) => {
        if (document.fullscreenElement) {
          console.log('Entered fullscreen:', document.fullscreenElement);
        } else {
          console.log('Exited fullscreen.');
        }
      });