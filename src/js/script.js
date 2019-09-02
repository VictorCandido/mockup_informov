const columns = [
    { title: "ITEM CLIENTE", width: 120 },
    { title: "ITEM", width: 100 },
    { title: "RM COD_SERV", width: 120 },
    { title: "COD_PROJ", width: 120 },
    { title: "SERVICOS", width: 300, type: "text", readOnly: true },
    { title: "DESCRICAO", width: 380 },
    { title: "UNID", width: 80 },
    { title: "QUANTID", width: 100 },
    { title: "PRECO UNIT MAT + MDO", width: 150 },
    { title: "PRECO TOTAL", width: 120 },
    { title: "MAT", width: 120 },
    { title: "MDO", width: 120 },
    { title: "MAT + MDO", width: 120 },
    { title: "MAT - TOTAL", width: 120 },
    { title: "MAT - TOTAL", width: 120 },
    { title: "MAT + MDO - TOTAL", width: 150 }
]

const nestedHeaders = [
    [
        { colspan: "10" },
        { title: "CUSTO UNITARIO", colspan: "3" },
        { title: "CUSTO TOTAL - R$ VAI PARA COMPATIBILIZADA", colspan: "3" },
    ]
]

var table = jexcel(document .getElementById("table"), {
    data: [],
    columns: columns,
    nestedHeaders: nestedHeaders,
    minDimensions: [16, 30]
});