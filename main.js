//number1
const avg = items.reduce(function(a,b) {
    return a + b.price
}, 0) / items.length;

const answer1 = `The average price is $${avg.toFixed(2)}`;

document.querySelector("#answer1").innerHTML = answer1;

//number2
const answer2 = items.filter(function(a) {
    if (a.price > 14.00 && a.price < 18.00) {
        return true
    }
}).map(function(b) {
    return b.title
}).join("\n")

document.querySelector("#answer2").innerHTML = answer2;

//number3
const found = items.filter(function(a) {
        return a.currency_code === "GBP"
})
const foundName = found.map(function(b) {
    return b.title
})
const foundCost = found.map(function(c) {
    return c.price
})

const answer3 = `${foundName} costs £${foundCost}`
document.querySelector("#answer3").innerHTML = answer3;

//number4
const answer4 = items.filter(function(a) {
    return a.materials.indexOf("wood") !== -1
}).map(function(b) {
    return b.title
}).join(" is made of wood. \n")

document.querySelector("#answer4").innerHTML = answer4;

//number5
const answer5 = items.filter(function(a) {
     return a.materials.length > 8
 }).map(function(b) {
     return b.title + " has " + b.materials.length + " materials: \n" + b.materials.join("\n")
 }).join("\n\n")

document.querySelector("#answer5").innerHTML = answer5;


//number6
//if who made === i did then add it, then take length of array at the end
const made = items.filter(function(a) {
    return a.who_made === "i_did"
}).length

const answer6 = `${made} were made by their sellers`

document.querySelector("#answer6").innerHTML = answer6;




