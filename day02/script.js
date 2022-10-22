const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
	var hourNOW = new Date().getHours();
	var minuteNOW = new Date().getMinutes();
	var secendNOW = new Date().getSeconds();

	second.style.rotate = `${secendNOW * 6 - 270}deg`; // change secend value to a colck dgree {1 second = 6 deg}
	minute.style.rotate = `${minuteNOW * 6 - 270}deg`; // change minute value to a colck dgree {1 minute = 6 deg}

	var hourDiff = (minuteNOW/60) * 100;
	hourDiff = (30*hourDiff) / 100;
	if (hourNOW>=1 && hourNOW <= 12) // PM
		hour.style.rotate = `${hourNOW * 30 + 90 + hourDiff}deg`;
	if (hourNOW>=0 && hourNOW <= 23) // AM
		hour.style.rotate = `${hourNOW * 30 - 270 + hourDiff}deg`;

}, 1000)

const r = document.querySelector(".fa-arrow-right-long");
const clock = document.querySelector(".clock");
const theme = ["assets/bg1.png","assets/bg2.png","assets/bg3.png","assets/bg4.png"];
var index = 0;
r.addEventListener("click", () => {
	clock.style.backgroundImage = "url(" + theme[index] + ")";
	index++;
	if (index == 4)
		index = 0;
})