const readlinesync = require("readline-sync");
console.log("Welcome To Game Zone HangMan")
const name = readlinesync.question("Enter Your Good name :- ")
console.log("Hello, " + name, "Time to play hangman!\nYou can start\nStart guessing...")
let hangman = [`
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |     / \\
                    -
                    `,
    `
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |     /
                    -
                    `,
    `
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |
                    -
                    `,
    `
                    --------
                    |      |
                    |      O
                    |     \\|
                    |      |
                    |
                    -
                    `,
    `
                    --------
                    |      |
                    |      O
                    |      |
                    |      |
                    |
                    -
                    `,
    `
                    --------
                    |      |
                    |      O
                    |
                    |
                    |
                    -
                    `,
    `
                    --------
                    |      |
                    |      
                    |
                    |
                    |
                    -
                    `
]
const Enter_First_Name = "surajkumsar"
let str = " "
let turn = 6
var start = 1
while (true) {
    var index = 0
    for (let x of Enter_First_Name) {
        if (str.includes(x)) {
            console.log(x)
        } else {
            console.log("_")
            index += 1
        }
    }
    if (index == 0) {
        console.log("Congratulation You won")
        break
    }
    let guess = readlinesync.question("Guess a character:- ")
    if ((Enter_First_Name.includes(guess)) && (!(str.includes(guess)))) {
        str += guess
    } else {
        console.log("Wrong answer\nYou have", +turn, 'more guesses')
        console.log(hangman[hangman.length - start])
        start++
        if (turn == 0) {
            console.log("You are Lose\nYour man Hanged")
            break
        }
        turn--
    }

}