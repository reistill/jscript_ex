function tabuada() {
    //pegamos os elementos por seu ID e colocamos numa váriavel 
    let num = document.getElementById('txtnum')
    let seltab = document.getElementById('seltab')
    //num.value.length serve para verificar se o campo está vazio, vendo se o valor do input informado == 0(vazio)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10) {
            //a váriavel item cria um elemento <option> no nosso select tab
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
            c++
        }
    }
}