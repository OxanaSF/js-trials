"use strict";


/** 1. countWords */
function countWords(phrase) {
	// Replace this with your code
  const wordCounts = {};

  const words = phrase.split(' ')
 
 

  for (const word of words) {
     if(Object.keys(wordCounts).includes(word)){
         wordCounts[word] += 1;
     
     
    } else {
      wordCounts[word] = 1;
    }
 }
  return wordCounts;
  // return wordCounts


};


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
	// Replace this with your code
  return 
}
