//your JS code here. If required.
const wantedbox=document.querySelector(".wholeform")
wantedbox.addEventListener("submit",addingcolor)
const resetbtn=document.getElementById("reset_button")
resetbtn.addEventListener("click",resetItems)

function addingcolor(e) {
	e.preventDefault()
	const selectedbox=e.target[0].value
	const selectedcolor=e.target[1].value
	const boxIsSelected=document.getElementById(selectedbox)
	const gridboxes=document.querySelectorAll(".grid-item")
	gridboxes.forEach(items=>{
		items.style.backgroundColor="transparent"
	})
		if(selectedbox>-1&& selectedbox<10){
			boxIsSelected.style.backgroundColor=selectedcolor
		}
		else{
			alert("invalid id")
		}
	
	
	for(let eachvalue of gridboxes){
		if(eachvalue.id!==selectedbox){
			console.log(eachvalue)
			eachvalue.style.backgroundColor=""
		}
	}
}
function resetItems(e) {
	
	const gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach(item => {
		item.style.backgroundColor = "transparent";
	});
}


