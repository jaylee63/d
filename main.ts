input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # # # #
        # # . # #
        `)
    basic.pause(1000)
    Player_2 = randint(0, 2)
    if (Player_1 == Player_2) {
        basic.showString("W")
    } else {
        basic.showString("L")
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    Player_2 = randint(0, 2)
    if (Player_1 == Player_2) {
        basic.showString("W")
    } else {
        basic.showString("L")
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(1000)
    Player_2 = randint(0, 2)
    if (Player_1 == Player_2) {
        basic.showString("W")
    } else {
        basic.showString("L")
    }
    basic.pause(1000)
    basic.clearScreen()
})
let Player_2 = 0
let Player_1 = 0
basic.showIcon(IconNames.Yes)
Player_1 = 0
