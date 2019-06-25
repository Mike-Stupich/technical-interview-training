const getMinimumCost = (k, c) => {
    c.sort((a, b) => b - a);
    const cost = c.reduce((acc, cost, index) => acc + (Math.floor(index/k) + 1) * cost, 0);
    return cost;
}
console.log(getMinimumCost(3, [2,5,6]));
console.log(getMinimumCost(2, [2,5,6]));
