var instrument;
addEventListener("keydown", e =>{
	var sound;
	const keys = ["1","2","3","4","5","6","7","8","9"];
	const soundsClass = [".snare",".tom",".tink",".openhat",".bombo",".ride",".clap",".hihat",".kick"];
	const soundsPath = ["songs/snare.wav","songs/tom.wav","songs/tink.wav","songs/openhat.wav","songs/bombo.wav","songs/ride.wav","songs/clap.wav","songs/hihat.wav","songs/kick.wav"];
	let i;
	for (i = 0; i < 9; i++)
	{
		if (e.key == keys[i])
		{
			break;
		}
	}
	if (i >= 0 && i <= 8)
	{
		sound = new Audio (soundsPath[i]);
		instrument = document.querySelector(soundsClass[i]);
		instrument.classList.add("play");
		sound.play();
	}
})

setInterval(() => {instrument.classList.remove("play")}, 100);
