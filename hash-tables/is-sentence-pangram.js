const checkIfPangram = (sentence) => {
  const alphabet = Array.from(Array(26)).map((element, index) => index + 65).map((element) => String.fromCharCode(element).toLowerCase());
  const map = new Map()

  for (letter of alphabet) {
    map.set(letter, 0)
  }

  for (letter of sentence.toLowerCase()) {
    map.set(letter, map.get(letter) + 1)
  }

  for ([key, value] of map) {
    if (value === 0) {
      return false
    }
  }

  return true

};
