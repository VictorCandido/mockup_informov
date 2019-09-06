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
            allowDeleteColumn: false,
            contextMenu: menuItens,
            onchange: change_orcamentista,
            updateTable: updateTable
        });
        $("#statusServidor").text("Carregado com sucesso!");
        $(".jexcel_toolbar_item.material-icons").each((i, e) => {
            if($(e).attr("data-k") == "fullscreen_exit"){
                $(e).hide()
            }
        });
    },
	error: res => {
		console.log("Falha", res);
        $("#statusServidor").text("Falha ao salvar os dados!");
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
    contextMenu: menuItens,
    onchange: changeBDI,
    updateTable: updateTableBDI
});
$(".jexcel_toolbar_item.material-icons").each((i, e) => {
    if($(e).attr("data-k") == "fullscreen_exit"){
        $(e).hide()
    }
})

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
$(".jexcel_toolbar_item.material-icons").each((i, e) => {
    if($(e).attr("data-k") == "fullscreen_exit"){
        $(e).hide()
    }
})

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
const TESTE = (v1) => {
    console.log(v1);
    return v1
}


/**
 * Criação de funções fora da tabela com jQuery
 */

$("#abrir").click(e => {
    $(".content").slideDown('2');
    $("#abrir").hide();
    $("#fechar").show();
});

$("#fechar").click(e => {
    $(".content").slideUp('2');
    $("#fechar").hide();
    $("#abrir").show();
});

// $(window).bind("beforeunload",function(event) {
//     return "You have unsaved changes";
// });

$(document).ready(e => {
    $('.tabs').tabs();

    $(".content").toggle();

    // $(".readonly").css('color', 'black');
});

