function readLightLevel () {
    basic.pause(500)
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    readLightLevel()
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() <= 75) {
        basic.showString("Hello?")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        readLightLevel()
    } else if (input.lightLevel() > 75 && input.lightLevel() <= 110) {
        basic.showString("Dim")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        readLightLevel()
    } else if (input.lightLevel() > 110 && input.lightLevel() <= 200) {
        basic.showString("Perfect")
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
