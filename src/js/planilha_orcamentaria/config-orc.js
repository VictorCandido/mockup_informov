// Colunas da Planilha Orçamentária
const Orcamentariacolumns = [
    { type: "text", width: 120, wordWrap:true },
    { type: "text", width: 100 },
    { type: "text", width: 120 },
    { type: "text", width: 120 },
    { type: "text", width: 300, readOnly: true },
    { type: "text", width: 380, wordWrap:true },
    { type: "text", width: 80 },
    { type: "numeric", width: 100 },
    { type: "numeric", width: 150, mask:'R$ #.##,00', decimal:',', readOnly: true },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',', readOnly: true },

    { width: 30, readOnly: true },

    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',', readOnly: true },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',', readOnly: true },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',', readOnly: true },
    { type: "numeric", width: 150, mask:'R$ #.##,00', decimal:',', readOnly: true },
    
    { width: 30, readOnly: true },

    { type: "text", width: 150 },
    { type: "numeric", width: 150, mask:'#.##,00', decimal:',', readOnly: false },
    { type: "numeric", width: 150, mask:'#.##,00', decimal:',', readOnly: false },
    { type: "text", width: 180, },
]

// NestedHeaders Planilha Orçamentária
const OrcamentarianestedHeaders = [
    [
        { colspan: "11" },
        { title: "CUSTO UNITARIO", colspan: "3" },
        { title: "CUSTO TOTAL - R$ VAI PARA COMPATIBILIZADA", colspan: "3" },
        { colspan: "5" },
    ],
    [
        { title: "ITEM CLIENTE", colspan: "1" },
        { title: "ITEM", colspan: "1" },
        { title: "RM COD_SERV", colspan: "1" },
        { title: "COD_PROJ", colspan: "1" },
        { title: "SERVICOS", colspan: "1" },
        { title: "DESCRICAO", colspan: "1" },
        { title: "UNID", colspan: "1" },
        { title: "QUANTID", colspan: "1" },
        { title: "PRECO UNIT MAT + MDO", colspan: "1" },
        { title: "PRECO TOTAL", colspan: "1" },
    
        { title: " ", colspan: "1" },
    
        { title: "MAT", colspan: "1" },
        { title: "MDO", colspan: "1" },
        { title: "MAT + MDO", colspan: "1" },
        { title: "MAT - TOTAL", colspan: "1" },
        { title: "MDO - TOTAL", colspan: "1" },
        { title: "MAT + MDO - TOTAL", colspan: "1" },
        
        { title: " ", colspan: "1" },
    
        { title: "K", colspan: "1" },
        { title: "BDI", colspan: "1" },
        { title: "DESC", colspan: "1" },
        { title: "OBSERVACOES GERAIS", colspan: "1" },
    ]
]

/**
 * Evento de change da tabela de Orçamentos
 * @param {*} instance HTML da tabela
 * @param {*} cell HTML da célula
 * @param {String} x Coluna
 * @param {String} y Linha
 * @param {*} value Valor da célula
 */
const change_orcamentista = (instance, cell, x, y, value) => {
    var K_NUMBER = returnColumnId("orc", "K");
    var PRECO_TOTAL_NUMBER = returnColumnId("orc", "PRECO TOTAL");
    var MAT_MDO_TOTAL_NUMBER = returnColumnId("orc", "MAT + MDO - TOTAL");
    var BDI_NUMBER = returnColumnId("orc", "BDI");
    var DESC_NUMBER = returnColumnId("orc", "DESC");
    

    /* ALTERANDO COLUNA K */
    if(x == K_NUMBER){
        var valorK = returnKValues(value.toLocaleUpperCase());
        var destinoBDI = jexcel.getColumnNameFromId([BDI_NUMBER, y]);
        var destinoDESC = jexcel.getColumnNameFromId([DESC_NUMBER, y]);

        tableOrcamentaria.setValue(destinoBDI, valorK.BDI);
        tableOrcamentaria.setValue(destinoDESC, valorK.DESC);

    }
    /* ALTERANDO COLUNA PREÇO TOTAL */
    else if(x == PRECO_TOTAL_NUMBER){
        calcCustoVendaTotal()   //  Calcula total de custo e venda
    }
    /* ALTERANDO COLUNA MAT + MDO - TOTAL */
    else if(x == MAT_MDO_TOTAL_NUMBER){
        calcCustoVendaTotal()   //  Calcula total de custo e venda
    }


    // SALVA OS DADOS TODAS AS ALTERAÇÕES
    dataSave();
}

/**
 * Atualiza todos os dados da tabela
 */
const updateTable = (instance, cell, col, row, val, label, cellName) => {
}


/**
 * Calcula o total de custo e venda e insere o valor na tabela BDI.
 */
const calcCustoVendaTotal = () => {
    /* COLUNAS ORÇAMENTISTA */
    var K_NUMBER = returnColumnId("orc", "K");
    var MAT_MDO_TOTAL_NUMBER = returnColumnId("orc", "MAT + MDO - TOTAL");
    var PRECO_TOTAL_NUMBER = returnColumnId("orc", "PRECO TOTAL");

    /* COLUNAS BDI */
    var TIPO_NUMBER = returnColumnId("bdi", "TIPO");
    var CUSTO_NUMBER = returnColumnId("bdi", "CUSTO");
    var VENDA_NUMBER = returnColumnId("bdi", "VENDA");

    var getColumnData = (column) => tableBDI.getColumnData(column);
    var k_column = tableOrcamentaria.getColumnData(K_NUMBER);   // COLUNA K
    var dadosArray = new Array();

    for(var i in k_column){
        let custoColumn = jexcel.getColumnNameFromId([MAT_MDO_TOTAL_NUMBER, i]);
        let vendaColumn = jexcel.getColumnNameFromId([PRECO_TOTAL_NUMBER, i]);

        let contentCusto = tableOrcamentaria.getCell(custoColumn).textContent.split(".").join("");
        let contentVenda = tableOrcamentaria.getCell(vendaColumn).textContent.split(".").join("");

        let custo = contentCusto == "" ? 0 : parseFloat(contentCusto.split("R$ ")[1].split(",").join("."));
        let venda = contentVenda == "" ? 0 : parseFloat(contentVenda.split("R$ ")[1].split(",").join("."));

        dadosArray.push({
            tipo: k_column[i].toLocaleUpperCase(),
            custo: custo,
            venda: venda
        });
    }

    var result = _.groupBy(dadosArray, "tipo");

    for(var i in getColumnData()){
        let custo = _.sumBy(result[ getColumnData(TIPO_NUMBER)[i].toLocaleUpperCase() ], "custo");
        let venda = _.sumBy(result[ getColumnData(TIPO_NUMBER)[i].toLocaleUpperCase() ], "venda");

        let destinoCusto = jexcel.getColumnNameFromId([CUSTO_NUMBER, i]);
        let destinoVenda = jexcel.getColumnNameFromId([VENDA_NUMBER, i]);

        tableBDI.setValue(destinoCusto, custo);
        tableBDI.setValue(destinoVenda, venda);
    }

}

/**
 * Fução que traz o index da coluna inserida
 * @param {String} columnName Header da coluna a pesquisar
 */
const returnColumnId = (table, columnName) => {
    if(table === "orc"){
        if(tableOrcamentaria){
            var colunas = tableOrcamentaria.getHeaders().split(",");
            for(var index in colunas){
                if(returnHeaderName(index) == columnName){
                    return index;
                }
            }
        }else{
            return false;
        }
    }else if(table === "bdi"){
        var colunas = tableBDI.getHeaders().split(",");
        for(var index in colunas){
            if(colunas[index] == columnName){
                return index;
            }
        }
    }else if(table === "compat"){
        var colunas = tableCompat.getHeaders().split(",");
        for(var index in colunas){
            if(colunas[index] == columnName){
                return index;
            }
        }
    }
}

/**
 * Função que retorna o nome da coluna
 * @param {*} index Número da coluna a pesquisar o nome
 */
const returnHeaderName = (index) => {
    var headers = $("#table").find('thead>.jexcel_nested td');

    for(var i = 0; i < headers.length; i++){
        if($(headers[i]).attr("data-column") == index){
            var column = headers[i];
            return column.textContent;
        }
    }
}

/**
 * Realiza a requisição no servidor para salvar os dados.
 */
const dataSave = () => {
    $.ajax({
        url:"https://mockup-informov.herokuapp.com/orcamentista/1",
        type:"PUT",
        contentType: "application/json",
        data: JSON.stringify({
            data: JSON.stringify(tableOrcamentaria.getData()),
            style: JSON.stringify(tableOrcamentaria.getStyle())
        }),
        beforeSend: () => {
            $("#statusServidor").text("Salvando... Aguarde!");
        },
        success: res => {
            $("#statusServidor").text("Salvo com sucesso!");
            console.log("Sucesso", res);
        },
        error: res => {
            $("#statusServidor").text("Falha ao salvar os dados!");
            console.log("Falha", res);
        }
    })
}