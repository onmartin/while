let guess = 0
let value = 12
let SecondValue = 13
game.splash("Answer the question")
while (guess != value + SecondValue) {
    guess = parseInt(game.askForString("Sum of 12 and 13"))
    if (guess == value + SecondValue) {
        game.splash("Correct!")
        game.over(true)
    } else {
        game.splash("False")
        game.over(false)
    }
}
