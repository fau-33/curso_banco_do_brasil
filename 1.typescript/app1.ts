// Funções em Typescript
// No TypeScript, as variáveis podem ser declaradas usando as palavras-chave let ou const. O let é usado para variáveis ​​que podem ser reatribuídas, enquanto o const é usado para variáveis ​​que não podem ser reatribuídas. As funções em TypeScript podem ser declaradas usando a palavra-chave function. Além disso, as funções também podem ter parâmetros com tipos específicos e retornar valores com tipos específicos.

let nome: string = 'Maria';
nome = 'João';

const idade: number = 39;
//idade = 31; //erro, não é possível reatribuir valor a uma constante

function soma(a: number, b:number): number {
  return a + b;
}

// Classes e interfaces em TypeScript
// Uma das principais funcionalidades do TypeScript é a capacidade de definir classes e interfaces. As classes são semelhantes às classes em outras linguagens orientadas a objetos e permitem que você defina objetos que têm propriedades e métodos. As interfaces, por outro lado, são como contratos que definem a forma de um objeto, mas não implementam nenhuma funcionalidade.

interface Usuario {
  nome: string;
  idade: number;
}

class Pessoa implements Usuario {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  dizerOla() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
  }
}

/* const pessoa1: Pessoa = {
  nome: 'João',
  idade: 30
};
 */
//console.log(`Olá, meu nome é ${pessoa1.nome} e eu tenho ${pessoa1.idade} anos`);

// Generics
// O Generics é um recurso do TypeScript que permite criar componentes reutilizáveis e flexíveis, capazes de trabalhar com diversos tipos de dados sem perder a garantia de tipo. O Generics é representado por uma variável de tipo colocada entre sinais de menor e maior (< >).

// Aqui está um exemplo básico de como os Generics funcionam em TypeScript:

// Definição de uma função genérica
function exemploGenerico<T>(argumento: T): T {
  return argumento;
}

// Utilização da função genérica com diferentes tipos de dados
let resultado1: number = exemploGenerico<number>(42);
let resultado2: string = exemploGenerico<string>('Texto');

//console.log(resultado1); // Saída: 42
//console.log(resultado2); // Saída: Texto

// Outro exemplo comum é o uso de Generics em classes:

class Caixa<T> {
  private conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  obterConteudo(): T {
    return this.conteudo;
  }
}

// Instanciando a classe com diferentes tipos de dados
let caixaNumeros = new Caixa<number>(10);
let caixaTexto = new Caixa<string>('Texto');

console.log(caixaNumeros.obterConteudo()); // Saída: 10
console.log(caixaTexto.obterConteudo()); // Saída: Texto
