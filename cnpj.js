function gerarCNPJ() {
    function rand(n) {
      return Math.floor(Math.random() * n);
    }
  
    const n = [];
    for (let i = 0; i < 8; i++) n.push(rand(10));
    n.push(0, 0, 0, 1);
  
    function calcDigitos(cnpj, pesos) {
      let soma = 0;
      for (let i = 0; i < pesos.length; i++) soma += cnpj[i] * pesos[i];
      let resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    }
  
    const d1 = calcDigitos(n, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    n.push(d1);
    const d2 = calcDigitos(n, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    n.push(d2);
  
    return n.join('');
  }
  
  console.log(gerarCNPJ());
  