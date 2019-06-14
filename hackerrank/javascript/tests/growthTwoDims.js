const countMax = (upRight) => {
    let numEles = 0 ;
    let count = 0;
    const ops = upRight[0].split(' ');
    let maxX = parseInt(ops[0], 10); // Since all ops start from 1,1 (0,0), can just track the max
    let maxY = parseInt(ops[1], 10);
    for(let i = 1; i < upRight.length; ++i) {
        const ops = upRight[i].split(' ');
        let x = parseInt(ops[0])
        let y = parseInt(ops[1])
        if (x < maxX) { maxX = x}
        if (y < maxY) {maxY = y}
    }
    return maxX * maxY;
}

console.log(countMax([ '2 3', '3 7', '4 1' ]));