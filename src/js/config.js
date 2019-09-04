/**
 * Arquivo de configuração geral das planilhas.
 */

/**
 * Opções do menu click com direito
 * @param {*} obj table
 * @param {*} x column
 * @param {*} y row
 * @param {*} e event
 */
const menuItens = (obj, x, y, e) => {
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

// Toolbar Geral
const toolbar = [
    { type:'i', content:'undo', onclick:function() { table.undo(); } },
    { type:'i', content:'redo', onclick:function() { table.redo(); } },
    { type:'i', content:'save', onclick:function () { table.download(); } },
    { type:'select', k:'font-family', v:['Arial','Verdana'] },
    { type:'select', k:'font-size', v:['9px','10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px'] },
    { type:'i', content:'format_align_left', k:'text-align', v:'left' },
    { type:'i', content:'format_align_center', k:'text-align', v:'center' },
    { type:'i', content:'format_align_right', k:'text-align', v:'right' },
    { type:'i', content:'format_bold', k:'font-weight', v:'bold' },
    { type:'color', content:'format_color_text', k:'color' },
    { type:'color', content:'format_color_fill', k:'background-color' },
    { type:'text', content:'format_color_fill', k:'background-color' },
]

// var selectionActive = function(instance, x1, y1, x2, y2, origin) {
//     var cellName1 = jexcel.getColumnNameFromId([x1, y1]);
//     var cellName2 = jexcel.getColumnNameFromId([x2, y2]);
//     $('#log').append('The selection from ' + cellName1 + ' to ' + cellName2 + '');
// }