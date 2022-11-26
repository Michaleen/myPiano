///////////////////////////////////////SOUNDS////////////////////////////////////////////////////////////

//creates a synth and connect it to the main output (speakers)
const synth = new Tone.PolySynth().toDestination();
const keyBoard = document.getElementById('key-board');

// event listener for tone JS
/*
keyBoard.addEventListener('click', function(e){
    console.log(e.target.id)
    synth.triggerAttackRelease(e.target.id, "8n")
})
*/

//TOGGLE event listener for each patch or DRYER ??,          layer sounds??

////////////////////////////////////////SOUND BANK PATCHES/////////////////////////////////////////////////////////////////

const patchesArray = ["init", "denseLead", "empty debug","denseLead2"];     ////should/can  i dynamically populate array from teaches folder content???
const patchControls = document.getElementById('patch-controls');
let patchNumberDisplay = document.getElementById('patch-number-display');
let patchName = document.getElementById('patch-name');
var selectedPatch = 0;



patchControls.addEventListener('click', function(e){
    if (e.target.id === "patch-up-btn" && selectedPatch < (patchesArray.length - 1)){
        selectedPatch++
        patchNumberDisplay.innerHTML = `0${selectedPatch}`;
        patchName.innerHTML = patchesArray[selectedPatch];
    }
    else if (e.target.id === "patch-down-btn" && selectedPatch > 0){
            selectedPatch--;
            patchNumberDisplay.innerHTML = `0${selectedPatch}`;
            patchName.innerHTML = patchesArray[selectedPatch];
    }    
})

///////////////////////////////////////////BASS SWITCH//////////////////////////////////////////////////////////
let bassCheckbox = document.getElementById('bass-checkbox');
let bassOctave = 0;
let isBassChecked = false;
noteNoOctave = "";

/*

bassCheckbox.addEventListener('click', function(){
    bassCheck()
})
*/

function bassCheck(note) {
    if (bassCheckbox.checked) {
        bassOctave = Number(note.slice(-1)) - 3;
        noteNoOctave = note.slice(0, -1);
        console.log(bassOctave);
        console.log(noteNoOctave);
        console.log(note);
        synth.triggerAttackRelease(noteNoOctave + bassOctave, "8n")
    }}




keyBoard.addEventListener('click', function(e){
    bassCheck(e.target.id);
    }
)



////////////////////////////////////////////INIT PATCH TRIGGERS TONE JS SYNTH////////////////////////////////////////////

    // event listener for tone JS 
keyBoard.addEventListener('mousedown', function(e){
    if(selectedPatch === 0) {
    synth.triggerAttackRelease(e.target.id, "8n")
    }
})


/////////////////////////////PATCH CONTROLS////////////////////////////////////////////////////
/*using event listener up in soundbank patches line 28 ish
const changePatch = document.getElementById('patch-controls');

changePatch.addEventListener('click', function(e){
    console.log(e.target.id);
    selectedPatch++
    console.log(selectedPatch)
})
*/








////////////////////////////////////KEYBOARD SOUNDS/////////////////////////////////////////////////////////////

keyBoard.addEventListener('click', function(e){
    if (selectedPatch !== 0){           //  CHORUS (LONGER NOTES) MULTIPLE KEYS AT ONCE chords? // nth child or data attribute number??
    new Audio(`assets/patches/patch${selectedPatch}/denseLead/${e.target.id}.mp3`).play()
}})                                               //denselead
                                        //to folder path if dynamic
      
////////////////////////////////KEYBOARD////////////////////////////////////////////////////////////////////////

let octaveNum = 6; //       user input??  NEED TO RENDER TO A DISPLAY AS WELL !!!!!!!!!!!
let keyboardString ="";
renderKeyBoard(octaveNum)

function renderKeyBoard(octs) {
for (let i = 3; i <= octs; i++) {                   //nth child on divs to make this even dryer??
    keyboardString += (`<div class="whiteKey" id="C${i}">      
                    <div class="blackKey" id="Db${i}"></div>
                    </div>
                    <div class="whiteKey" id="D${i}">
                    <div class="blackKey" id="Eb${i}"></div>
                    </div>
                    <div class="whiteKey" id="E${i}">
                    <div class="blackKey" id="blank1"></div>
                    </div>
                    <div class="whiteKey" id="F${i}">
                    <div class="blackKey" id="Gb${i}"></div>
                    </div>
                    <div class="whiteKey" id="G${i}">
                    <div class="blackKey" Id="Ab${i}"></div>
                    </div>
                    <div class="whiteKey" id="A${i}">
                    <div class="blackKey" Id="Bb${i}"></div>
                    </div>
                    <div class="whiteKey" Id="B${i}">
                    <div class="blackKey" id="blank2"></div>
                    </div>`)
                    
keyBoard.innerHTML = keyboardString;
}};


/////////////////////////////////METRONOME///////////////////////////////////////////////////

var metroSlider = document.getElementById('metro-slider');
var metroSliderBPM = 120;



metroSliderBPM = setInterval(function() {
    metroSliderBPM = metroSlider.value;
    return metroSliderBPM;
  }, 1)

let metronomePic = document.getElementById('met-image');
let metSlider = document.getElementById('metro-slider');
let metronomeSpan = document.getElementsByClassName('metronome-span');

var metRunning;

/*    THESE TWO CONDITIONS WERE PREVIOUSLY INSIDE THE METCONTROLS EVENT LISTENER FOR THE METRONOME START AND STOP BUTTONS
if (e.target.id === "met-start-btn"){
    clearTimeout(metRunning);                 //which condition to reduce to one button?????????
    metroFunc(60000 / metroSliderBPM);      // NEED ANOTHER TOGGLE FUNC SO JUST ONE BUTOON  (IS CHECKED ON CHECKBOX)
}
else if (e.target.id === "met-stop-btn"){
    clearTimeout(metRunning);
    metronomePic.src="assets/images/metUp.jpg"
}  
else 
*/


metSlider.addEventListener('click', function(){
        metronomeSpan.innerHTML = metroSliderBPM;  //NOW CHANGE THIS TO JUST EVENT LISTENER ON JUST "metro-slider"
        clearTimeout(metRunning);
        metroFunc(60000 / metroSliderBPM);
       
})

let tick = true;
function metroFunc(metroInterval) {
    metRunning = setTimeout(function () {
        new Audio(`assets/images/metroTick.WAV`).play();
        tick = tick !== true;
        tick === true ? metronomePic.src="assets/images/metRight.jpg" : metronomePic.src="assets/images/metLeft.jpg";
        metroFunc(metroInterval);
    }, metroInterval );
}



let metronomeToggleButton = document.getElementById('metronome-toggle-btn')
var flipperBool = false;

metronomeToggleButton.addEventListener('click', function(){
       
    flipperBool = flipperBool !== true;
    console.log(flipperBool)
    if (flipperBool === true){
        clearTimeout(metRunning);                 //which condition to reduce to one button?????????
        metroFunc(60000 / metroSliderBPM);
        console.log(flipperBool);
    }
    else if (flipperBool === false){
        clearTimeout(metRunning);
        metronomePic.src="assets/images/metUp.jpg"
        console.log(flipperBool);
    }

})




//MOUSE click EVENT is clunky buggy with stuck sound options?  mousedown better maybe??



/////////////////////////////ACCOMPANY CONTROLS////////////////////////////////////////////////

/////////////////////////////BACKING TRACK controls/////////////////////////////////////////////



const popTrack = document.getElementById('pop-track');
const rockTrack = document.getElementById('rock-track');
const hipHopTrack = document.getElementById('hip-hop-track');
const folkTrack = document.getElementById('folk-track');

const backingTrackDiv = document.getElementById('backing-track-div');

backingTrackDiv.addEventListener('click', function(e){
    if (e.target.id === 'pop-btn') {
        togglePlay(popTrack);
    }
    else if (e.target.id === 'rock-btn') {
        togglePlay(rockTrack);
    }    
    else if (e.target.id === 'hip-hop-btn') {
        togglePlay(hipHopTrack);
    }
    else if (e.target.id === 'folk-btn') {
        togglePlay(folkTrack);
    }
})

function togglePlay(song) {
    if (song === popTrack){
        rockTrack.pause();              //HOW to DRY THIS UP??
        hipHopTrack.pause();
        folkTrack.pause();
    }
    else if (song === rockTrack){
        popTrack.pause();
        hipHopTrack.pause();
        folkTrack.pause();
    }
    else if (song === hipHopTrack){
        rockTrack.pause();
        popTrack.pause();
        folkTrack.pause();
    }
    else if (song === folkTrack){
        rockTrack.pause();
        hipHopTrack.pause();
        popTrack.pause();
    }
  return song.paused ? song.play() : song.pause();
};


/*

function togglePlay(song) {
    return song.paused ? song.play() : song.pause();
  };
*/



//limit selection to only one  track at a time   this block was for using check boxes instead i use button now
/*
var checks = document.querySelectorAll(".backing-selector");
var max = 1;
for (var i = 0; i < checks.length; i++)                 // function infinite loop:
  checks[i].onclick = selectiveCheck;                //if (!understand && brain is overheating) { read through again; will defo figure it out next time around;};
function selectiveCheck (event) {                       // else {your in denial, brain probably melted; readthrough again}
  var checkedChecks = document.querySelectorAll(".backing-selector:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}
*/
/*
backingTrackDiv = document.getElementById('backing-track-div');

backingTrackDiv.addEventListener('mousedown', function(){
    setTimeout (function() {
    chosenBackingTrack = backingTrackDiv.getElementsByClassName('.backing-selector');
    console.log(chosenBackingTrack.id);
} , 400)
})
*/
/*
popCheckBox = document.getElementById('pop-check-box')
rockCheckBox = document.getElementById('rock-check-box')
hipHopCheckBox = document.getElementById('hip-hop-check-box')

popCheckBox.addEventListener('click', function(e) {
    console.log(e.target.id);
    if (e.target.id.checked == true) {new Audio(`assets/backingTracks/pop-check-box.wav`).play()}
    
                // new Audio(`assets/images/metroTick.WAV`).stop()    this is a nonsense guess

  
    
})

*/



///////////////////////////////MAPPING TO KEYBOARD//////////////////////////////////////////////

/*keydown  for notes EVENT*/
let keyStroke = "";
var selectedOctave = 6;

document.addEventListener('keydown', function(e){
    switch(e.key){
    case "a" :
        keyStroke = "C";
        break;
    case "w" :
        keyStroke = "Db";
        break;
    case "s" :
        keyStroke = "D";
        break;
    case "e" :
        keyStroke = "Eb";
        break;
    case "d" :
        keyStroke = "E";
        break;
    case "f" :
        keyStroke = "F";
        break;
    case "t" :
        keyStroke = "Gb";
        break;
    case "g" :
        keyStroke = "G";
        break;
    case "y" :
        keyStroke = "Ab";
        break;
    case "h" :
        keyStroke = "A";
        break;
    case "u" :
        keyStroke = "Bb";
        break;
    case "j" :
        keyStroke = "B";
        break;
    default :
        keyStroke = "";
        
        
    }
    
    if ((selectedPatch === 0) && bassCheckbox.checked){
        synth.triggerAttackRelease(keyStroke + Number((selectedOctave) - 3)," 8n");
        synth.triggerAttackRelease(keyStroke + selectedOctave, "8n");
       
    } 
    else if ((selectedPatch === 0) && (bassCheckbox.checked === false)) {
        synth.triggerAttackRelease(keyStroke + selectedOctave, "8n")
    }    
    else if ((selectedPatch !== 0) && bassCheckbox.checked) { 
        new Audio(`assets/patches/patch${selectedPatch}/denseLead/${keyStroke}${selectedOctave}.mp3`).play();
        new Audio(`assets/patches/patch${selectedPatch}/denseLead/${keyStroke}${Number(selectedOctave) - 3}.mp3`).play();
    }
    else {
        new Audio(`assets/patches/patch${selectedPatch}/denseLead/${keyStroke}${selectedOctave}.mp3`).play();
    }
});



//keydown for octave change
document.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight" && selectedOctave < 6) {
        selectedOctave++;
        console.log(selectedOctave)
    }    
    else if (e.key === "ArrowLeft" && selectedOctave > 3) {
        selectedOctave--;
        console.log(selectedOctave);
    }
    else if (e.key === "ArrowUp" && selectedPatch < (patchesArray.length - 1)){
        selectedPatch++
        patchNumberDisplay.innerHTML = `0${selectedPatch}`;
        patchName.innerHTML = patchesArray[selectedPatch];
    }
    else if (e.key === "ArrowDown" && selectedPatch > 0){
        selectedPatch--
        patchNumberDisplay.innerHTML = `0${selectedPatch}`;
        patchName.innerHTML = patchesArray[selectedPatch];
    }
})
    

/* octave selector attempt 1
 document.addEventListener('keydown', function(e){
    switch(e.key){
    case C:
        switch(selectedOctave){
            case selectedOctave > 3 :
        }
        selectedOctave--;
        console.log(selectedOctave)
        break;
    case "ArrowRight" :
        selectedOctave++;
        console.log(selectedOctave)
        break;
        default :
        keyStroke = "";
    }
});
    
*/

 /*octave selector  attempt 2
 document.addEventListener('keydown', function(e){
    switch(true){   
    case ("ArrowLeft" === 1)/* && (selectedOctave > 3) :
    selectedOctave--
    console.log(selectedOctave)
    break;
    case ("ArrowRight" === 1) /*&& (selectedOctave > 3) :
    selectedOctave++
    console.log(selectedOctave)
    break;
    }
});

*/

//ArrowLeft  ArrowRight   ArrowUp   ArrowDown   space in blank try blank space 



//render.com   deploy with cos can use for backend and full stack as well









