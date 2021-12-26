// assume createElement() exists, similar in abstraction to document.createElement()

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
    // create head and pegs
    const head = createElement('head')
    for (let i = 0; i < 6; i++) {
        const peg = createElement('peg')
        head.append(peg)
    }

    // create neck and add frets
    const neck = createElement('neck')
    for (let i = 0; i < 19; i++) {
        const fret = createElement('fret')
        neck.append(fret)
    }

    // create body and add strings
    const body = createElement('body')
    body.append(neck)
    strings.forEach(tone => {
        const string = createElement('string')
        string.tune(tone)
        body.append(string)
    })

    return body
}