//creates a synth and connect it to the main output (speakers)
const synth = new Tone.Synth().toDestination();

const keyBoard = document.getElementById('key-board');

keyBoard.addEventListener('click', function(e){
    console.log(e.target.id)
    synth.triggerAttackRelease(e.target.id, "8n")
})

















