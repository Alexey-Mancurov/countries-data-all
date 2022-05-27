const newCodes = [
  ['a', 'ф'],
  ['b', 'и'],
  ['c', 'с'],
  ['d', 'в'],
  ['e', 'у'],
  ['f', 'а'],
  ['g', 'п'],
  ['h', 'р'],
  ['i', 'ш'],
  ['j', 'о'],
  ['k', 'л'],
  ['l', 'д'],
  ['m', 'ь'],
  ['n', 'т'],
  ['o', 'щ'],
  ['p', 'з'],
  ['q', 'й'],
  ['r', 'к'],
  ['s', 'ы'],
  ['t', 'е'],
  ['u', 'г'],
  ['v', 'м'],
  ['w', 'ц'],
  ['x', 'ч'],
  ['y', 'н'],
  ['z', 'я'],
  [';', 'ж'],
  [',', 'б'],
  ['-', '-'],
  ['.', 'ю'],
  ['`', 'ё'],
  ['[', 'х'],
  [']', 'ъ'],
  ["'", 'э'],
]

const reverseKeyboard = text => {
  const isRu = /^\p{sc=Cyrillic}*$/u.test(text)
  const textToArray = String(text).toLowerCase().split('')

  const newText = checkSymbol(isRu, textToArray).join('')

  return newText
}

const checkSymbol = (isRu, arrayText) => {
  if (isRu) {
    return returnerString(arrayText, 1, 0)
  } else {
    return returnerString(arrayText, 0, 1)
  }
}

const returnerString = (arrayText, checkedIndex, returnIndex) => {
  return arrayText
    .map(letter => {
      const isContainLetter = newCodes.some(i => i[checkedIndex] === letter)
      if (isContainLetter) {
        return newCodes.map(symbol => {
          if (symbol[checkedIndex] === letter) {
            return symbol[returnIndex]
          } else {
            return null
          }
        })
      } else return letter
    })
    .flat()
}

module.exports = reverseKeyboard
