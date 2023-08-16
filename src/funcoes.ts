function multiplicaNumeros(numero1: number, numero2: number) {
  return numero1 * numero2;
}

function saudacao(nome: string) {
  return `Olá ${nome}`;
}

const numerosMultiplicados: number = multiplicaNumeros(10, 20);

const saudando: string = saudacao("Ariel");

console.log(numerosMultiplicados);
console.log(saudando);
