import Swal from "sweetalert2";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../App/store";
import { PacienteState, PacienteTypes } from "./PacienteTypes";

const url = 'http://127.0.0.1:5000/paciente';

export const getListaPacientes = (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        let listaPacientes: PacienteState[] = [];
        await fetch(url, {
            method: 'get'
        }).then((response) => response.json())
            .then((data) => {
                data.pacientes.forEach((paciente: PacienteState) =>
                    listaPacientes.push({
                        id: paciente.id,
                        nome: paciente.nome,
                        age: paciente.age,
                        sex: paciente.sex,
                        dor: paciente.dor,
                        pressao: paciente.pressao,
                        colesterol: paciente.colesterol,
                        glicemia: paciente.glicemia,
                        eletro: paciente.eletro,
                        frecmax: paciente.frecmax,
                        angina: paciente.angina,
                        depressao: paciente.depressao,
                        inclinacao: paciente.inclinacao,
                        doenca: paciente.doenca,
                        data_insercao: paciente.data_insercao
                    }))
            }).catch((error: any) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            });

        const data = {
            pacientes: listaPacientes
        }

        dispatch({ type: PacienteTypes.PACIENTE_GET_ALL_DATA, payload: data });

        return listaPacientes;
    }

export const getPaciente = (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        await fetch(url + "/" + id, {
            method: 'get'
        })
            .then((response) => response.json())
            .then((data) => {
                let pacienteState: PacienteState = data;
                dispatch({ type: PacienteTypes.PACIENTE_GET_DATA, payload: pacienteState });
            })
            .catch((error: any) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            });
    }

export const deletePaciente = (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        await fetch(url + "/" + id, {
            method: 'delete',
        }).then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            }).catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            });

        dispatch(getListaPacientes());
    }

export const postPaciente = (paciente: PacienteState): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        const formData = new FormData();
        formData.append('nome', paciente.nome);
        formData.append('age', paciente.age.toString());
        formData.append('sex', paciente.sex.toString());
        formData.append('dor', paciente.dor.toString());
        formData.append('pressao', paciente.pressao.toString());
        formData.append('colesterol', paciente.colesterol.toString());
        formData.append('glicemia', paciente.glicemia.toString());
        formData.append('eletro', paciente.eletro.toString());
        formData.append('frecmax', paciente.frecmax.toString());
        formData.append('angina', paciente.angina.toString());
        formData.append('depressao', paciente.depressao.toString());
        formData.append('inclinacao', paciente.inclinacao.toString());

        await fetch(url, {
            method: 'post',
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            }).catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1000
                });
            });

        dispatch(getListaPacientes());
    }