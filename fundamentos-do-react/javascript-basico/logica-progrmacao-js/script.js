const valor1 = 10;
const valor2 = 2;
console.log("Soma", valor1 + valor2);

const texto = "contando... ";
const valores = [1, 2, 3, 4, 5];

for (let i = 1; i <= 10; i++) {
    console.log(`${texto}`, i);
}
valores.forEach((valores, index) => {
    console.log(`${valores} no index: ${index}`);
});
const valores2 = valores.map((value) => {
    return value * 5;
});
console.log(valores2);

function soma(num1, num2) {
    return num1 + num2;
}
const somar = (num1, num2) => num1 + num2;
console.log(somar(200, 200));
console.log(soma(200, 200));

const alunos = [
    {
        nome: "Pablo",
        idade: 14,
    },
    {
        nome: "Felipe",
        idade: 41,
    },
];
alunos.push({
    nome: "Herick",
    idade: 20,
});
//alunos.pop(); remover o ultimo da lista
console.log(alunos[1].idade);
const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.log(alunosFiltrados);
const alunoFelipe = alunos.find(aluno => aluno.nome == "Felipe")
console.log(alunoFelipe);
const idades = alunos.reduce((acumulator, value) => {
    return acumulator + value.idade;
}, 0)
console.log(idades);
const menorDez = alunos.some(alunos => alunos.idade < 10)
const maiorDez = alunos.some(alunos => alunos.idade > 40)
const todasCondicoes = alunos.every(alunos => alunos.idade > 10);
console.log(menorDez);
console.log(maiorDez);
console.log(todasCondicoes);