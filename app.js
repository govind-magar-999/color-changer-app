const canvas = document.getElementById("canvas");
const hexSet = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor(){
    let hex_code = [];
    hex_string = []; 
    for(let j=1; j<=6; j++){ 
        hex_code.push(hexSet[Math.floor(Math.random()*16)]);
    }

    let colorCode =  `#${hex_code.join("")}`;
    console.log(colorCode);
    canvas.style.backgroundColor = colorCode;
}