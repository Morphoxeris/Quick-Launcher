/*
    Filename: script.js
    Open Source on Github, available at github.com/Morphoxeris.
*/

// Retrieves element via ID, in this case it's "testbutton".
const button = document.getElementById("testbutton");
const button2 = document.getElementById("button2");

// Using 0,0 as input within the browser triggers a TypeError.
function power() {

    const input = prompt("Please include two numbers, using commas to indicate the two different integers.");
    const inputArr = input.split(",");

    if (!input) return console.log("There was no input.");

    // Originally strings, I think JS coerces it into integer values internally.
    var x = inputArr[0];
    var y = inputArr[1];

    return Math.round(Math.pow(x, y));

}

function randomPw() {
    const generated = Math.random().toString(36).substring(2);
    return generated;
}

button.addEventListener("click", () => { // button refers to the one we declared above.

/*
    // innerHTML is a property, not a function, so you assign to it.
    document.getElementById("powOutput").innerHTML = power();
*/

    console.log(power());

});

button2.addEventListener("click", () => {
    console.log(randomPw());
})