RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    rotato = rotato - 5
    music.setVolume(rotato)
})
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
	
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    rotato = rotato + 5
    if (rotato > 255) {
        rotato = 0
    }
    music.setVolume(rotato)
})
let rotato = 0
rotato = 0
music.setVolume(rotato)
RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0)
basic.forever(function () {
    basic.showNumber(rotato)
})
