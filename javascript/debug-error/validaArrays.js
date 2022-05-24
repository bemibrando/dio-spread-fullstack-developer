function validaArray(arr, num){

    try {
        if(!arr || !num) throw new ReferenceError("Envie os parametros"); // Verifica se os parâmetros foram devidamente enviados
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number");
        if(arr.length !== num) throw new RangeError("Tamanho inválido");
        return arr;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else if(error instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
        }if(error instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: " + error);
        }
    }
}

console.log(validaArray());