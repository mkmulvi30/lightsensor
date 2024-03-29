function Pause500Clear () {
    basic.pause(500)
    basic.clearScreen()
}
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
    if (input.lightLevel() == 0) {
        basic.showString("NULL")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() <= 75) {
        basic.showString("Hello?")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() > 75 && input.lightLevel() <= 110) {
        basic.showString("Dim")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() > 110 && input.lightLevel() <= 200) {
        basic.showString("Perfect")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    } else if (input.lightLevel() > 200) {
        basic.showString("Yowsa!")
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
        basic.clearScreen()
        basic.pause(500)
        readLightLevel()
    }
})
function Clear500Pause () {
    basic.clearScreen()
    basic.pause(500)
}
