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
    new Audio(`assets/patches/denseLead/${e.target.id}.mp3`).play()
})
                                                            
                        //   BUG NONE OF THE BLACK KEYS ARE PLAYING
let octaveNum = 3;

keyBoard.innerHTML = `<div class="whiteKey" id="C${octaveNum}">
                    <div class="blackKey" id="C#${octaveNum}"></div>
                    </div>
                    <div class="whiteKey" id="D${octaveNum}">
                    <div class="blackKey" id="D#${octaveNum}"></div>
                    </div>
                    <div class="whiteKey" id="E${octaveNum}">
                    <div class="blackKey" id="blank1"></div>
                    </div>
                    <div class="whiteKey" id="F${octaveNum}">
                    <div class="blackKey" id="F#${octaveNum}"></div>
                    </div>
                    <div class="whiteKey" id="G${octaveNum}">
                    <div class="blackKey" ID="G#${octaveNum}"></div>
                    </div>
                    <div class="whiteKey" id="A${octaveNum}">
                    <div class="blackKey" id="A#${octaveNum}"></div>
                    </div>
                    <div class="whiteKey" ID="B${octaveNum}">
                    <div class="blackKey" id="blank2"></div>
                    </div>`;




//MOUSE click EVENT is clunky buggy with stuck sound












