//crie um script que imprma "Ola mundo!" no console
console.log("Olá mundo!")

//ex2:  conversão de tipos
//Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console
const valorString = "1234"
const valorNumber = Number(valorString)
console.log(typeof valorNumber)

//ex3: manipulação de strings
//Dado uma string "Javascript é incrivel", escreva um codigo que mostre quantas letras e quantas palavras tem na frase
const minhaString = "Javascript é incrivel"
const numeroDeCaracteres = minhaString.length
const numeroDePalavras = minhaString.split("").length

console.log(`O número de caracteres é: ${numeroDeCaracteres}`)
console.log(`O número de palavras é: ${numeroDePalavras}`)

//ex4:loops e arrays
// criar um array com 5 nomes. use um loop for para imprimir cada nome no console.
var nome = ["samantha", "ana", "Nara", "victoria", "nathy"]
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

//ex5: funções, strings e math
//crie uma função que aceite uma string representando um horario no formato de 24h(por ex "14:30"). a função deve retornar uma string que converta um horario para o formato de 12h (ex: 2:30pm). use o objeto math para criar essa conversão. certifique-se que sua função lida corretamente com horarios  na meia noite ate meio dia

function converterHorario(horario24) {
  //14:20 => hora = 14, minuto = 20 => split(":") => [0]
  //const hora = horario24.split(":")[0]
  //const minuto = horario24.split(":")[1]

  //deixando o codigo mais simples
  const [hora, minuto] = horario24.split(":")
  const hora12 = hora % 12 || 12
  let periodo = "AM"
  if (hora > 12) {
    periodo = "PM"
  }
  console.log(`${hora12}:${minuto} ${periodo}`)
}
converterHorario("15:16")
