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

const patchesArray = ["init", "denseLead", "blah array 02","denseLead2"];     ////should/can  i dynamically populate array from teaches folder content???
const patchControls = document.getElementById('patch-controls');
let patchNumberDisplay = document.getElementById('patch-number-display');
let patchName = document.getElementById('patch-name');
var selectedPatch = 0;



patchControls.addEventListener('click', function(e){
    if (e.target.id === "patch-up-btn" && selectedPatch < (patchesArray.length - 1)){
        selectedPatch++
        patchNumberDisplay.innerHTML = `0${selectedPatch}`;
        patchName.innerHTML = patchesArray[selectedPatch];
        console.log(selectedPatch);
    }
    else if (e.target.id === "patch-down-btn" && selectedPatch > 0){
            selectedPatch--;
            patchNumberDisplay.innerHTML = `0${selectedPatch}`;
            patchName.innerHTML = patchesArray[selectedPatch];
            console.log(selectedPatch);
    }    
})

////////////////////////////////////////////INIT PATCH TRIGGERS TONE JS SYNTH////////////////////////////////////////////

    // event listener for tone JS 
keyBoard.addEventListener('mousedown', function(e){
    if(selectedPatch === 0) {
    console.log(e.target.id)
    synth.triggerAttackRelease(e.target.id, "8n")
}})


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
    if (selectedPatch !== 0){           //  CHORUS (LONGER NOTES) MULTIPLE KEYS AT ONCE chords?
    console.log(e.target.id)                                // nth child or data attribute number??
    new Audio(`assets/patches/patch${selectedPatch}/denseLead/${e.target.id}.mp3`).play()
}})                                            ///denseLead changed 
                                        //to foler path if dynamic
      
////////////////////////////////KEYBOARD////////////////////////////////////////////////////////////////////////

let octaveNum = 6; //user input??
let keyboardString ="";
renderKeyBoard(octaveNum)

function renderKeyBoard(octs) {
for (let i = 3; i <= octs; i++) {                   //nth child on divs to make this dryer??
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
                    <div class="blackKey" ID="Ab${i}"></div>
                    </div>
                    <div class="whiteKey" id="A${i}">
                    <div class="blackKey" id="Bb${i}"></div>
                    </div>
                    <div class="whiteKey" ID="B${i}">
                    <div class="blackKey" id="blank2"></div>
                    </div>`)
                    
keyBoard.innerHTML = keyboardString;
}};


/////////////////////////////////METRONOME///////////////////////////////////////////////////

var metroSlider = document.getElementById('metro-slider');
var metroSliderBPM = 120;

/*
metroSlider.addEventListener("change", function() { 
  metroSliderBPM = metroSlider.value;  
})
*/

metroSliderBPM = setInterval(function() {
    metroSliderBPM = metroSlider.value;
    return metroSliderBPM;
  }, 1)

let metronomePic = document.getElementById('met-image');
let metControls = document.getElementById('met-controls');
let metronomeSpan = document.getElementsByClassName('metronome-span');

var metRunning;

metControls.addEventListener('click', function(e){
    if (e.target.id === "met-start-btn"){
        clearTimeout(metRunning);
        metroFunc(60000 / metroSliderBPM);
    }
    else if (e.target.id === "met-stop-btn"){
        clearTimeout(metRunning);
        metronomePic.src="assets/images/metUp.jpg"
    }  
    else if (e.target.id === "metro-slider"){
        metronomeSpan.innerHTML = metroSliderBPM;     //BUG BPM DISSAPEARS AFTER LEAVING
        clearTimeout(metRunning);
        metroFunc(60000 / metroSliderBPM);
    } console.log(e.target.id)
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
//MOUSE click EVENT is clunky buggy with stuck sound options?  mousedown better maybe??



/////////////////////////////ACCOMPANY CONTROLS////////////////////////////////////////////////

/////////////////////////////BACKING TRACK controls/////////////////////////////////////////////



const popTrack = document.getElementById('pop-track');
const rockTrack = document.getElementById('rock-track');
const hipHopTrack = document.getElementById('hip-hop-track');
const folkTrack = document.getElementById('folk-track');

function togglePlay(song) {
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
let selectedOctave = 4;

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
    
    if (selectedPatch === 0){
        synth.triggerAttackRelease(keyStroke + selectedOctave, "8n")
    }    
    else {
        new Audio(`assets/patches/patch${selectedPatch}/denseLead/${keyStroke}${selectedOctave}.mp3`).play();
    }
}); 
    


    

/*
    case "ArrowLeft" :
        selectedOctave--;
        console.log(selectedOctave)
        break;
    case "ArrowRight" :
        selectedOctave++;
        console.log(selectedOctave)
        break;
    
*/

//     we tyu
//    asd fghj   ArrowLeft  ArrowRight   ArrowUp   ArrowDown   space in blank try blank space 



//render.com   deploy with cos can use for backend and full stack as well









