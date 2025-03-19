let button = document.createAttribute("button");
console.log(document.body)

function randomRGBValues(){
	let colors = []
	for (let i = 0; i < 3; i++){
		colors.push(Math.floor(Math.random() * 255))
	}
	return colors;
}

function addHoveringColor(block){
	block.addEventListener("mouseover", () => {
		const colors = randomRGBValues();
		block.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
		// console.log(block.style.backgroundColor);
	})
}

function createGrid(){
	document.body.style.margin = "0";

	let mainDiv = document.querySelector("#container");
	mainDiv.style.display = "flex";
	mainDiv.style.height = "100vh";

	for (let x = 0; x < 16; x++){
		let column = document.createElement("div");
		column.style.flex = "1";
		column.style.display = "flex";
		column.style.flexDirection = "column";

		column.className = "column";
		for (let y = 0; y < 16; y++){
			let block = document.createElement("div");
			block.style.flex = "1";

			addHoveringColor(block);

			block.className = "block";
			column.appendChild(block);
		}
		mainDiv.appendChild(column);
	}
}

createGrid();