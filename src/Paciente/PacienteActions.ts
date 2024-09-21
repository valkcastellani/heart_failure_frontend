import { PacienteTypes } from "./PacienteTypes"

export const pacienteTypesGetDataAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_GET_DATA,
    payload: data
})

export const pacienteTypesChangeNomeAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_NOME,
    payload: data
})

export const pacienteTypesChangeIdadeAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_IDADE,
    payload: data
})

export const pacienteTypesChangeSexoAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_SEXO,
    payload: data
})

export const pacienteTypesChangeTipoDorAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_TIPO_DOR,
    payload: data
})

export const pacienteTypesChangePressaoAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_PRESSAO,
    payload: data
})

export const pacienteTypesChangeColesterolAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_COLESTEROL,
    payload: data
})

export const pacienteTypesChangeGlicemiaAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_GLICEMIA,
    payload: data
})

export const pacienteTypesChangeEletroAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_ELETRO,
    payload: data
})

export const pacienteTypesChangeFrequenciaCardiacaAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_FREQUENCIA_CARDIACA,
    payload: data
})

export const pacienteTypesChangeAnginaAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_ANGINA,
    payload: data
})

export const pacienteTypesChangeDepressaoAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_DEPRESSAO,
    payload: data
})

export const pacienteTypesChangeInclinacaoAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_INCLINACAO,
    payload: data
})

export const pacienteTypesChangeDoencaAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_DOENCA,
    payload: data
})

export const pacienteTypesChangeDataInsercaoAction = (data: any) => ({
    type: PacienteTypes.PACIENTE_CHANGE_DATA_INSERCAO,
    payload: data
})
