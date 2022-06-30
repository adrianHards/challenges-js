function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // split the string into an array by letter; map iterates and saves result;
  // for each element, if it matches T assign U else return original
  // join array and return a string with no commas
  return dna.split('').map(el => el === 'T' ? el = 'U' : el).join('')
}

// disgustingly simple solution
function DNAtoRNA(dna) {
  // by default string.replace will replace first matching value; adding /g will mean all matching values are replaced
  return dna.replace(/T/g, 'U');
}
