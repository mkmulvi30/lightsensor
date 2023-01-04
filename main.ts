function readLightLevel () {
    basic.pause(500)
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.lightLevel() <= 75) {
        basic.showString("Too Dark!")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        readLightLevel()
    } else if (input.lightLevel() > 75 && input.lightLevel() <= 110) {
        basic.showString("Let there be light")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        readLightLevel()
    } else if (input.lightLevel() > 110 && input.lightLevel() <= 200) {
        basic.showString("Glimmer of Hope")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        readLightLevel()
    } else if (input.lightLevel() > 200) {
        basic.showString("Yowsa!")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
        basic.clearScreen()
        readLightLevel()
    }
})
