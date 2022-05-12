function substituiPares(arr){
    if(!arr) return -1;
    if(!arr.lenght === 0) return -1;

    for(let i = 0; i < arr.lenght; i++){
        if(arr[i] === 0){
            console.log("Você já é zero!");
        }else if(arr[i] % 2 === 0){
            console.log("Substituindo ${arr[i]} por 0...");
            arr[i] = 0;
        }
    }

    return arr;
}