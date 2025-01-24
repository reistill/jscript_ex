let num = [5, 8, 9, 1, 3, 7, 2]
console.log(num)

num[6] = 6
console.log(num)

num.push(0)
console.log(num)

console.log(`O primeiro valor do vetor num é: ${num[0]} \n`)

//tamanho do array num
console.log(`Esse é o tamanho do vetor num: ${num.length} \n`)

//procurar o valor 7 no array num
console.log(`Esssa é a posição do valor 7 no vetor num: ${num.indexOf(7)} \n`)

//console.log(`Esse é o vetor num, só que organizado: ${num.sort()} \n`)

//for padrão para percorer um array
for (pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]} \n`)
}

//for simplificado para percorrer um array
for (pos in num) {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

//caso o indexOf() não encontre o valor escolhido, ele retorna -1
let posi = num.indexOf(3)
if (posi == -1) {
    console.log(`O valor ${posi} não foi encontrado`)
} else {
    console.log(`O valor ${posi} foi encontrado na posição ${posi}`)
}

//arrayevoluído = (objeto)
let obj = {talher:'garfo', 
    sexo:'masculino', 
    peso: 80, 
    altura: '1,80m', 
    engordar(p){
        this.peso += p
        console.log(`Engordou ${p}kg. Agora o peso é ${this.peso}kg`)
}}

console.log(obj)
obj.engordar(3)
console.log(obj)
