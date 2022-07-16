const sortSentence = (s) => {
  // split the string into an array of each word
  splitWords = s.split(' ')
  // create an empty answers array
  const answerArray = []
  // create a reverse function which takes an array
  const reverse = (array) => {
    // creates a newArray
    newArray = []
    // for each word in the array
    for (word of array) {
      // split the word into letters, reverse the order, join the letters and then push each reversed word onto the newArray
      newArray.push(word.split('').reverse().join(''))
    }
    return newArray
  }

  // call the reverse function on our splitWords array
  const reverseWords = reverse(splitWords)

  // sort the reversed words array by the number at the front of each word
  reverseWords.sort(function (a, b) {
    return a.split('')[0] - b.split('')[0];
  });

  // now the words are sorted we need to remove the number at the front of each word
  for (word of reverseWords) {
    // split word into letters, slice extracts the chars UP TO (not at) index from a string, then join and push onto answerArray
    answerArray.push(word.split('').slice(1).join(''))
  }

  // finally, call the reverse function on our answerArray and join into a string with a space between words
  return reverse(answerArray).join(' ')

};
