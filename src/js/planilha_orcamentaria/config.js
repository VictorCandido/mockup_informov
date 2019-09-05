/**
  Arquivo de configuração para Planilha Orçamentária
*/

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
    { type: "numeric", width: 150, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },

    { width: 30, readOnly: true },

    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 120, mask:'R$ #.##,00', decimal:',' },
    { type: "numeric", width: 150, mask:'R$ #.##,00', decimal:',' },
    
    { width: 30, readOnly: true },

    { type: "text", width: 150 },
    { type: "numeric", width: 150, mask:'#.##,00', decimal:',' },
    { type: "numeric", width: 150, mask:'#.##,00', decimal:',' },
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
    var colK = returnColumnId("K");
    var colUnidMatMdo = returnColumnId("PRECO UNIT MAT + MDO");
    var colBDI = returnColumnId("BDI");
    var colDesc = returnColumnId("DESC");
    

    /* ALTERANDO COLUNA K */
    if(colK == x){
        var valorK = returnKValues(value.toLocaleUpperCase());
        var bdi = valorK.BDI;
        var desc = valorK.DESC;
        var destinoBDI = jexcel.getColumnNameFromId([colBDI, y]);
        var destinoDESC = jexcel.getColumnNameFromId([colDesc, y]);

        tableOrcamentaria.setValue(destinoBDI, bdi);
        tableOrcamentaria.setValue(destinoDESC, desc);
    }


    // SALVA OS DADOS TODAS AS ALTERAÇÕES
    dataSave();
}

/**
 * Atualiza todos os dados da tabela
 * @param {*} instance 
 * @param {*} cell 
 * @param {*} col 
 * @param {*} row 
 * @param {*} val 
 * @param {*} label 
 * @param {*} cellName 
 */
const updateTable = (instance, cell, col, row, val, label, cellName) => {
    // if (col == 3) {
    //     alert(val)
    // }
}

/**
 * Fução que traz o index da coluna inserida
 * @param {String} columnName Header da coluna a pesquisar
 */
const returnColumnId = (columnName) => {
    var colunas = tableOrcamentaria.getHeaders().split(",");
    for(var index in colunas){
        if(returnHeaderName(index) == columnName){
            return index;
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
            console.log("Falha", res);
        }
    })
}