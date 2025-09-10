//your JS code here. If required.
const wantedbox=document.querySelector(".wholeform")
wantedbox.addEventListener("submit",addingcolor)
function addingcolor(e) {
	e.preventDefault()
	const selectedbox=e.target[0].value
	const selectedcolor=e.target[1].value
	const boxIsSelected=document.getElementById("selectedbox")
	console.log(boxIsSelected)
	boxIsSelected.Style.backgroundColor=selectedcolor
	
}