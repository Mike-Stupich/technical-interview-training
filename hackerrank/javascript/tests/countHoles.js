const countHoles = (num) => {
    const dict = {"0": 1, '1': 0, '2': 0, '3': 0, '4':1, '5':0, '6':1, '7':0, '8':2, '9':1 };
    let numHoles = 0;
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; ++i) {
        numHoles+=dict[strNum[i]];
    }
    return numHoles;
}
console.log(countHoles(630));