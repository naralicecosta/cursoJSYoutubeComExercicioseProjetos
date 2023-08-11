//exercicio de manipulação de array
//crie uma lista de compras que é inicialmente vazia
//adicione 5 itens á lista usando push
//agora, remova o primeiro item da lista usando shift()
//imprima a lista final no console
const listaDeCompras = []

//adicionando
listaDeCompras.push("sabão", "amaciante", "detergente", "agua sanitária", "pó")

//removendo o primeiro item
listaDeCompras.shift()
console.log(listaDeCompras)

//ex2: manipulação de array = find()
//vocÊ tem um array de números:[3,7,14,21,29,36]
//use a função find() para encontrar o primeiro número que é divisivel por 7
//e maior que 10
const numeros = [3, 7, 14, 21, 29, 36]
const numero = numeros.find((num) => num > 10 && num % 7 === 0)
console.log(numeros)

//ex3: filter()
//dado o array de números: [5,10,15,20,25,30,35,40]
//use a função filter() para criar um novo array que conteha apenas os os numeros
//que são maiores que 20
const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]
const filtrados = numeros2.filter((num) => num > 20)
console.log(filtrados)

//ex4: split(), trim()
//dado a string "Bom dia mundo!    "
//remova os espaços em branco no inicio e no final da string
//em seguida, divida a string em palavras
const frase = "Bom dia   mundo !   "
const palavras = frase.trim().split(" ")
console.log(palavras)

//ex5: starwith(), endswith()
//dada a string: "o rato roeu a roupa do rei de roma"
//verifique se a string começa com a palavra "O" e termina com a palvra "Roma"
const frase2 = "O rato roeu a roupa do rei de Roma"
const comecaCom = frase2.startsWith("O")
const terminaCom = frase2.endsWith("Roma")
console.log(comecaCom)
console.log(terminaCom)

