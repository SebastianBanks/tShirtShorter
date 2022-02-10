function shorter(string) {
    let safeStr = string.toLowerCase()
    let s = ""
    let m = ""
    let l = ""
    let rtnString = ""

    for (let i = 0; i < safeStr.length; i++) {
        if (safeStr[i] === "s") {
            s += safeStr[i]
        } else if (safeStr[i] === "m") {
            m += safeStr[i]
        } else if (safeStr[i] === "l") {
            l += safeStr[i]
        }
    }
    rtnString = s + m + l
    console.log(rtnString)
}

shorter("sml")
shorter("smllms")