// Question 1
var random1 = Math.round(Math.random())+1
document.write(`${random1}<br/>`);
if (random1 == 2) {
    document.write(`Random coin value : Head<br/>`);
} else {
    document.write(`Random coin value : Tail<br/>`);
}

// Question 2
var random2 = Math.round(Math.random()*99)+1
document.write(`Random number betweeen 1 and 100 : ${random2}<br/>`);

// Question 3
var ran = Math.round(Math.random()*9)+1
var inp = prompt("Enter secret number")
document.write(`Secret no : ${ran}<br/>`);
if (inp == ran) {
    alert("Congratulation you guess right")
}
else{
    alert("Try again")
}