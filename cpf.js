function validarCPF(cpf) {
    cpf = cpf.replace(/[.-]/g, ""); 
    if (cpf.length !== 11 || !/^[0-9]+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let resto = soma % 11;
    let primeiroDigito = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    resto = soma % 11;
    let segundoDigito = resto < 2 ? 0 : 11 - resto;

    return primeiroDigito === parseInt(cpf[9]) && segundoDigito === parseInt(cpf[10]);
}

console.log(validarCPF("133.156.519-73")); 