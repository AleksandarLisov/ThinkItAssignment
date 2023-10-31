function smallestDivisor(nums, threshold) {
    
    if (!Array.isArray(nums) || typeof threshold !== 'number' || 
      nums.length < 1 || nums.length > 5 * 104 || threshold < nums.length || threshold > 106) {
        throw new Error('Constraint error.');
    }
  
    for (let num of nums) {
        if (num < 1 || num > 106) {
            throw new Error('Constraint error.');
        }
    }

    let left = 1, right = Math.max(...nums);
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      let sum = 0;
      for (let num of nums) {
        sum += Math.ceil(num / mid);
      }
      if (sum > threshold) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    return left;
}
  
console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));