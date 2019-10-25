"use strict";
const fruits = ['apple','berry','cherry'];
const nums = [1,5,9,3]

/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code
  
  
 for(const [index, value] of fruits.entries()) {
    console.log(index + '=' + value); 
  }

};


/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	// Replace this with your code
  const newArray = [];

  for(const [index, value] of items.entries()) {
  
 
    if (index % 2 === 0) {
      newArray.push(value);

    }
    
  }
  console.log(newArray);
  };

/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code

  items.sort((a, b) => a - b);
  const newnums = items.slice(0, n);
  newnums.reverse();
  console.log(newnums);


};
