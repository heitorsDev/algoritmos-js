function verificarCartao(numero) {
    const digitos = numero.replace(/\D/g, '').split('').reverse().map(Number);
    let soma = 0;

    for (let i = 0; i < digitos.length; i++) {
        let valor = digitos[i];
        if (i % 2 === 1) {
            valor *= 2;
            if (valor > 9) valor -= 9;
        }
        soma += valor;
    }

    return soma % 10 === 0;
}

console.log(verificarCartao("4539578763621486"))
