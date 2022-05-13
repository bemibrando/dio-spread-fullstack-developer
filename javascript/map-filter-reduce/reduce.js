function sumArr(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}

const arr = [1, 2, 3, 4];

console.log(sumArr(arr));

const list = [
    {
        name: 'banana',
        price: 2,
    },
    {
        name: 'apple',
        price: 3,
    },
    {
        name: 'orange',
        price: 5,
    }
]

const budget = 20;

function currentMoney(budget, list){
    return list.reduce(function (prev, current){
        return prev - current.price;
    }, budget);
}

console.log(currentMoney(budget, list));