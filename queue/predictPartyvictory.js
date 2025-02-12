let predictPartyVictory = function (senate) {
    let rad = []
    let dire = []
    let n = senate.length
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            rad.push(i)
        } else {
            dire.push(i)
        }
    }
    while (rad.length > 0 && dire.length > 0) {
        let r = rad.shift()
        let d = dire.shift()
        r < d ? rad.push(r + n) : dire.push(d + n)
    }
    return rad.length > 0 ? 'Radiant' : 'Dire'
}
console.log(predictPartyVictory('RDD'))