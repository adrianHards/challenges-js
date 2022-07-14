const checkIfPangram = (sentence) => {
  // create a lowercase alphabet array: 1. with 26 empty elements; 2. replacing each with index + 65 which corresponds with; 3. an integer representing the UTF-16 code
  const alphabet = Array.from(Array(26)).map((element, index) => index + 65).map((element) => String.fromCharCode(element).toLowerCase());
  // create an empty hash map
  const map = new Map()

  // for each letter of the alphabet, set letter as the key and its value as 0 representing letter count
  for (letter of alphabet) {
    map.set(letter, 0)
  }

  // for each letter in the sentence given, use the letter as a key and count number each letter comes up
  for (letter of sentence.toLowerCase()) {
    map.set(letter, map.get(letter) + 1)
  }

  // for each letter in our hash map, if the value of a letter is 0 return false immediately
  for ([key, value] of map) {
    if (value === 0) {
      return false
    }
  }

  // else return true
  return true

};
