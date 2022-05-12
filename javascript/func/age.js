function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Joao',
	idade: 23,
};

const pessoa2 = {
	nome: 'Carlos',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jessica',
	idade: 13,
};