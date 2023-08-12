function hasUniqueCharacters(username) {
    const charSet = new Set();
    
    for (const char of username) {
      if (charSet.has(char)) {
        return false; // Found a duplicate character
      }
      charSet.add(char);
    }
    
    return true; // All characters are unique
  }
  
  // Example usage
  const username1 = "john_doe";
  const username2 = "jane_smith";
  
  console.log(`${username1} has unique characters: ${hasUniqueCharacters(username1)}`);
  console.log(`${username2} has unique characters: ${hasUniqueCharacters(username2)}`);
  