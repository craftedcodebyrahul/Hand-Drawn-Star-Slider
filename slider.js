const slider = document.getElementById("slider");
function updatePath(val) {
  const sliderValue = val;
	const path = document.querySelector(".stars");
	path.setAttribute("stroke-dashoffset", 773 - sliderValue);
}

slider.addEventListener('input', (evt) => {
	const sliderValue = evt.target.value;
	const path = document.querySelector(".stars");
	path.setAttribute("stroke-dashoffset", 773 - sliderValue);
})

setTimeout(()=> {
	updatePath(460)
}, 1000);