//JOGADORES DE FUTEBOL

//Jogador 01 ---------------------------------------------------

// const nomeJogador1 = "Cristiano Ronaldo"
// console.log(nomeJogador1.toUpperCase())

// let idadeJogador1 = 37
// console.log(`A idade do ${nomeJogador1} é: ${idadeJogador1} anos.`)

// let nivelJogador1 = 5
// console.log(`O ${nomeJogador1} é um jogador ${nivelJogador1} estrelas.`)

// const statusMundial1 = nivelJogador1 >= 4
// console.log(`O ${nomeJogador1} é craque? ${statusMundial1}`)

// const caracteJogador1 = ["Finalização apurada" , " Censo de posicionamento" , " Capacidade de liderança"]
// console.log(`As características do ${nomeJogador1} são: ${caracteJogador1}`)

const nivel1 = 5

objeto1 = {
    nome: "Cristiano Ronaldo",
    idade: 37,
    nivel: 5,
    status: nivel1 >= 4,
    caracteristica: ["Finalização apurada" , " Censo de posicionamento" , " Capacidade de liderança"],
}
console.log(objeto1["nome"].toUpperCase())
console.log(`A idade do ${objeto1["nome"]} é: ${objeto1["idade"]} anos.`)
console.log(`O ${objeto1["nome"]} é um jogador ${objeto1["nivel"]} estrelas.`)
console.log(`O ${objeto1["nome"]} é craque? ${objeto1["status"]}`)
console.log(`As características do ${objeto1["nome"]} são: ${objeto1["caracteristica"]}`)


//Jogador 02 ---------------------------------------------------

// const nomeJogador2 = "Lionel Messi"
// console.log(nomeJogador2.toUpperCase())

// let idadeJogador2 = 35
// console.log(`A idade do ${nomeJogador2} é: ${idadeJogador2} anos.`)

// let nivelJogador2 = 5
// console.log(`O ${nomeJogador2} é um jogador ${nivelJogador2} estrelas.`)

// const statusMundial2 = nivelJogador2 >= 4
// console.log(`O ${nomeJogador2} é craque? ${statusMundial2}`)

// const caracteJogador2 = ["Técnica apurada" , " Habilidade extraordinária" , " Finalização apurada"]
// console.log(`As características do ${nomeJogador2} são: ${caracteJogador2}`)

const nivel2 = 5

objeto2 = {
    nome: "Lionel Messi",
    idade: 35,
    nivel: 5,
    status: nivel2 >= 4,
    caracteristica: ["Técnica apurada" , " Habilidade extraordinária" , " Finalização apurada"],
}
console.log(objeto2["nome"].toUpperCase())
console.log(`A idade do ${objeto2["nome"]} é: ${objeto2["idade"]} anos.`)
console.log(`O ${objeto2["nome"]} é um jogador ${objeto2["nivel"]} estrelas.`)
console.log(`O ${objeto2["nome"]} é craque? ${objeto2["status"]}`)
console.log(`As características do ${objeto2["nome"]} são: ${objeto2["caracteristica"]}`)


//Jogador 03 ---------------------------------------------------

// const nomeJogador3 = "Erling Haaland"
// console.log(nomeJogador3.toUpperCase())

// let idadeJogador3 = 22
// console.log(`A idade do ${nomeJogador3} é: ${idadeJogador3} anos.`)

// const nivelJogador3 = 3
// console.log(`O ${nomeJogador3} é um jogador ${nivelJogador3} estrelas.`)

// const statusMundial3 = nivelJogador3 >=4
// console.log(`O ${nomeJogador3} é craque? ${statusMundial3}`)

// const caracteJogador3 = ["Força física" , " Finalização apurada" , " Capacidade de evolução"]
// console.log(`As características do ${nomeJogador3} são: ${caracteJogador3}`)

const nivel3 = 3

objeto3 = {
    nome: "Erling Haaland",
    idade: 22,
    nivel: 3,
    status: nivel3 >= 4,
    caracteristica: ["Força física" , " Finalização apurada" , " Capacidade de evolução"],
}
console.log(objeto3["nome"])
console.log(`A idade do ${objeto3["nome"]} é ${objeto3["idade"]} anos.`)
console.log(`O ${objeto3["nome"]} é um jogador ${objeto3["nivel"]} estrelas.`)
console.log(`O ${objeto3["nome"]} é craque? ${objeto3["status"]}`)
console.log(`As características do ${objeto3["nome"]} são: ${objeto3["caracteristica"]}`)


//Jogador 04 ---------------------------------------------------

// const nomeJogador4 = "Zlatan Ibrahimović"
// console.log(nomeJogador4.toUpperCase())

// let idadeJogador4 = 40
// console.log(`A idade do ${nomeJogador4} é: ${idadeJogador4} anos.`)

// let nivelJogador4 = 3
// console.log(`O ${nomeJogador4} é um jogador ${nivelJogador4} estrelas.`)

// const statusMundial4 = nivelJogador4 >= 4
// console.log(`O ${nomeJogador4} é craque? ${statusMundial4}`)

// const caracteJogador4 = ["Finalização apurada" , " Censo de posicionamento" , " Propensão a lesões"]
// console.log(`As características do ${nomeJogador4} são: ${caracteJogador4}`)

const nivel4 = 3

objeto4 = {
    nome: "Zlatan Ibrahimović",
    idade: 40,
    nivel: 3,
    status: nivel4 >= 4,
    caracteristica: ["Finalização apurada" , " Censo de posicionamento" , " Propensão a lesões"],
}
console.log(objeto4["nome"])
console.log(`A idade do ${objeto4["nome"]} é ${objeto4["idade"]} anos`)
console.log(`O ${objeto4["nome"]} é um jogador ${objeto4["nivel"]} estrelas`)
console.log(`O ${objeto4["nome"]} é craque? ${objeto4["status"]}`)
console.log(`As características do ${objeto4["nome"]} são: ${objeto4["caracteristica"]}`)


//Médias dos Jogadores -------------------------------------------

const idadeMediaJogadores = (objeto1["idade"] + objeto2["idade"] + objeto3["idade"] + objeto4["idade"]) / 4
console.log(`A média de idade entre os jogadores é de: ${idadeMediaJogadores} anos.`)

const nivelMedioJogadores = (objeto1["nivel"] + objeto2["nivel"] + objeto3["nivel"] + objeto4["nivel"]) / 4
console.log(`A média do nível entre os jogadores é de: ${nivelMedioJogadores} estrelas.`)


//Array para guardar os objetos (Jogadores)

const jogadoresFutebol = []

jogadoresFutebol.push(objeto1, objeto2, objeto3, objeto4)
console.log(jogadoresFutebol)

//Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()”
// (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do
// objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a
// propriedade booleana for true;

const jogadoresCraques = []
if(objeto1["status"]){
    jogadoresCraques.push(objeto1)
} else{
    alert(`O jogador ${objeto1["nome"]} não foi inserido na lista`)
}
if(objeto2["status"]){
    jogadoresCraques.push(objeto2)
} else{
    alert(`O jogador ${objeto2["nome"]} não foi inserido na lista`)
}
if(objeto3["status"]){
    jogadoresCraques.push(objeto3)
} else{
    alert(`O jogador ${objeto3["nome"]} não foi inserido na lista`)
}
if(objeto4["status"]){
    jogadoresCraques.push(objeto4)
} else{
    alert(`O jogador ${objeto4["nome"]} não foi inserido na lista`)
}
console.log(jogadoresCraques)

