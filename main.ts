let start = 0
let degrees = 0
let elapesed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (degrees < 135) {
        basic.showArrow(ArrowNames.East)
    }
    if (degrees < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (degrees < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    elapesed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapesed, 1000))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature())
    basic.pause(200)
})
basic.forever(function () {
	
})
