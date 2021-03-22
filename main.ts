basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                # # . # #
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # . # #
                # . . . #
                `)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # . # #
                # . . . #
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # . # #
                # . . . #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . # #
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                . # # # .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . # #
                # # # # #
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                # # . # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . #
                # # . # #
                # # # # #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # # . # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                # # . # #
                `)
            basic.showLeds(`
                . . . . .
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
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
