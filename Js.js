//array

const numeros = [10, 20, 30, 40, 50];

//listas simples

class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaLigadaSimples {
  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }
}

//listas duplas

class NoDuplo {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
    this.anterior = null;
  }
}

class ListaDuplamenteLigada {
  constructor() {
    this.cabeca = null;
    this.cauda = null;
    this.tamanho = 0;
  }
}

//listas circulares

class NoCircular {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaCircular {
  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }
}

//pilha

class Pilha {
  constructor() {
    this.itens = [];
  }

  //empilha
  push(valor) {
    this.itens.push(valor);
  }

  //desempilha
  pop() {
    if (this.vazia()) return undefined;
    return this.itens.pop();
  }
}

//fila

class Fila {
  constructor() {
    this.itens = [];
  }

  //enfileira
  enqueue(valor) {
    this.itens.push(valor);
  }

  //desenfileira
  dequeue() {
    if (this.vazia()) return undefined;
    return this.itens.shift();
  }
}

//alocacao dinamica

class ArrayDinamico {
  constructor(capacidadeInicial = 2) {
    this.capacidade = capacidadeInicial;
    this.tamanho = 0;
    this.dados = new Array(this.capacidade); // "bloco" alocado
  }

  // insere um elemento, se não houver espaço, redimensiona (realoca)
  inserir(valor) {
    if (this.tamanho === this.capacidade) {
      this._redimensionar();
    }
    this.dados[this.tamanho] = valor;
    this.tamanho++;
  }
}

//recursividade

function fatorial(n) {
  if (n === 0 || n === 1) return 1; // caso base
  return n * fatorial(n - 1); // caso recursivo
}
console.log("Fatorial de 5:", fatorial(5));


//tabelas de espelhamento e arvore

class NoArvore {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null;
  }

  // Inserção -> O(log n) em média, O(n) no pior caso
  inserir(valor) {
    const novoNo = new NoArvore(valor);
    if (!this.raiz) {
      this.raiz = novoNo;
      return;
    }
    let atual = this.raiz;
    while (true) {
      if (valor < atual.valor) {
        if (!atual.esquerda) {
          atual.esquerda = novoNo;
          return;
        }
        atual = atual.esquerda;
      } else {
        if (!atual.direita) {
          atual.direita = novoNo;
          return;
        }
        atual = atual.direita;
      }
    }
  }

  // Busca -> O(log n) em média
  buscar(valor, no = this.raiz) {
    if (!no) return false;
    if (valor === no.valor) return true;
    return valor < no.valor
      ? this.buscar(valor, no.esquerda)
      : this.buscar(valor, no.direita);
  }

  // Percurso em ordem (in-order): resulta em valores ordenados
  emOrdem(no = this.raiz, resultado = []) {
    if (no) {
      this.emOrdem(no.esquerda, resultado);
      resultado.push(no.valor);
      this.emOrdem(no.direita, resultado);
    }
    return resultado;
  }

  // Percurso pré-ordem: raiz -> esquerda -> direita
  preOrdem(no = this.raiz, resultado = []) {
    if (no) {
      resultado.push(no.valor);
      this.preOrdem(no.esquerda, resultado);
      this.preOrdem(no.direita, resultado);
    }
    return resultado;
  }
}

//metodos de busca

function buscaLinear(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) return i;
  }
  return -1;
}


function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}

//metodo de ordenacao

function bubbleSort(arr) {
  let array = [...arr]; // Copia para não alterar o original
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Se o elemento atual for maior que o próximo, troca
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

//lista encadeada

// Classe que representa cada nó da lista
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null; // Aponta para o próximo nó (inicia como null)
  }
}

// Classe que gerencia a Lista Encadeada
class ListaEncadeada {
  constructor() {
    this.cabeca = null; // Início da lista
  }

  // Adiciona um elemento ao final da lista
  adicionar(valor) {
    const novoNo = new No(valor);

    if (this.cabeca === null) {
      this.cabeca = novoNo;
      return;
    }

    let atual = this.cabeca;
    while (atual.proximo !== null) {
      atual = atual.proximo;
    }
    atual.proximo = novoNo;
  }

  // Exibe todos os elementos da lista
  imprimir() {
    let atual = this.cabeca;
    const elementos = [];

    while (atual !== null) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }

    console.log(elementos.join(" -> ") + " -> null");
  }
}


