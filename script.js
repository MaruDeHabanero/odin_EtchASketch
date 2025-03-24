const container = document.querySelector("#container");
let gridDimension = 16;

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

function createGrid(dim){
	document.body.style.margin = "0";

	container.style.display = "flex";
	container.style.height = "100vh";
	container.style.flexDirection = "column-reverse";

	for (let x = 0; x < dim; x++){
		const row = document.createElement("div");
		row.style.flex = "1";
		row.style.display = "flex";
		row.style.flexDirection = "row";

		row.className = "row";
		for (let y = 0; y < dim; y++){
			const block = document.createElement("div");
			block.style.flex = "1";

			addHoveringColor(block);

			block.className = "block";
			row.appendChild(block);
		}
		container.appendChild(row);
	}
}

function addTopButtonAndInfo(){
	const buttonContainer = document.createElement("div");
	buttonContainer.style.display = "flex";
	buttonContainer.style.justifyContent = "space-evenly";
	buttonContainer.style.padding = "10px";

	const button = document.createElement("button");
	button.innerText = "Change dimensions of Etch-A-Sketch"
	button.style.width = "50%";
	button.style.height = "40px";
	button.addEventListener("click", () => {
		const preliminaryDimension = Number(prompt("Insert the number of (n) * (n) dimesions"));
		if (preliminaryDimension > 100 || preliminaryDimension < 0){
			alert("Insert a dimension greater than 0 and lesser than 100");
			return;
		}
		
		gridDimension = preliminaryDimension;
		container.textContent = ""; // Deletes all the nodes inside of the main container.
		createGrid(gridDimension);
		addTopButtonAndInfo();
	})

	const gridSizeParagraph = document.createElement("p");
	gridSizeParagraph.innerText = `Grid size: ${gridDimension}`;
	
	buttonContainer.appendChild(button);
	buttonContainer.appendChild(gridSizeParagraph);
	container.appendChild(buttonContainer);
}

createGrid(gridDimension);
addTopButtonAndInfo();
