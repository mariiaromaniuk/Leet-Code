/*
 Given a string and a list of words, find all the starting indices of substrings in the 
 given string that are a concatenation of all the given words exactly once without any 
 overlapping of words. It is given that all words are of the same length.
 
 Input: String="catfoxcat", Words=["cat", "fox"]
 Output: [0, 3]  ->  The two substring containing both the words are "catfox" & "foxcat".
*/

function find_word_concatenation(str, words){
  if (words.length === 0 || words[0].length === 0) 
    return [];

  let wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [];
  let wordsCount = words.length,
      wordLength = words[0].length;

  for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // Get the next word from the string
      word = str.substring(next_word_index, next_word_index + wordLength);
      // Break if we don't need this word
      if (!(word in wordFrequency)) 
        break;

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) 
        wordsSeen[word] = 0;

      wordsSeen[word] += 1;

      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) 
        break;

      // Store index if we have found all the words
      if (j + 1 === wordsCount) 
        resultIndices.push(i);
    }
  }
  return resultIndices;
}
