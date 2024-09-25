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
    doenca: 0,
    data_insercao: ""
}

export const PacienteReducers = (state: PacienteState = initialPacienteState, action: PayloadAction<string[]>) => {
    console.log("-------------------------------- Estado Anterior --------------------------------");
    console.table(state);
    console.log("------------------------------------ action -------------------------------------");
    console.table(action);
    switch (action.type) {
        case PacienteTypes.PACIENTE_GET_DATA:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...action.payload });
            return { ...action.payload };

        case PacienteTypes.PACIENTE_CHANGE_NOME:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, nome: action.payload });
            return { ...state, nome: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_IDADE:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, age: action.payload });
            return { ...state, age: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_SEXO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, sex: action.payload });
            return { ...state, sex: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_TIPO_DOR:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, dor: action.payload });
            return { ...state, dor: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_PRESSAO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, pressao: action.payload });
            return { ...state, pressao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_COLESTEROL:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, colesterol: action.payload });
            return { ...state, colesterol: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_GLICEMIA:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, glicemia: action.payload });
            return { ...state, glicemia: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_ELETRO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, eletro: action.payload });
            return { ...state, eletro: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_FREQUENCIA_CARDIACA:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, frecmax: action.payload });
            return { ...state, frecmax: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_ANGINA:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, angina: action.payload });
            return { ...state, angina: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DEPRESSAO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, depressao: action.payload });
            return { ...state, depressao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_INCLINACAO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, inclinacao: action.payload });
            return { ...state, inclinacao: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DOENCA:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, doenca: action.payload });
            return { ...state, doenca: action.payload };

        case PacienteTypes.PACIENTE_CHANGE_DATA_INSERCAO:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table({ ...state, data_insercao: action.payload });
            return { ...state, data_insercao: action.payload };

        default:
            console.log("-------------------------------- Estado Atualizado --------------------------------");
            console.table(state);
            return state;
    }
}