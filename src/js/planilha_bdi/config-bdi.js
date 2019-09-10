/**
 * Arquivo de configuração da Planilha de Definição BDI
 */

// Colunas da Planilha de BDI
const bdiColumns = [
    { type: "text", title: "TIPO", width: 80 },
    { type: "numeric", title: "K", mask:'#.##,0000', width: 100, decimal:',' },
    { type: "numeric", title: "DESC.", mask:'#.##,0000', width: 100, decimal:',' },
    { type: "text", title: "OBSERVACOES", width: 200, wordWrap:true, },
    { title: " ", width: 30, readOnly: true },
    { type: "numeric", title: "CUSTO", width: 160, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", title: "VENDA", width: 160, mask:'R$ #.##,00', decimal:',' },
    { title: " ", width: 30, readOnly: true },
    { type: "numeric", title: "CUSTO", width: 200, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", title: "VENDA", width: 200, mask:'R$ #.##,00', decimal:',' },
    { type: "text", title: "TIPO", width: 200 },
]

// NestedHeaders Planilha de BDI
const bdiNestedHeaders = [
    [
        { title: "DEFINICAO DE BDI - K1 é padrão", colspan: "4" },
        { colspan: '1' },
        { title: "VALORES POR K", colspan: "2" },
        { colspan: "4" },
    ]
]

const updateTableBDI = (instance, cell, col, row, val, label, cellName) => {
    // VERIFICANDO OS K QUANDO ALTERAR ALGUM VALOR
    // if (col == 0) {
        
    // }
}

const changeBDI = (instance, cell, x, y, value) => {
    if (x == 1 || x == 2) {
        updateData(instance, cell, x, y, value);
    }

    dataSaveBdi();
}

const updateData = (instance, cell, x, y, value) => {
    if(tableOrcamentaria){
        var colBDI = returnColumnId("orc", "BDI");
        var colK = returnColumnId("orc", "K");
        var colDESC = returnColumnId("orc", "DESC");

        var valorK = tableBDI.getRowData(y)[0];
        var linhasK = tableOrcamentaria.getColumnData(colK);
        for(var i in linhasK){
            if(linhasK[i].toUpperCase() == valorK.toUpperCase()){
                var values = returnKValues(linhasK[i].toUpperCase());
                var destinoBDI = jexcel.getColumnNameFromId([colBDI, i]);
                var destinoDESC = jexcel.getColumnNameFromId([colDESC, i]);
                
                tableOrcamentaria.setValue(destinoBDI, values.BDI);
                tableOrcamentaria.setValue(destinoDESC, values.DESC);
            }
        }
    }
}

const dataSaveBdi = () => {
    $.ajax({
        url:"https://mockup-informov.herokuapp.com/bdi/1",
        type:"PUT",
        contentType: "application/json",
        data: JSON.stringify({
            data: JSON.stringify(tableBDI.getData()),
            style: JSON.stringify(tableBDI.getStyle())
        }),
        beforeSend: () => {
            $("#statusServidorBDI").text("Salvando... Aguarde!");
        },
        success: res => {
            $("#statusServidorBDI").text("Salvo com sucesso!");
            console.log("Sucesso", res);
        },
        error: res => {
            $("#statusServidorBDI").text("Falha ao salvar os dados!");
            console.log("Falha", res);
        }
    })
}