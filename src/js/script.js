/**
 * Instancia Planilha Orçamentária
 */
const tableOrcamentaria = jexcel(document.getElementById("table"), {
    data: content,
    columns: Orcamentariacolumns,
    nestedHeaders: OrcamentarianestedHeaders,
    minDimensions: [16, 30],
    toolbar: toolbar,
    style: style,
    contextMenu: menuItens,
    onchange: change_orcamentista
});

const tableBDI = jexcel(document.getElementById("table-bdi"), {
    data: contentBdi,
    columns: bdiColumns,
    nestedHeaders: bdiNestedHeaders,
    minDimensions: [11, 5],
    toolbar: toolbar,
    style: styleBdi,
    allowInsertColumn: false,
    allowDeleteColumn: false,
    allowRenameColumn: false,
    contextMenu: menuItens
});

const calculaK = (valor) => {
    var columnK = tableBDI.getColumnData(0);
        
    for(var i in columnK){
        if(columnK[i] == valor){
            return tableBDI.getRowData(i)[1].split(",").join(".");
        }
    }
    return "";
}

/**
 * Criação de funções fora da tabela com jQuery
 */

$("#abrir").click(e => {
    $(".content").toggle('2');
    $("#abrir").hide();
    $("#fechar").show();
});

$("#fechar").click(e => {
    $(".content").toggle('2');
    $("#fechar").hide();
    $("#abrir").show();
});

$(document).ready(e => {
    $('.tabs').tabs();

    $("#fechar").hide();
    $(".content").toggle();

    // $(".readonly").css('color', 'black');
});

