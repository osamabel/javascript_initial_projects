const img_1 = document.querySelector(".let");
const img_2 = document.querySelector(".take");
const img_3 = document.querySelector(".it");
const img_4 = document.querySelector(".all");
const img_5 = document.querySelector(".in");
const img_s = document.querySelectorAll(".panel");      //select all element of panel

function setGlobal(element)
{
	if (element.style.flexBasis == "100%")
	{
		/* 
			* first check Element is already clicked.
			* if so, bring it back to "flexBasis = 100%/img_s.length"    =>    [img_s.length: how many images there]
			* and "grayscale = 100%"  								    =>    [black & while]
			* show off first / last ElementChild
			* retur back size font 
		*/
		element.style.filter = "grayscale(100%)";
		element.style.flexBasis = `calc(100% / ${img_s.length})`;
		element.firstElementChild.style.top = "-100%"
		element.lastElementChild.style.bottom = "-100%"
		element.children[1].style.fontSize = "2rem"
	}
	else
	{
		/* 
		* first check Element is already clicked.
		* if so, bring it back to "flexBasis = 100%"     =>    [make it wide]
		* and "grayscale = 50%"  			     	    =>    [make it colorful little bit]
		* show on first / last ElementChild
		* grow up size font 
		*/
		element.firstElementChild.style.top = "0%"
		element.lastElementChild.style.bottom = "0%"
		element.style.flexBasis = "100%";
		element.style.filter = "grayscale(50%)";
		element.children[1].style.fontSize = "4rem"
	}
	/*
	* if element was clicked, all other elements should return back to 
	* it initial case.
	* return all element back exept the clicked one
	*/
	img_s.forEach((e) => {
		if (element != e)
		{
			e.children[1].style.fontSize = "2rem"
			e.firstElementChild.style.top = "-100%"
			e.lastElementChild.style.bottom = "-100%"
			e.style.filter = "grayscale(100%)";
			e.style.flexBasis = `calc(100% / ${img_s.length})`;		
		}
	})
}

img_1.addEventListener("click", () => {setGlobal(img_1)});
img_2.addEventListener("click", () => {setGlobal(img_2)});
img_3.addEventListener("click", () => {setGlobal(img_3)});
img_4.addEventListener("click", () => {setGlobal(img_4)});
img_5.addEventListener("click", () => {setGlobal(img_5)});

