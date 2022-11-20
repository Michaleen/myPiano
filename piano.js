//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();


midC = document.getElementById('test-c-button');

midC.addEventListener('click', function play(){
    synth.triggerAttackRelease("C4", "8n");
    
    
})





