const n = new Date();
const week = ['일', '월', '화', '수', '목', '금', '토'];
let date = n.getDate();
let day = n.getDay();

document.getElementById("currentDate").textContent = date+"일,"+week[day]+"요일";

if(day==0){
    document.body.style.backgroundColor = "pink";
}
else{
    document.body.style.backgroundColor = "gold";
}