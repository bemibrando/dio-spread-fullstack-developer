function filterEven(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(filterEven(arr));