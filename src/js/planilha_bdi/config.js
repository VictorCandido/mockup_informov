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

const contentBdi = [
    ["K1", "1,1500", "1,0000", "Geral", "", " R$ 304.369,77 ", " R$ 350.025,23 ", "", " R$ 3.220,23 ", "", "'=>> Mão de Obra"],
    ["K2", "1,2000", "1,0000", "Fat Direto", "", " R$ -   ", " R$ -   ", "", " R$ 301.149,54 ", "", "'=>> Mão de Obra"],
    ["K3", "1,1000", "1,0000", "Nnnnnn", "", " R$ -   ", " R$ -   ", "", " R$ 304.319,77 ", " R$ 349.967,73 ", "'=>> Total"],
    ["K4", "1,0000", "1,0000", "Nnnnnn", "", " R$ -   ", " R$ -   ", "", " R$ 304.319,77 ", " R$ 349.967,73 ", "'=>> Confere"],
    ["K5", "1,0000", "1,0000", "Nnnnnn", "", " R$ -   ", " R$ -   ", "", "", " R$ 349.967,73 ", "'==> RESUMO"]
]

const styleBdi = {"A1":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","B1":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","C1":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","D1":"text-align: center; white-space: pre-wrap; color: rgb(25, 118, 210);","E1":"text-align: center;overflow: hidden;border-bottom: 0px;/* border-top: 0px; */","F1":"text-align: center; overflow: hidden;","G1":"text-align: center;","H1":"text-align: center; overflow: hidden;","I1":"text-align: center;","J1":"text-align: center; overflow: hidden; background-color: rgb(189, 189, 189);","K1":"text-align: center; overflow: hidden;","A2":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","B2":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","C2":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","D2":"text-align: center; white-space: pre-wrap; color: rgb(25, 118, 210);","E2":"text-align: center;overflow: hidden;border-top: 0px;","F2":"text-align: center; overflow: hidden;","G2":"text-align: center;","H2":"text-align: center; overflow: hidden; border-top: 0px;","I2":"text-align: center;","J2":"text-align: center; overflow: hidden; background-color: rgb(189, 189, 189);","K2":"text-align: center; overflow: hidden;","A3":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","B3":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","C3":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","D3":"text-align: center; white-space: pre-wrap; color: rgb(25, 118, 210); overflow: hidden;","E3":"text-align: center; overflow: hidden; border-bottom: 0px; border-top: 0px;","F3":"text-align: center; overflow: hidden;","G3":"text-align: center; overflow: hidden;","H3":"text-align: center; overflow: hidden; border-top: 0px;","I3":"text-align: center; overflow: hidden; background-color: rgb(207, 216, 220);","J3":"text-align: center; overflow: hidden; background-color: rgb(207, 216, 220);","K3":"text-align: center; overflow: hidden; background-color: rgb(207, 216, 220);","A4":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","B4":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","C4":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","D4":"text-align: center; white-space: pre-wrap; color: rgb(25, 118, 210);","E4":"text-align: center; overflow: hidden; border-bottom: 0px; border-top: 0px;","F4":"text-align: center; overflow: hidden;","G4":"text-align: center;","H4":"text-align: center; overflow: hidden; border-top: 0px;","I4":"text-align: center; overflow: hidden;","J4":"text-align: center; overflow: hidden;","K4":"text-align: center; overflow: hidden;","A5":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","B5":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","C5":"text-align: center; overflow: hidden; color: rgb(25, 118, 210);","D5":"text-align: center; white-space: pre-wrap; color: rgb(25, 118, 210);","E5":"text-align: center; overflow: hidden; border-top: 0px;","F5":"text-align: center; overflow: hidden;","G5":"text-align: center;","H5":"text-align: center; border-top: 0px;","I5":"text-align: center; overflow: hidden; background-color: rgb(207, 216, 220);","J5":"text-align: center; overflow: hidden; color: rgb(244, 67, 54);","K5":"text-align: center; overflow: hidden; color: rgb(244, 67, 54);"}