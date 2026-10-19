let names = new Array("wonsun", "jaemoonlee", "kitae", "gracehwang");


document.getElementById("name").textContent = names.join(" ");

let longest = names.reduce((max, current) => current.length>max.length ? current : max, "");
document.getElementById("longestName").textContent = longest;

names.sort();
document.getElementById("firstName").textContent = names[0];
document.getElementById("orderName").textContent = names.join(" ");