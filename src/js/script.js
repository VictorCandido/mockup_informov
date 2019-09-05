/**
 * Instancia Planilha Orçamentária
 */

var OrcData = "";
var tableOrcamentaria;

$.ajax({
	url:"https://mockup-informov.herokuapp.com/orcamentista/1",
	type:"GET",
	success: res => {
        tableOrcamentaria = jexcel(document.getElementById("table"), {
            data: JSON.parse(res.data),
            columns: Orcamentariacolumns,
            nestedHeaders: OrcamentarianestedHeaders,
            minDimensions: [16, 10],
            toolbar: toolbar,
            style: JSON.parse(res.style),
            contextMenu: menuItens,
            onchange: change_orcamentista,
            updateTable: updateTable
        });
        $("#statusServidor").text("Carregado com sucesso!");
    },
	error: res => {
		console.log("Falha", res);
    }
})


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

const tableCompat = jexcel(document.getElementById("table-compat"), {
    data: contentCompat,
    style: style,
    minDimensions: [5, 5],
    columns: columnsCompat,
    contextMenu: menuItens,
    toolbar: toolbar,
    allowInsertColumn: false,
    allowDeleteColumn: false,
    allowRenameColumn: false,
});

const returnKValues = (valor) => {
    var columnK = tableBDI.getColumnData(0);
        
    for(var i in columnK){
        if(columnK[i] == valor){
            return { 
                BDI: tableBDI.getRowData(i)[1].toString().split(",").join("."), 
                DESC: tableBDI.getRowData(i)[2].toString().split(",").join(".") 
            }
        }
    }
    return "";
}

// FUNÇÃO PERSONALIZADA PARA USAR DENTRO DA CELULA
const TESTE = (v1, v2) => {
    var value = v1 * tableCompat.getValue(v2);
    return value
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

// $(window).bind("beforeunload",function(event) {
//     return "You have unsaved changes";
// });

$(document).ready(e => {
    $('.tabs').tabs();

    $("#fechar").hide();
    $(".content").toggle();

    // $(".readonly").css('color', 'black');
});

