export const PacienteTypes = {
    PACIENTE_GET_ALL_DATA: "PACIENTE_GET_ALL_DATA",
    PACIENTE_GET_DATA: "PACIENTE_GET_DATA",
    PACIENTE_CHANGE_NOME: "PACIENTE_CHANGE_NOME",
    PACIENTE_CHANGE_IDADE: "PACIENTE_CHANGE_IDADE",
    PACIENTE_CHANGE_SEXO: "PACIENTE_CHANGE_SEXO",
    PACIENTE_CHANGE_TIPO_DOR: "PACIENTE_CHANGE_TIPO_DOR",
    PACIENTE_CHANGE_PRESSAO: "PACIENTE_CHANGE_PRESSAO",
    PACIENTE_CHANGE_COLESTEROL: "PACIENTE_CHANGE_COLESTEROL",
    PACIENTE_CHANGE_GLICEMIA: "PACIENTE_CHANGE_GLICEMIA",
    PACIENTE_CHANGE_ELETRO: "PACIENTE_CHANGE_ELETRO",
    PACIENTE_CHANGE_FREQUENCIA_CARDIACA: "PACIENTE_CHANGE_FREQUENCIA_CARDIACA",
    PACIENTE_CHANGE_ANGINA: "PACIENTE_CHANGE_ANGINA",
    PACIENTE_CHANGE_DEPRESSAO: "PACIENTE_CHANGE_DEPRESSAO",
    PACIENTE_CHANGE_INCLINACAO: "PACIENTE_CHANGE_INCLINACAO",
    PACIENTE_CHANGE_DOENCA: "PACIENTE_CHANGE_DOENCA",
    PACIENTE_CHANGE_DATA_INSERCAO: "PACIENTE_CHANGE_DATA_INSERCAO"
}

export interface PacienteState {
    id: number
    nome: string
    age: number
    sex: number
    dor: number
    pressao: number
    colesterol: number
    glicemia: number
    eletro: number
    frecmax: number
    angina: number
    depressao: number
    inclinacao: number
    data_insercao: string
}

export interface PacienteAllState {
    pacientes: PacienteState[]
}

export interface IDropdown {
    label: string
    value: string
}

export const sexOptions: IDropdown[] = [
    { label: 'Masculino', value: "0" },
    { label: 'Feminino', value: "1" }
];

export const dorOptions: IDropdown[] = [
    { label: 'TA: Angina Típica', value: "0" },
    { label: 'ATA: Angina Atípica', value: "1" },
    { label: 'NAP: Dor Não Anginosa', value: "2" },
    { label: 'ASY: Assintomático', value: "3" }
];

export const glicemiaOptions: IDropdown[] = [
    { label: 'Menor ou igual a 120 mg/dl', value: "0" },
    { label: 'Maior que 120 mg/dl', value: "1" }
];

export const eletroOptions: IDropdown[] = [
    { label: 'Normal: Normal', value: "0" },
    { label: 'ST: anomalia da onda ST-T (inversões da onda T e/ou elevação ou depressão do ST > 0.05 mV)', value: "1" },
    { label: 'LVH: mostrando possível ou definida hipertrofia ventricular esquerda pelos critérios de Estes', value: "2" }
];

export const anginaOptions: IDropdown[] = [
    { label: 'Y: Sim', value: "0" },
    { label: 'N: Não', value: "1" }
];

export const inclinacaoOptions: IDropdown[] = [
    { label: 'Up: inclinação ascendente', value: "0" },
    { label: 'Flat: plana', value: "1" },
    { label: 'Down: inclinação descendente', value: "2" }
];

export const doencaOptions: IDropdown[] = [
    { label: 'Normal', value: "0" },
    { label: 'Doença cardíaca', value: "1" }
];

// export interface PacienteDialogProps {
//     paciente: PacienteState
//     readonly: boolean
//     visible: boolean
//     setVisible: (visible: boolean) => void
// }

// export interface IPaciente {
//     id: number
//     nome: string
//     age: number
//     sex: number
//     dor: number
//     pressao: number
//     colesterol: number
//     glicemia: number
//     eletro: number
//     frecmax: number
//     angina: number
//     depressao: number
//     inclinacao: number
//     data_insercao: string
// }

