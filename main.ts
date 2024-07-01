basic.clearScreen()
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeValue("value", pins.analogReadPin(AnalogPin.P0))
})
