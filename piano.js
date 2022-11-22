//creates a synth and connect it to the main output (speakers)
const synth = new Tone.Synth().toDestination();
const keyBoard = document.getElementById('key-board');

// event listener for tone JS 
/*keyBoard.addEventListener('click', function(e){
    console.log(e.target.id)
    synth.triggerAttackRelease(e.target.id, "8n")
})*/

//test one C4 wav file with audio object            //TOGGLE event listener for each patch or DRYER ??, layer sounds,
keyBoard.addEventListener('click', function(e){             //  CHORUS (LONGER NOTES) MULTIPLE KEYS AT ONCE?
    console.log(e.target.id)
    console.log(e)
    new Audio(`assets/patches/denseLead/${e.target.id}.mp3`).play()
})
      
//var ul = $('ul.rig');
//var count = 15; // number of images

//for(var i = 1; i <= count; i++) {
 //   ul.append('<li><img src="images/' + i + '.jpg"></li>');
//}


let octaveNum = 6; //user input??
let keyboardString ="";
renderKeyBoard(octaveNum)

function renderKeyBoard(octs) {                                                         // BUG NONE OF THE BLACK KEYS ARE PLAYING
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
                    console.log(i)
                    console.log(keyboardString)
                    console.log(octs)
keyBoard.innerHTML = keyboardString;
}};

// metronome using timeouts and audio object

//MOUSE click EVENT is clunky buggy with stuck sound options?












