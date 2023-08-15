//DOM - Document object model
//selecionar elementos

const elementoPorId = document.getElementById("meuId")
console.log(elementoPorId)

//melhor utilizar o querySelector
const elementoPorId2 = document.querySelector("#meuId")
console.log(elementoPorId2)

const elementoPorClasse = document.getElementsByClassName("minhaClasse")
console.log(elementoPorClasse)

const elementoPorClasse2 = document.querySelector(".minhaClasse")
console.log(elementoPorClasse2)

//manipular conteudo do texto

const element = document.querySelector("#meuId")
console.log(element.textContent)
setTimeout(() => {
  element.textContent = "Mudei de texto"
}, 1000)

//trabalhando com atributos
const link = document.querySelector("a")
console.log(link)

link.setAttribute("href", "https://horadecordar.com.br/cursos") //mudou a url que estava o href pelo js
console.log(link.getAttribute("href"))
console.log(link.hasAttribute("target"))
link.removeAttribute("target")

//manipulação de classes do CSS
const elemento = document.querySelector("#meuId")
element.classList.add("novaClasse") //adicionou uma nova classe
element.classList.remove("minhaClasse") //removeuclasse
element.classList.toggle("minhaClase") //se a classe existe, ele remove, se a classe não existe ele adiciona

//MANIPULAR O CSS
const elemento3 = document.querySelector("#meuId")

elemento3.style.color = "blue"
elemento3.style.backgroundColor = "green"

//navegação entre nós
//cada elemento é um nó. organizado em pais e filhos e cada um deles é um nó
//basicamente é navegar entre elementos
const element4 = document.querySelector("#meuInput")

const pai = element4.parentNode
console.log(pai)

//obter o primeiro filho
const primeiroFilho = pai.firstChild
console.log(primeiroFilho)

const ultimoFilho = pai.lastChild
console.log(ultimoFilho)

//manipulação de estrutura do DOM
const novoElemento = document.createElement("div") //criando uma div
console.log(novoElemento)
novoElemento.textContent = "Minha div de javascript"
console.log(novoElemento)

//adicionar ele no html
document.body.appendChild(novoElemento)
document.body.insertBefore(novoElemento, pai)
document.body.removeChild(elementoPorId)

//eventos

//click
const botao = document.querySelector("button")
botao.addEventListener("click", function(){
  console.log("Botão clicado!")
})

//mouse
const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", function(){
  console.log("o mouse passou por aqui")
})

//teclado
const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", function(){
  console.log("O teclado esta sendo usado!")
})

//formulario
const form = document.querySelector("form")
form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("Form enviado")

})

//propagação de eventos
document.querySelector("#elementopai").addEventListener("click", function(){
  console.log("Clique capturado no pai")
})

document.querySelector("elementoFilho").addEventListener("click", function(event){
  //event.stopPropagation()//parar a propagação

  console.log("elemento filho")
})

document.querySelector("#meuLink").addEventListener("click", function(event){
  event.preventDefault()
  console.log("clicou no link!")
})

//delegação de eventos
document.querySelector("elementoPai").addEventListener("click", function(){
  if(event.target.matches(".classeDosFilhos")){
    console.log("Evento delegado para o filho!")
  }
})