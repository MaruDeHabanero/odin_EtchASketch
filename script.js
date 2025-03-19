const container = document.querySelector("#container");

function randomRGBValues(){
	const colors = []
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

	container.style.display = "flex";
	container.style.height = "100vh";
	container.style.flexDirection = "column-reverse";

	for (let x = 0; x < 16; x++){
		const row = document.createElement("div");
		row.style.flex = "1";
		row.style.display = "flex";
		row.style.flexDirection = "row";

		row.className = "row";
		for (let y = 0; y < 16; y++){
			const block = document.createElement("div");
			block.style.flex = "1";

			addHoveringColor(block);

			block.className = "block";
			row.appendChild(block);
		}
		container.appendChild(row);
	}
}

createGrid();

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.padding = "10px";

const button = document.createElement("button");
button.innerText = "Change dimensions of Etch-A-Sketch"
button.style.width = "50%";
button.style.height = "40px";

buttonContainer.appendChild(button);
container.appendChild(buttonContainer);