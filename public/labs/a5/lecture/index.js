"use strict"   

const house = {
    rooms: 3,
 baths: 3,
 sqf: 1300 };
 document.getElementById("rooms").innerHTML = house.rooms;
 document.getElementById("baths").innerHTML = house.baths;
 document.getElementById("squareFeet").innerHTML =
 house.sqf;


function addAplusB(){
    var a = document.getElementById("a").value;
    a = parseInt(a)
    var b = document.getElementById("b").value;
    b = parseInt(b)
    var c = document.getElementById("c")

    var sum = a + b
    c.innerText = sum
}

let theElement = document.getElementById("a");
let theValue = theElement.value;
// alert(theValue);


let result = document.getElementById("result")
result.innerHTML=2+3

function sayHello() {
    alert("Hello")
}

let scores = [70, 89, 80, 100]
document.write('<h1>Scores</h1>')
document.write(scores);
document.write(`
<table border="1">
    ${scores.map((score, idx) =>`
              <tr>
                <td>scores[${idx}]</td>
                <td>${score}</td>
              </tr>
        `)

    }
</table>
`)


let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;
document.write("total = " + total + "<br/>");
document.write("average = " + average + "<br/>");

document.write("<ul>");
for (let i in scores) {
    document.write("<li>scores[" + i + "] = " +
        scores[i]);
    document.write("</li>");
}

// document.write(`
// <ul>
//     ${
//         scores.map((score, idx) => `
//             <li>
//                 scores[${idx}] = ${score}
//             </li> 
//         `).join('')
//     }
// </ul>");

let table = "<table border='1'>";
for (var j in scores) {
    let row = "<tr>";
    let col = "<td>"

    col += "scores[" + j + "]";
    row += col;
    col += scores[j];
    row += col;
    table += row;

    col += "</td>";
    col = "<td>"
    col += "</td>";
    row += "</tr>";
}
table += "</table>";
document.write(table);




var today = new Date()
document.write(today.getMonth())
document.write(today.getFullYear())
document.write(today.getDay())


console.log("Hello World");
document.write(`
<h2>Hello World</h2>
<ul>
    <li>${scores}</li>
    <li>Hello</li>
    <li>World</li>
</ul>
`);
var h1_hello = document.getElementById('hello');
h1_hello.innerText = "Hello World";
h1_hello.style.color = "red";
h1_hello.style.display = "none";