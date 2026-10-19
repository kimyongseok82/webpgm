const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

if(h>=12){
    document.body.style.backgroundColor = "orange";
}
else{
    document.body.style.backgroundColor = "lightskyblue";

}

document.getElementById("currentTime").textContent = h+"시,"+m+"분,"+s+"초"