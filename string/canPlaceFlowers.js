let canPlaceFlowers = function (flowerbed, n) {
    let count =0
    for (let j = 0; j < flowerbed.length; j++) {
        if (flowerbed[j] == 0 && 
            (flowerbed[j - 1] == 0 && flowerbed[j + 1] == 0 ||
            flowerbed[j - 1] == 0 && j==flowerbed.length-1 ||
            j==0 && flowerbed[j + 1] == 0)) {
            flowerbed[j]=1
            count++;
        }
    }
    if(count>=n){
        return true 
    }else{
        return false
    }

}
console.log(canPlaceFlowers([0,0,1,0,1], 1));