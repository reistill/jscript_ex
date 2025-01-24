function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(`A soma de 2 + 3 é: ${soma(2, 3)} \n`)

function comprar(dinheiro, produto) {
    if (dinheiro >= produto) {
        return (`Compra efetuada com sucesso! seu troco é: ${dinheiro - produto} reais \n`)
    } else {
        return (`Saldo insuficiente! seu dinheiro é: ${dinheiro} e o produto custa: ${produto}, faltam: ${produto - dinheiro} reais \n`)
    }
}

console.log(`${comprar(100, 50)}`)
console.log(`${comprar(25, 35)}`)

function parimp(num) {
    if (num % 2 == 0) {
        return (`${num} é par! \n`)
    } else {
        return (`${num} é impar! \n`)
    }
}

console.log(`${parimp(12)} \n`)
console.log(`${parimp(15)}`)

function fatorial(num) {
    let fato = 1
    for (let c = num; c > 1; c--) {
        fato *= c
    }
}

console.log(`O fatorial de 5 é: ${fatorial(5)} \n`)
console.log(`O fatorial de 1 é: ${fatorial(1)} \n`)

//forma recursiva, ou seja, uma função que chama ela mesma
function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(`O fatorial de 5 é: ${fatorial(5)} \n`)
console.log(`O fatorial de 1 é: ${fatorial(1)} \n`)