let kidsWithCandies = function (candies, extraCandies) {
    let reponse = [];
    let max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            reponse[i] = true;
        } else {
            reponse[i] = false;
        }
    }
    return reponse;
};

console.log(kidsWithCandies([2,3,5,1,3],3));