const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.lenght; i++){
        const { nota, nome } = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}