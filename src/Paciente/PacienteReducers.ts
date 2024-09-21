import { PacienteState, PacienteTypes } from "./PacienteTypes";
import { PayloadAction } from "@reduxjs/toolkit";

export const initialPacienteState: PacienteState = {
    id: 0,
    nome: "",
    age: 0,
    sex: 0,
    dor: 0,
    pressao: 0,
    colesterol: 0,
    glicemia: 0,
    eletro: 0,
    frecmax: 0,
    angina: 0,
    depressao: 0,
    inclinacao: 0,
    data_insercao: ""
}

export const PacienteReducers = (state: PacienteState = initialPacienteState, action: PayloadAction<string[]>) => {
    switch (action.type) {
        case PacienteTypes.PACIENTE_GET_DATA:
            return { ...action.payload };

        case PacienteTypes.PACIENTE_CHANGE_NOME:
            return { ...state, nome: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_IDADE:
            return { ...state, age: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_SEXO:
            return { ...state, sex: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_TIPO_DOR:
            return { ...state, dor: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_PRESSAO:
            return { ...state, pressao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_COLESTEROL:
            return { ...state, colesterol: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_GLICEMIA:
            return { ...state, glicemia: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_ELETRO:
            return { ...state, eletro: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_FREQUENCIA_CARDIACA:
            return { ...state, frecmax: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_ANGINA:
            return { ...state, angina: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DEPRESSAO:
            return { ...state, depressao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_INCLINACAO:
            return { ...state, inclinacao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DOENCA:
            return { ...state, doenca: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DATA_INSERCAO:
            return { ...state, data_insercao: action.payload };

        default:
            return state;
    }
}