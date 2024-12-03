function Up_and_down2 () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 20) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 40)
        basic.pause(100)
        wuKong.stopMotor(wuKong.MotorList.M2)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P1) > 1000) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -40)
        basic.pause(100)
        wuKong.stopMotor(wuKong.MotorList.M2)
    }
}
function Left_Right_Action () {
    if (pins.analogReadPin(AnalogReadWritePin.P0) < 20) {
        left_and_right += 0.5
        if (left_and_right > 270) {
            left_and_right = 270
        }
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, left_and_right)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P0) > 1000) {
        left_and_right += -0.5
        if (left_and_right < 90) {
            left_and_right = 90
        }
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, left_and_right)
    }
}
function Open_and_close () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        basic.pause(100)
        wuKong.stopMotor(wuKong.MotorList.M1)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
        basic.pause(100)
        wuKong.stopMotor(wuKong.MotorList.M1)
    }
}
let left_and_right = 0
left_and_right = 180
let Up_and_down = 180
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Up_and_down)
led.enable(false)
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, Up_and_down)
})
basic.forever(function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, left_and_right)
})
basic.forever(function () {
    Up_and_down2()
})
basic.forever(function () {
    Open_and_close()
})
basic.forever(function () {
    Left_Right_Action()
})
