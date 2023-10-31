function getMiddle(word) {
    const length = word.length;
    const middle = Math.floor(length / 2);
    return length % 2 !== 0 ? word.charAt(middle) : word.slice(middle - 1, middle + 1);
  }

console.log(getMiddle("test"));    
console.log(getMiddle("testing")); 
console.log(getMiddle("middle"));  
console.log(getMiddle("A"));     