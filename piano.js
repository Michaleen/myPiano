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

function renderKeyBoard(octs) {                    // BUG NONE OF THE BLACK KEYS ARE PLAYING
for (let i = 3; i <= octs; i++) {                   //nth child on divs to make this dryer??
    keyboardString += (`<div class="whiteKey" id="C${i}">      
                    <div class="blackKey" id="C#${i}"></div>
                    </div>
                    <div class="whiteKey" id="D${i}">
                    <div class="blackKey" id="D#${i}"></div>
                    </div>
                    <div class="whiteKey" id="E${i}">
                    <div class="blackKey" id="blank1"></div>
                    </div>
                    <div class="whiteKey" id="F${i}">
                    <div class="blackKey" id="F#${i}"></div>
                    </div>
                    <div class="whiteKey" id="G${i}">
                    <div class="blackKey" ID="G#${i}"></div>
                    </div>
                    <div class="whiteKey" id="A${i}">
                    <div class="blackKey" id="A#${i}"></div>
                    </div>
                    <div class="whiteKey" ID="B${i}">
                    <div class="blackKey" id="blank2"></div>
                    </div>`)
                    
keyBoard.innerHTML = keyboardString;

}};








let metronome = document.getElementById('met-image')
let noteTime = 8;

//if (noteTime === 4) {
 //   metronome.src="assets/images/metLeft.jpg"
//}

let metroMS = 60000 / 120; 
console.log(metroMS);

let metControls = document.getElementById('met-controls');
var metState = false;

metControls.addEventListener('click', function(e){
    if (e.target.id === "met-start-btn"){
    // clearTimeout(metroFunc);                   BUG NEED TO CLEAR TIME OUT CAN LAUNCH MULTIPLE AUDIO OBJECTS ??
        metroFunc(metroMS);
        console.log(e.target.id);
    }
    else if (e.target.id === "met-stop-btn"){     //how to clear time out or stop metrofunc function??
        clearTimeout();
        console.log(e.target.id)
    }
})


function metroFunc(metroInterval) {
    setTimeout(function () {
        new Audio(`assets/images/AfricanPerc1.WAV`).play()
        // Then recall the outside parent function to
        // create a recursive loop.
        metroFunc(metroInterval);
    }, metroInterval );





}

//metroFunc(metroMS); calls recursion function for metronome


// metronome using timeouts and audio object

//MOUSE click EVENT is clunky buggy with stuck sound options?


//render.com   deploy with cos can use for backend and full stack as well









