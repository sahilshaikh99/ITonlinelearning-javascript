var studentName = "sahil";
let age = 26;
const city = "Leeds";
var allowed = true;

console.log(studentName);
console.log(age);

function greet(name) {
    alert(`Hello ${name}! Good Morning`);
}

(function(){
    console.log("hiii");
})

if(age > 18){
    allowed = true;
    console.log("You're allowed");
}else{
    allowed = false;
    console.log("You're not allowed");
}

switch(city){
    case("leeds"):
        console.log("Living in Leeds Mate");
        break;
    case("Manchester"):
        console.log("Living in Manchester Mate")
        break;
    default:
        console.log("Living in London Mate")
        break
}

var products = ["TV", "Laptop", "PC", "Mobile", "Printer"];
var marks = [46, 50, 70, 84, 79];

var displayProduct = "";
for(let i = 0; i<products.length; i++){
    displayProduct += products[i] + "<br/>"
}

var displayMarks = "";
for(let i = 0; i<marks.length; i++){
    displayMarks += marks[i] + "<br/>"
}

let productDiv = document.getElementById("myProducts");
let marksDiv = document.getElementById("myMarks");

if (productDiv) {
    // Create a new paragraph element
    let listProduct = document.createElement("p");
    listProduct.innerHTML = displayProduct; // Set its content
    productDiv.appendChild(listProduct);    // Append it to the div
} else {
    console.error("Element with ID 'myProducts' not found.");
}

if (marksDiv) {
    // Create a new paragraph element
    let listMarks = document.createElement("p");
    listMarks.innerHTML = displayMarks; // Set its content
    marksDiv.appendChild(listMarks);    // Append it to the div
} else {
    console.error("Element with ID 'myMarks' not found.");
}