/*
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Jhonatan', 'User');
usuarios.set('Mario', 'Admin');

*/
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico(arr){
    const mySet = new Set(arr);

    return [...mySet]; /* usando o argumento rest para tornar os elementos em um novo array */
}