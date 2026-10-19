let s = new String(prompt("문자열 입력"));

let array = s.split("&");

document.write("<h3>문자열 분할</h3>");
document.write("<hr>");
for(let i=0; i<array.length; i++){
    document.writeln(array[i]+"<br>");
}