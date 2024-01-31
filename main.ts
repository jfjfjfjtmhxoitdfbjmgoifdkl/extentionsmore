enum RadioMessage {
    message1 = 49434
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    basic.showString("wat")
    for (let index = 0; index < 60; index++) {
        WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
        ab += 1
        basic.showNumber(ab)
        WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
        ab += 1
        basic.showNumber(ab)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    while (input.buttonIsPressed(Button.A)) {
        dot.fillScreen()
        dot.clearScreen()
        radio.sendMessage(RadioMessage.message1)
    }
    dot.erase()
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    MOVE_JOEY = randint(1, 4)
    if (MOVE_JOEY == 1) {
        for (let index = 0; index < randint(0, 5); index++) {
            dot.moveForward()
        }
    }
    if (MOVE_JOEY == 2) {
        for (let index = 0; index < randint(1, 4); index++) {
            dot.turnRight()
        }
    }
    if (MOVE_JOEY == 3) {
        for (let index = 0; index < randint(0, 5); index++) {
            dot.moveBackward()
        }
    }
    if (MOVE_JOEY == 4) {
        for (let index = 0; index < randint(1, 4); index++) {
            dot.turnLeft()
        }
    }
})
let MOVE_JOEY = 0
let ab = 0
ab = 1
basic.forever(function () {
	
})
