let colorName = ["maroon", "red", "orange", "yellow", "olive", "purple", "fuchsia", "white", "lime", "green", "navy", "blue", "aqua", "teal", "black", "silver", "gray"];

for(let i=1; i<=colorName.length; i++){
    document.getElementById(i).style.backgroundColor = colorName[i-1];
}