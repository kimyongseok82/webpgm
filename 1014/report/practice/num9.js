let book1 = new Object();
book1.title = "HTML5";
book1.name = "황기태";
book1.price = 20000;

let book2 = {
    title:"HTML5",
    name: "황기태",
    price: 20000
}

function book3(title, name, price){
    this.title = title;
    this.name = name;
    this.price = price;
}


document.getElementById("books").textContent = book2.title + ", " + book2.name + ", " + book2.price 