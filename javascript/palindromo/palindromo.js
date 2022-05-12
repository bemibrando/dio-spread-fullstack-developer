function verificaPalindromo(string){
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

function checkPalindromo2 (string){
    if(!string) return "String inexistente";

    for(let i = 0; i < string.lenght / 2; i++){
        if(string[i] !== string[string.lenght - 1 - i]){
            return false;
        }
    }

    return true;
}