const data = [
    ["", 1, "", "", "OBRA CIVIL", "", "", "", "", "", "", "", "", "", "", ""],
    ["", 1.01, "", "", "PROJETOS TÉCNICOS, DOCUMENTARES E SEGUROS", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.01", "", "", "ART & SEGURO DE OBRAS", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.01.001", "", "", "Anotação de responsabilidade Técnica - ART", "CREA-SP", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.01.002", "", "", "Registro de Responsabilidade Técnica - RRT", "CAU-SP", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.01.003", "", "", "Seguro de risco de engenharia e responsabilidade civil", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02", "", "", "PROJETOS EXECUTIVOS", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02.001", "", "", "Projeto de Arquitetura", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02.002", "", "", "Projeto de Ar Condicionado", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02.003", "", "", "Projeto de Cabeamento Estruturado", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02.004", "", "", "Projeto de Instalações Elétricas", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "01.01.02.005", "", "", "Projeto de Instalações Hidráulicas", "", "", "", "", "", "", "", "", "", "", ""]
]

const columns = [
    { title: "ITEM CLIENTE", width: 120, wordWrap:true },
    { title: "ITEM", width: 100 },
    { title: "RM COD_SERV", width: 120 },
    { title: "COD_PROJ", width: 120 },
    { title: "SERVICOS", width: 300, type: "text", readOnly: false },
    { title: "DESCRICAO", width: 380, wordWrap:true },
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

var selectionActive = function(instance, x1, y1, x2, y2, origin) {
    var cellName1 = jexcel.getColumnNameFromId([x1, y1]);
    var cellName2 = jexcel.getColumnNameFromId([x2, y2]);
    $('#log').append('The selection from ' + cellName1 + ' to ' + cellName2 + '');
}


var table = jexcel(document .getElementById("table"), {
    data: data,
    columns: columns,
    nestedHeaders: nestedHeaders,
    minDimensions: [16, 30],
    style: {
        A1: 'background-color: gray',
        B1: 'background-color: gray',
        C1: 'background-color: gray',
        D1: 'background-color: gray',
        E1: 'background-color: gray',
        F1: 'background-color: gray',
        G1: 'background-color: gray',
        H1: 'background-color: gray',
        I1: 'background-color: gray',
        J1: 'background-color: gray',
        K1: 'background-color: gray',
        L1: 'background-color: gray',
        M1: 'background-color: gray',
        N1: 'background-color: gray',
        O1: 'background-color: gray',
        P1: 'background-color: gray',
        A2: 'background-color: gray',
        B2: 'background-color: gray',
        C2: 'background-color: gray',
        D2: 'background-color: gray',
        E2: 'background-color: gray',
        F2: 'background-color: gray',
        G2: 'background-color: gray',
        H2: 'background-color: gray',
        I2: 'background-color: gray',
        J2: 'background-color: gray',
        K2: 'background-color: gray',
        L2: 'background-color: gray',
        M2: 'background-color: gray',
        N2: 'background-color: gray',
        O2: 'background-color: gray',
        P2: 'background-color: gray',
    },
    contextMenu: (obj, x, y, e) => {
        var items = [];

        items.push({
            title: "teste",
            onclick: () => alert('teste')
        });

         if (y == null) {
             // Insert a new column
             if (obj.options.allowInsertColumn == true) {
                 items.push({
                     title:obj.options.text.insertANewColumnBefore,
                     onclick:function() {
                         obj.insertColumn(1, parseInt(x), 1);
                     }
                 });
             }

             if (obj.options.allowInsertColumn == true) {
                 items.push({
                     title:obj.options.text.insertANewColumnAfter,
                     onclick:function() {
                         obj.insertColumn(1, parseInt(x), 0);
                     }
                 });
             }

             // Delete a column
             if (obj.options.allowDeleteColumn == true) {
                 items.push({
                     title:obj.options.text.deleteSelectedColumns,
                     onclick:function() {
                         obj.deleteColumn(obj.getSelectedColumns().length ? undefined : parseInt(x));
                     }
                 });
             }

             // Rename column
             if (obj.options.allowRenameColumn == true) {
                 items.push({
                     title:obj.options.text.renameThisColumn,
                     onclick:function() {
                         obj.setHeader(x);
                     }
                 });
             }

             // Sorting
             if (obj.options.columnSorting == true) {
                 // Line
                 items.push({ type:'line' });

                 items.push({
                     title:obj.options.text.orderAscending,
                     onclick:function() {
                         obj.orderBy(x, 0);
                     }
                 });
                 items.push({
                     title:obj.options.text.orderDescending,
                     onclick:function() {
                         obj.orderBy(x, 1);
                     }
                 });
             }
         } else {
             // Insert new row
             if (obj.options.allowInsertRow == true) {
                 items.push({
                     title:obj.options.text.insertANewRowBefore,
                     onclick:function() {
                         obj.insertRow(1, parseInt(y), 1);
                     }
                 });
                 
                 items.push({
                     title:obj.options.text.insertANewRowAfter,
                     onclick:function() {
                         obj.insertRow(1, parseInt(y));
                     }
                 });
             }

             if (obj.options.allowDeleteRow == true) {
                 items.push({
                     title:obj.options.text.deleteSelectedRows,
                     onclick:function() {
                         obj.deleteRow(obj.getSelectedRows().length ? undefined : parseInt(y));
                     }
                 });
             }

             if (x) {
                 if (obj.options.allowComments == true) {
                     items.push({ type:'line' });

                     var title = obj.records[y][x].getAttribute('title') || '';

                     items.push({
                         title: title ? obj.options.text.editComments : obj.options.text.addComments,
                         onclick:function() {
                             obj.setComments([ x, y ], prompt(obj.options.text.comments, title));
                         }
                     });

                     if (title) {
                         items.push({
                             title:obj.options.text.clearComments,
                             onclick:function() {
                                 obj.setComments([ x, y ], '');
                             }
                         });
                     }
                 }
             }
         }

         // Line
         items.push({ type:'line' });

         // Do not show copy and paste options
         items.push({
             title:obj.options.text.copy,
             shortcut:'Ctrl + C',
             onclick:function() {
                 obj.copy(true);
             }
         });

         // Paste
         if (navigator && navigator.clipboard) {
             items.push({
                 title:obj.options.text.paste,
                 shortcut:'Ctrl + V',
                 onclick:function() {
                     if (obj.selectedCell) {
                         navigator.clipboard.readText().then(function(text) {
                             if (text) {
                                 jexcel.current.paste(obj.selectedCell[0], obj.selectedCell[1], text);
                             }
                         });
                     }
                 }
             });
         }

         // Save
         if (obj.options.allowExport) {
             items.push({
                 title: obj.options.text.saveAs,
                 shortcut: 'Ctrl + S',
                 onclick: function () {
                     obj.download(true);
                 }
             });
         }

         // About
         if (obj.options.about) {
             items.push({
                 title:obj.options.text.about,
                 onclick:function() {
                     alert(obj.options.about);
                 }
             });
         }

         return items;
    }
});