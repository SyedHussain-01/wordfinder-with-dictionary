const startsWith = (s,word) => {
    const re = new RegExp(`^${s}[a-zA-Z]*`)
    return re.test(word)
}

const endsWith = (e,word) => {
    const re = new RegExp(`[a-zA-Z]*${e}\$`)
    return re.test(word)
}

const consists = (c,word) => {
    const re = new RegExp(`[a-zA-Z]*${c}[a-zA-Z]*`)
    return re.test(word)
} 

const length = (len, word) => {
    const re = new RegExp(`^[a-zA-Z]{${len}}$`)
    return re.test(word)
}

const startsAndEnds = (s, e, word) => {
    const re = new RegExp(`^${s}[a-zA-Z]*${e}\$`)
    return re.test(word)
}

const startsAndConsists = (s, c, word) => {
    const re = new RegExp(`(?=.*${c})^${s}`)
    return re.test(word)
}

const endsAndConsists = (e, c, word) => {
    const re = new RegExp(`^(?=.*${c}).*${e}$`)
    return re.test(word)
}

export { startsWith, endsWith, consists, startsAndEnds, startsAndConsists, endsAndConsists, length };