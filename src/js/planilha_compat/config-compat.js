const columnsCompat = [
    { title: "FORNECEDOR/DISCIPLINA", width: 200 },
    { title: "TOTAL MATERIAL", width: 130 },
    { title: "TOTAL MAO DE OBRA", width: 155 },
    { title: "TOTAL MAT + MDO", width: 150 },
    { title: "OBSERVACOES", width: 300 }
]



const contentCompat = [
    ["PROJETOS EXECUTIVOS", " R$ 1.513,23 ", " R$ -   ", " R$ 1.513,23 ", ""],
    ["ARQUITETURA", " R$ 1.500,00 ", " R$ -   ", " R$ 1.500,00 ", ""],
    ["ELÉTRICA", " R$ 7,65 ", " R$ -   ", " R$ 7,65 ", ""],
    ["CABEAMENTO", " R$ 5,58 ", " R$ -   ", " R$ 5,58 ", ""],
    ["LAUDOS - CONSULT TÉC", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["CONCESSIONÁRIA ENERGIA", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["AVCB - INSTALL", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["FAT - INSTALL", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["CONSUL APROVATIVOS - RI", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["PROGRAN", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["INCÊNDIO - INSTALL", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["HIDRÁULICA - INSTALL", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["AR CONDICIONADO", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["ITS", " R$ 872,00 ", " R$ -   ", " R$ 872,00 ", ""],
    ["ART E RRT", " R$ 440,00 ", " R$ -   ", " R$ 440,00 ", ""],
    ["CÓPIAS E PLOTAGENS", " R$ 432,00 ", " R$ -   ", " R$ 432,00 ", ""],
    ["GESSO FORRO", " R$ -   ", " R$ -   ", " R$ -   ", ""],
    ["GESSO PAREDE", " R$ -   ", " R$ -   ", " R$ -   ", ""]
]

const style = {"A1":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","B1":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","C1":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","D1":"text-align: center; background-color: rgb(217, 217, 217); font-weight: bold;","E1":"text-align: center; overflow: hidden;","A2":"text-align: center; overflow: hidden;","B2":"text-align: center; overflow: hidden;","C2":"text-align: center; overflow: hidden;","D2":"text-align: center;","E2":"text-align: center; overflow: hidden;","A3":"text-align: center; overflow: hidden;","B3":"text-align: center; overflow: hidden;","C3":"text-align: center; overflow: hidden;","D3":"text-align: center;","E3":"text-align: center; overflow: hidden;","A4":"text-align: center; overflow: hidden;","B4":"text-align: center; overflow: hidden;","C4":"text-align: center; overflow: hidden;","D4":"text-align: center;","E4":"text-align: center; overflow: hidden;","A5":"text-align: center; overflow: hidden;","B5":"text-align: center; overflow: hidden;","C5":"text-align: center; overflow: hidden;","D5":"text-align: center;","E5":"text-align: center; overflow: hidden;","A6":"text-align: center; overflow: hidden;","B6":"text-align: center; overflow: hidden;","C6":"text-align: center; overflow: hidden;","D6":"text-align: center;","E6":"text-align: center; overflow: hidden;","A7":"text-align: center; overflow: hidden;","B7":"text-align: center; overflow: hidden;","C7":"text-align: center; overflow: hidden;","D7":"text-align: center;","E7":"text-align: center; overflow: hidden;","A8":"text-align: center; overflow: hidden;","B8":"text-align: center; overflow: hidden;","C8":"text-align: center; overflow: hidden;","D8":"text-align: center;","E8":"text-align: center; overflow: hidden;","A9":"text-align: center; overflow: hidden;","B9":"text-align: center; overflow: hidden;","C9":"text-align: center; overflow: hidden;","D9":"text-align: center;","E9":"text-align: center; overflow: hidden;","A10":"text-align: center; overflow: hidden;","B10":"text-align: center; overflow: hidden;","C10":"text-align: center; overflow: hidden;","D10":"text-align: center;","E10":"text-align: center; overflow: hidden;","A11":"text-align: center; overflow: hidden;","B11":"text-align: center; overflow: hidden;","C11":"text-align: center; overflow: hidden;","D11":"text-align: center;","E11":"text-align: center; overflow: hidden;","A12":"text-align: center; overflow: hidden;","B12":"text-align: center; overflow: hidden;","C12":"text-align: center; overflow: hidden;","D12":"text-align: center;","E12":"text-align: center; overflow: hidden;","A13":"text-align: center; overflow: hidden;","B13":"text-align: center; overflow: hidden;","C13":"text-align: center; overflow: hidden;","D13":"text-align: center;","E13":"text-align: center; overflow: hidden;","A14":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","B14":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","C14":"text-align: center; overflow: hidden; background-color: rgb(217, 217, 217); font-weight: bold;","D14":"text-align: center; background-color: rgb(217, 217, 217); font-weight: bold;","E14":"text-align: center; overflow: hidden;","A15":"text-align: center; overflow: hidden;","B15":"text-align: center; overflow: hidden;","C15":"text-align: center; overflow: hidden;","D15":"text-align: center;","E15":"text-align: center; overflow: hidden;","A16":"text-align: center; overflow: hidden;","B16":"text-align: center; overflow: hidden;","C16":"text-align: center; overflow: hidden;","D16":"text-align: center;","E16":"text-align: center; overflow: hidden;","A17":"text-align: center; overflow: hidden;","B17":"text-align: center; overflow: hidden;","C17":"text-align: center; overflow: hidden;","D17":"text-align: center;","E17":"text-align: center; overflow: hidden;","A18":"text-align: center; overflow: hidden;","B18":"text-align: center; overflow: hidden;","C18":"text-align: center; overflow: hidden;","D18":"text-align: center;","E18":"text-align: center; overflow: hidden;"}