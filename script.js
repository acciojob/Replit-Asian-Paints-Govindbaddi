//your JS code here. If required.
const wantedbox=document.querySelector(".wholeform")
wantedbox.addEventListener("submit",addingcolor)
const resetbtn=document.getElementById("Reset")
	resetbtn.addEventLisitener("click",resetitems)
function addingcolor(e) {
	e.preventDefault()
	const selectedbox=e.target[0].value
	const selectedcolor=e.target[1].value
	const boxIsSelected=document.getElementById(selectedbox)
		if(selectedbox>-1&& selectedbox<10){
			boxIsSelected.style.backgroundColor=selectedcolor
		}
		else{
			alert("invalid id")
		}
	
	
	
	const gridboxes=document.querySelectorAll(".grid-item")
	for(let eachvalue of gridboxes){
		if(eachvalue.id!==selectedbox){
			console.log(eachvalue)
			eachvalue.style.backgroundColor=""
		}
	}
}
function resetitems(e) {
	e.target.reset()	
}

