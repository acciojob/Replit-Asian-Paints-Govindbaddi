//your JS code here. If required.
const wantedbox=document.querySelector(".wholeform")
wantedbox.addEventListener("submit",addingcolor)
function addingcolor(e) {
	e.preventDefault()
	const selectedbox=e.target[0].value
	const selectedcolor=e.target[1].value
	const boxIsSelected=document.getElementById(selectedbox)
	boxIsSelected.style.backgroundColor=selectedcolor
	e.target.reset()
	const gridboxes=document.querySelectorAll(".grid-item")
	for(let eachvalue of gridboxes){
		if(eachvalue.id!==selectedbox){
			console.log(eachvalue)
			eachvalue.style.backgroundColor=""
		}
	}
	
	
	
}
