const banana = {
    value: 3,
}
const apple ={
    value: 5,
}

function mapMult(arr, thisArg){

    return arr.map(
        function(item){
            return item * this.value;
        }, thisArg
    );
}

function mapJustMult(arr){
    return arr.map(
        function(item){
            return item * 2;
        }
    );
}

const arr = [2, 4, 6];

console.log(mapMult(arr, banana));
console.log(mapJustMult(arr));