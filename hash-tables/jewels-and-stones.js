function numJewelsInStones (jewels, stones) {
    // split strings by char into an arr
    const jewelsArr = jewels.split('')
    const stonesArr = stones.split('')

    // number of jewels
    let count = 0
    // create a map (map vs object see https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript)
    let hashMap = new Map()

    // for the value of the stones array
    for (stone of stonesArr) {
      // if hashmap does not have it
      if (!hashMap.has(stone)) {
        // set key to the stone char and its value to 1
        hashMap.set(stone, 1)
      } else {
        // if it's already in the map, update value to current value + 1
        hashMap.set(stone, (hashMap.get(stone) + 1))
      }
    }

    // for value of each jewel in jewels array
    for (jewel of jewelsArr) {
      // if the hashmap contains the jewel
      if (hashMap.has(jewel)) {
        // update total count of jewels by number in the hashmap then move on to the next jewel char
        count = count + hashMap.get(jewel)
      }
    }
    // return total number of valid jewels
    return count
};
