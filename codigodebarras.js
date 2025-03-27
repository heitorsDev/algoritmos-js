const bancoDeDados = {
    paises: [
        { codigo: '789', nome: 'Brasil' },
        { codigo: '690', nome: 'China' },
        { codigo: '880', nome: 'Coreia do Sul' },
        { codigo: '000', nome: 'Estados Unidos' },
        { codigo: '400', nome: 'Alemanha' },
        { codigo: '030', nome: 'Canadá' },
        { codigo: '076', nome: 'Reino Unido' },
        { codigo: '950', nome: 'Argentina' },
        { codigo: '003', nome: 'França' },
        { codigo: '073', nome: 'México' }
    ],
    fabricantes: [
        { codigo: '7891', nome: 'Fabricante A' },
        { codigo: '6902', nome: 'Fabricante B' },
        { codigo: '8812', nome: 'Fabricante C' },
        { codigo: '4001', nome: 'Fabricante D' },
        { codigo: '9501', nome: 'Fabricante E' },
        { codigo: '0301', nome: 'Fabricante F' },
        { codigo: '0761', nome: 'Fabricante G' },
        { codigo: '0031', nome: 'Fabricante H' },
        { codigo: '0731', nome: 'Fabricante I' },
        { codigo: '0131', nome: 'Fabricante J' }
    ],
    produtos: [
        { codigoEAN: '78912', nome: 'Produto A', fabricante: 'Fabricante A', pais: 'Brasil' },
        { codigoEAN: '69012', nome: 'Produto B', fabricante: 'Fabricante B', pais: 'China' },
        { codigoEAN: '88012', nome: 'Produto C', fabricante: 'Fabricante C', pais: 'Coreia do Sul' },
        { codigoEAN: '40012', nome: 'Produto D', fabricante: 'Fabricante D', pais: 'Alemanha' },
        { codigoEAN: '95012', nome: 'Produto E', fabricante: 'Fabricante E', pais: 'Argentina' },
        { codigoEAN: '03012', nome: 'Produto F', fabricante: 'Fabricante F', pais: 'Canadá' },
        { codigoEAN: '07612', nome: 'Produto G', fabricante: 'Fabricante G', pais: 'Reino Unido' },
        { codigoEAN: '00312', nome: 'Produto H', fabricante: 'Fabricante H', pais: 'França' },
        { codigoEAN: '07312', nome: 'Produto I', fabricante: 'Fabricante I', pais: 'México' },
        { codigoEAN: '01312', nome: 'Produto J', fabricante: 'Fabricante J', pais: 'Estados Unidos' }
    ]
};

function calcularDigitoVerificador(ean12) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        const multiplicador = (i % 2 === 0) ? 1 : 3;
        soma += parseInt(ean12[i]) * multiplicador;
    }
    const resto = soma % 10;
    return resto === 0 ? 0 : 10 - resto;
}

function buscarInformacoes(codigoEAN) {
    const ean12 = codigoEAN.slice(0, 12);
    const digitoCalculado = calcularDigitoVerificador(ean12);
    const digitoReal = parseInt(codigoEAN[12]);

    if (digitoCalculado !== digitoReal) {
        console.log("Código EAN inválido!");
        return;
    }

    const codigoPais = codigoEAN.slice(0, 3);
    const codigoFabricante = codigoEAN.slice(0, 4);
    const codigoProduto = codigoEAN.slice(0, 5);

    const pais = bancoDeDados.paises.find(p => p.codigo === codigoPais);
    const fabricante = bancoDeDados.fabricantes.find(f => f.codigo === codigoFabricante);
    const produto = bancoDeDados.produtos.find(p => p.codigoEAN === codigoProduto);

    console.log("Informações do Código EAN:");
    console.log("Código:", codigoEAN);
    console.log("País de Origem:", pais ? pais.nome : "Desconhecido");
    console.log("Fabricante:", fabricante ? fabricante.nome : "Desconhecido");
    console.log("Produto:", produto ? produto.nome : "Desconhecido");
}

const codigoExemplo = "7895858102258";
buscarInformacoes(codigoExemplo);
