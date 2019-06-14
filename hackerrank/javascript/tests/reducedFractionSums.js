const reducedFractionSums = (expressions) => {
    const reduced = expressions.map(currExp => {
        const fracs = currExp.split('+');
        const ops = fracs.map(currFrac => currFrac.split('/'));
        const denom = parseInt(ops[0][1]) * parseInt(ops[1][1]);
        const numer = parseInt(ops[0][0]) * parseInt(ops[1][1]) + parseInt(ops[1][0]) * parseInt(ops[0][0]);
        return gcd(numer, denom);
    })
    return reduced
}

// 
const gcd = (n, d) => {
    let arr = [];
    let commonD;
    for( let i = 2 ; i < d; ++i) {
        if (!(d % i)) {
            arr.push(i);
        }
    }
    for(let s=arr.length; s>=0; s--) {
        if(!(n % arr[s-1])) {
            commonD = arr[s-1];
            break;
        }
    }
    return `${n/commonD}/${d/commonD}`
}

console.log(reducedFractionSums(
[ '722/148+360/176',
'978/1212+183/183',
'358/472+301/417',
'780/309+684/988',
'258/840+854/686' ]));