function countWordOccurrences(sentence) {
    // Split the sentence into words and remove punctuation
    const words = sentence.toLowerCase().match(/\b\w+\b/g);
  
    // Create a map to store word occurrences
    const wordOccurrences = new Map();
  
    // Count occurrences of each word
    for (const word of words) {
      const count = wordOccurrences.get(word) || 0;
      wordOccurrences.set(word, count + 1);
    }
  
    return wordOccurrences;
  }
  
  const sentence = "This is a test. This is only a test.";
  const occurrences = countWordOccurrences(sentence);
  
  occurrences.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });
  