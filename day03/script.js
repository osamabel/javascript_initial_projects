
const spacingcontrole = document.querySelector(".image");
const span = document.querySelector(".jsColor");

const currentspacing = document.getElementById("spacing").value;
const currentblur = document.getElementById("blur").value;
const currentcolor = document.getElementById("color").value;

spacingcontrole.style.padding = currentspacing + "px";
spacingcontrole.style.filter = "blur(" + currentblur / 4 + "px)";
spacingcontrole.style.backgroundColor = currentcolor;
span.style.color = currentcolor;

function spacing(val)
{
	spacingcontrole.style.padding = val + "px";
}
function blurs(val)
{
	spacingcontrole.style.filter = "blur(" + val / 4 + "px)";
}
function color(val)
{
	span.style.color = val;
	spacingcontrole.style.backgroundColor = val;
}