for(let i=1; i<=17; i++){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let rgb = "rgb("+r+", "+g+", "+b+")";

    document.getElementById(i).style.backgroundColor = rgb;
    document.getElementById(i).textContent = rgb
}