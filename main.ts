let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
let giroder = Math.randomBoolean()
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis < 20) {
        giroder = Math.randomBoolean()
    } else {
        if (giroder == true) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            basic.pause(700)
        }
        if (true) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            basic.pause(700)
        }
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
    }
})
