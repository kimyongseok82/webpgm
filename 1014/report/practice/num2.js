let array = [];

for(let i=0; i<5; i++){
    let p = prompt("정수 입력");
    let n = parseInt(p);
    array[i]=n;
}

document.getElementById("numArray").textContent = array.join(" ");

array.reverse();

document.getElementById("reversedArray").textContent = array.join(" ");