// Declaração de uma variável com tipo explícito
let mensagem: string = 'Olá, mundo!';

// Função com tipos explícitos para parâmetros e retorno
function somar(a: number, b: number): number {
  return a + b;
}

let resultado: number = somar(1, 2);
console.log(mensagem); // Saída: Olá, mundo!
console.log(resultado); // Saída: 3

// Tipos de dados e declaração de variáveis em typescript

// 1.number = representa números inteiros e ponto flutuantes

let inteiro: number = 42;
let decimal: number = 3.14;

// 2.sring: cadeia de caracteres ou textos

let texto: string = 'Olá, Mundo!';

// 3.boolean: representa valores verdadeiro ou false

let ativo: boolean = true;

// 4.array: reprensenta um conjunto de elementos do mesmo tipo.Podemos declarar arrays usado Tipo[] ou a notação <Tipo>

let numeros: number[] = [1, 2, 3, 4];
let nomes: Array<string> = ['Ana', 'Carlos', 'Bia'];

// 5.tuple: reprensenta um array com tamanho e tipos de elementos fixos

let tuple: [string, number] = ['Joao', 30];

// 6.enum: Permite criar um conjunto de valores nomeados

enum Cores {
  Vermelho,
  Verde,
  Azul
}

let corFavorita: Cores = Cores.Verde;

// 7.any: Representa qualquer tipo de dado, desativando a verificação de tipo.Deve ser usado com cuidado e apenas quando for necessário

let valorDesconhecido: any = 'texto';
valorDesconhecido = 42;

// 8.void: Representa a ausência de tipo, geralmente usado para indicar uma função não retorna nenhum valor 
function imprimirMensagem(mensagem: string):void {
  console.log(mensagem);
}
imprimirMensagem("Flávio");

// 9.null e undefined: São os subtipos de todos os outros

let n: null = null;
let u:undefined = undefined;

// 10.never: Representa o tipo que nunca ocorre, como uma função que sempre lança um erro ou um loop infinito

function gerarErro(mensagem: string): never {
  throw new Error(mensagem);
}

