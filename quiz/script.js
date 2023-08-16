const questions = [
  {
    question:
      "Qual é a proposta principal por trás da linguagem de programação Java?",
    choices: [
      "Ser uma linguagem exclusivamente para desenvolvimento web",
      "Priorizar a velocidade de execução em detrimento da portabilidade.",
      "Permitir a criação de programas altamente otimizados para sistemas embarcados.",
      "Ser uma linguagem portátil e orientada a objetos.",
    ],
    answer: "Ser uma linguagem portátil e orientada a objetos.",
  },
  {
    question:
      "Qual é a principal finalidade da linguagem de programação JavaScript?",
    choices: [
      "Desenvolvimento de aplicações mobile nativas.",
      "Criação de animações em 3D para jogos.",
      "Adicionar interatividade e dinamismo a páginas web.",
      "Gerenciamento avançado de bancos de dados.",
    ],
    answer: "Adicionar interatividade e dinamismo a páginas web.",
  },
  {
    question:
      "Qual dos seguintes é um princípio fundamental da linguagem de programação Ruby?",
    choices: [
      "Ser exclusivamente voltada para aprendizado acadêmico.",
      "Focar exclusivamente em programação funcional.",
      "Priorizar a legibilidade do código sobre a sintaxe concisa.",
      "Seguir uma abordagem de programação estruturada clássica.",
    ],
    answer: " Priorizar a legibilidade do código sobre a sintaxe concisa.",
  },
  {
    question:
      "Em Python, qual é a diferença entre uma lista (list) e uma tupla (tuple)?",
    choices: [
      "Listas são imutáveis, enquanto tuplas são mutáveis.",
      "Listas podem armazenar elementos de tipos diferentes, enquanto tuplas armazenam apenas elementos do mesmo tipo.",
      " Listas são ordenadas e permitem duplicatas, enquanto tuplas são desordenadas e não permitem duplicatas.",
      "Listas são mais eficientes em termos de uso de memória do que tuplas.",
    ],
    answer:
      "Listas são ordenadas e permitem duplicatas, enquanto tuplas são desordenadas e não permitem duplicatas.",
  },
  {
    question:
      "Qual é a diferença entre as palavras-chave let, const e var no JavaScript, quando se trata da declaração de variáveis?",
    choices: [
      "let e const declaram variáveis com escopo de bloco, enquanto var tem escopo global.",
      "let permite reatribuição de valor, const declara variáveis imutáveis e var é usada para objetos.",
      "Todas as três palavras-chave são intercambiáveis e podem ser usadas indistintamente.",
      "let e const são usadas para declaração de funções, enquanto var é usada para variáveis normais.",
    ],
    answer:
      " let e const declaram variáveis com escopo de bloco, enquanto var tem escopo global.",
  },
  {
    question: "Qual é o principal benefício da linguagem de programação Rust?",
    choices: [
      "Facilidade de aprendizado para iniciantes.",
      "Ênfase na programação funcional.",
      "Prevenção de falhas de memória e segurança de threads.",
      "Suporte avançado para desenvolvimento web.",
    ],
    answer: "Prevenção de falhas de memória e segurança de threads.",
  },
  {
    question: "Qual empresa desenvolveu a linguagem de programação C#?",
    choices: ["Apple", "Microsoft", "Google", "Adobe"],
    answer: "Microsoft",
  },
  {
    question: "O que o '++' representa na linguagem de programação C++?",
    choices: [
      "Uma indicação para iniciar um novo bloco de código.",
      "Uma forma de incrementar o valor de uma variável em 1.",
      "Um operador para multiplicação em C++.",
      "Uma instrução para encerrar o programa.",
    ],
    answer: "Uma forma de incrementar o valor de uma variável em 1.",
  },
]

const questionElement = document.querySelector("#question")
const choiceElements = document.querySelectorAll(".choice")
const nextButton = document.querySelector("#next")
const scoreElement = document.querySelector("#score")
const wrongElement = document.querySelector("#wrong")

let currentQuestion = 0
let score = 0
let wrong = 0
let answerChose = false

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion]
  questionElement.innerText = currentQuestionData.question

  const choices = shuffleArray(currentQuestionData.choices)

  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i]
  }
  answerChose = false
}

function shuffleArray(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
function checkAnswer(e){
  if(answerChose)return
  answerChose = true
  if(e.target.innerText === questions[currentQuestion].answer){
    score++
    scoreElement.innerText = `Pontuação ${score}`
    alert("Correto")
  }else{
    wrong++
    wrongElement.innerText = `Erros: ${wrong}`
    alert(`"Errado! A resposta correta é: ${questions[currentQuestion].answer}`)
  }
}

choiceElements.forEach((btn) => {
  btn.addEventListener("click", checkAnswer)
})
nextButton.addEventListener("click", () => {
  if(!answerChose){
    alert("Por favor, responda a pergunta!")
  }
  currentQuestion++
  if(currentQuestion < questions.length){
    loadQuestion()
  }else{
    alert(`Fim de jogo! Você acertou: ${score} de ${questions.length} perguntas`)
    
  }

})
//reiniciar o quiz
function restartQuiz(){
  currentQuestion = 0
  score = 0
  wrong = 0
  scoreElement.innerText = `Pontuação: 0 `
  wrongElement.innerText = `Erros: 0`
  loadQuestion()

}
loadQuestion()
