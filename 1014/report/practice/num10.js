let list = [];

for(let i=0; i<5; i++){
    let s = prompt("콤마(,)로 분리하면서 책제목 저자 가격 순으로 입력");
    let arr = s.split(',')

    let book = {
        title: arr[0],
        name: arr[1],
        price: arr[2]
    }

    list.push(book);
}

for(let i=0; i<5; i++){
    document.getElementById(i+1).textContent = list[i].title + ", " + list[i].name + ", " + list[i].price 
}

let m = 0;
let ex = null;

for(let i=0; i<list.length; i++){
    let curr = Number(list[i].price);

    if(curr>m){
        m=curr
        ex = list[i].title
    }
}

document.getElementById("expensive").textContent = ex