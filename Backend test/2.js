function maxXor(lo, hi, k) {

    if (lo < 1 || hi > 104 || k < 1 || k > 10 || lo >= hi) {
        throw new Error("Constraints error.");
      }

    let maxVal = 0;
    for (let a = lo; a <= hi; a++) {
      for (let b = a + 1; b <= hi; b++) {
        const xorVal = a ^ b;
        if (xorVal > maxVal && xorVal <= k) {
          maxVal = xorVal;
        }
      }
    }
    return maxVal;
}

const result = maxXor(3, 5, 6);
console.log(result); 