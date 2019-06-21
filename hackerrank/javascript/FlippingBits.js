const flippingBits = n => {
    // Generate 32 bit int 
    let bits = n.toString(2)
    let flippedBits = '';
    if (bits.length < 32) {
        bits = '0'.repeat(32 - bits.length) + bits;
    }
    
    // Flip all bits
    for (let i = 0; i < bits.length; ++i) {
        if (bits[i] === '0') { flippedBits += '1';}
        else {flippedBits += '0'; }
    }
    
    // Convert back to decimal
    return parseInt(flippedBits, 2);
}
console.log(flippingBits(2147483647));
console.log(flippingBits(1));
