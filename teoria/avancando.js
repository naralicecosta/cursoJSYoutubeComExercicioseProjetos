//manipulando arrays
const frutas = ["maçã", "Laranja"]

//adicionar algo no começo do array. push adiciona no fim e unshift no começo
frutas.unshift("acerola")
console.log(frutas)

frutas.shift();//remove um elemento
console.log(frutas)

//find => retorna o primeiro elemento do critério
const numeroPar =  numeros.find((num) => num % 2===0)
console.log(numeroPar)

//filter => retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num %2 === 0)
console.log(numerosPares)

//manipulação de strings
const frase = "Ola, mundo! "
const palavras = frase.trim()//Remove os espaços em branco iniciais e finais e os caracteres de terminação de linha de uma string.
console.log(frase)
console.log(palavras)

const frase2 = "Javascript é incrivel!!"
console.log(frase2.startsWith("Java"))//Retorna verdadeiro se a sequência de elementos de searchString convertidos em String for igual aos elementos correspondentes deste objeto (convertidos em String) começando na posição. Caso contrário, retorna falso.
console.log(frase2.endsWith("!"))

