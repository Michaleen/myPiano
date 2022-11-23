//creates a synth and connect it to the main output (speakers)
const synth = new Tone.Synth().toDestination();
const keyBoard = document.getElementById('key-board');

// event listener for tone JS 
/*keyBoard.addEventListener('click', function(e){
    console.log(e.target.id)
    synth.triggerAttackRelease(e.target.id, "8n")
})*/


//TOGGLE event listener for each patch or DRYER ??, layer sounds,

keyBoard.addEventListener('click', function(e){           //  CHORUS (LONGER NOTES) MULTIPLE KEYS AT ONCE chords?
    console.log(e.target.id)                                // nth child or data attribute number??
    console.log(e)
    new Audio(`assets/patches/denseLead/${e.target.id}.mp3`).play()
})
      


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




var metroSlider = document.getElementById('metro-slider');
var metroSliderBPM = 82;
let metroMS = 60000 / metroSliderBPM;
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


//MOUSE click EVENT is clunky buggy with stuck sound options?


//render.com   deploy with cos can use for backend and full stack as well









