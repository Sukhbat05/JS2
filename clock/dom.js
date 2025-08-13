const isPowerOfThree = n => {
    if (n <= 0) return false;
    const ternary = [...n.toString(3)];
    let count1 = 0;
    for (const c of ternary) {
        if (c === '1') count1++;
        if (c === '2') return false;
    }

    return count1 === 1;
}

console.log(isPowerOfThree)