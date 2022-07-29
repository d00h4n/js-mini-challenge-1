function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  if (word1.length !== word2.length) {
    return false
 }


  const result = true;
  return result;
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I a Lord Voldemort')); // True  
console.log(isAnagram('cicak', 'tengkorak')); // False
