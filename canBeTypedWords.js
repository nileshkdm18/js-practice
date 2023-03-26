function canBeTypedWords(text, brokenLetters) {
    let words = text.split(' ')
    let keys = brokenLetters.split('')
    let c  = 0;
    for(let word of words) {
        let found = keys.every(key => word.indexOf(key) === -1)
        if (found) c++;
    }
    return c;
};