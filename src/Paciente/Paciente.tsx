import React from 'react';
import Swal from 'sweetalert2';

import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../App/store';

import {
    dorOptions,
    eletroOptions,
    glicemiaOptions,
    PacienteAllState,
    PacienteState,
    sexOptions,
} from './PacienteTypes';
import { getListaPacientes } from './Paciente.service';
import {
    pacienteTypesChangeAnginaAction,
    pacienteTypesChangeColesterolAction,
    pacienteTypesChangeEletroAction,
    pacienteTypesChangeFrequenciaCardiacaAction,
    pacienteTypesChangeGlicemiaAction,
    pacienteTypesChangeIdadeAction,
    pacienteTypesChangeNomeAction,
    pacienteTypesChangePressaoAction,
    pacienteTypesChangeSexoAction,
    pacienteTypesChangeTipoDorAction,
    pacienteTypesGetDataAction
} from './PacienteActions';
import { initialPacienteState } from './PacienteReducers';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './Paciente.css';

const Paciente = () => {
    const paciente: PacienteState = useSelector((state: any) => state.paciente);
    const pacientes: PacienteAllState = useSelector((state: any) => state.pacientes);
    const dispatch: AppDispatch = useDispatch();
    const dt = React.useRef<DataTable<PacienteState[]>>(null);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = React.useState<string>("");

    React.useEffect(() => {
        dispatch(getListaPacientes());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const adicionarPaciente = () => {
        dispatch(pacienteTypesGetDataAction(initialPacienteState));
        setVisible(true);
    }

    const excluirPaciente = (id: number, nome: string) => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você vai excluir o paciente " + nome + " portador do CPF " + id + "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, pode excluir!",
            cancelButtonText: "Cancelar"
        }).then((result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
                // dispatch(deletePaciente(Number(removerFormatacao(cpf, 11))));
            }
        });
    }

    const salvarPaciente = () => {
        //     if (validarCPF(Number(removerFormatacao(paciente.cpf, 11)))) {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "error",
        //             title: "CPF Inválido!",
        //             showConfirmButton: false,
        //             timer: 1000
        //         });
        //     } else if (!paciente.nome) {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "error",
        //             title: "O nome do paciente está em branco!",
        //             showConfirmButton: false,
        //             timer: 1000
        //         });
        //     } else if (!paciente.data_nascimento) {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "error",
        //             title: "A data de nascimento do paciente está em branco!",
        //             showConfirmButton: false,
        //             timer: 1000
        //         });
        //     } else {
        //         setVisible(false);
        Swal.fire({
            title: "Tem certeza?",
            text: "Você vai incluir o paciente " + paciente.nome + "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, pode incluir!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // dispatch(postPaciente(paciente));
            }
        });
        //     }
    }

    const actionsTemplace = (rowData: PacienteState, options: ColumnBodyOptions) => {
        return (<div className="card flex flex-wrap justify-content-center gap-1">
            <Button type='button' icon="pi pi-trash" text onClick={() => excluirPaciente(rowData.id, rowData.nome)} />
        </div>);
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Classificador de Possibilidade de Insuficiência Cardíaca</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" placeholder="Procurar..." onInput={(e) => { const target = e.target as HTMLInputElement; setGlobalFilter(target.value); }} />
            </IconField>
        </div>
    );

    return (<div>
        <div className="card">
            <DataTable ref={dt} value={pacientes.pacientes} dataKey="cpf" paginator rows={9} size='small' className='m-4'
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                globalFilter={globalFilter} header={header} removableSort scrollable stripedRows
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="id" header="ID" sortable style={{ width: '5%' }} />
                <Column field="nome" header="Nome" sortable style={{ width: '17%' }} />
                <Column field="age" header="Idade" sortable style={{ width: '5%' }} />
                <Column field="sex" header="Sexo" sortable style={{ width: '5%' }} />
                <Column field="dor" header="Tipo de Dor no Peito" sortable style={{ width: '5%' }} />
                <Column field="pressao" header="Pressão Arterial em Repouso" sortable style={{ width: '5%' }} />
                <Column field="colesterol" header="Colesterol Sérico" sortable style={{ width: '5%' }} />
                <Column field="glicemia" header="Glicemia de Jejum" sortable style={{ width: '5%' }} />
                <Column field="eletro" header="ECG" sortable style={{ width: '5%' }} />
                <Column field="frecmax" header="Frequência Cardíaca Máxima" sortable style={{ width: '5%' }} />
                <Column field="angina" header="Angina Induzida por Exercício" sortable style={{ width: '5%' }} />
                <Column field="depressao" header="Depressão do Segmento ST" sortable style={{ width: '5%' }} />
                <Column field="inclinacao" header="Inclinação do Segmento ST" sortable style={{ width: '5%' }} />
                <Column field="doenca" header="Resultado" sortable style={{ width: '5%' }} />
                <Column field="data_insercao" header="Data" sortable style={{ width: '5%' }} />
                <Column style={{ flex: '0 0 4rem', width: '11rem' }} body={actionsTemplace} />
            </DataTable>
        </div>
        {(visible) &&
            <Dialog header="Dados do Paciente" visible={visible} style={{ width: '50vw' }}
                onHide={() => { if (!visible) return; setVisible(false); }} >
                <div className='grid'>
                    <div className='col-12'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="nome">Nome</label>
                                <InputText id="nome" value={paciente.nome} required
                                    onChange={(e) => dispatch(pacienteTypesChangeNomeAction(e.target.value))} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="idade">Idade</label>
                                <InputNumber id="idade" useGrouping={false} required min={0} max={150}
                                    value={paciente.age}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeIdadeAction(e.value))
                                    }
                                    }
                                    locale='pt-BR'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="sexo">Sexo</label>
                                <Dropdown id="sexo" value={paciente.sex.toString()} required
                                    optionLabel="label" optionValue="value"
                                    onChange={(e) => dispatch(pacienteTypesChangeSexoAction(e.value))}
                                    options={sexOptions} placeholder="Selecione o sexo do paciente" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="dor">Tipo de Dor no Peito</label>
                                <Dropdown id="dor" value={paciente.dor.toString()} required
                                    optionLabel="label" optionValue="value"
                                    onChange={(e) => dispatch(pacienteTypesChangeTipoDorAction(e.value))}
                                    options={dorOptions} placeholder="Selecione o tipo de dor no peito que o paciente está sentindo" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="pressao">Pressão Arterial em Repouso [mm Hg]</label>
                                <InputNumber id="pressao" useGrouping={false} required min={0} max={250}
                                    value={paciente.pressao}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangePressaoAction(e.value))
                                    }
                                    }
                                    locale='pt-BR'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="colesterol">Colesterol Sérico [mm/dl]</label>
                                <InputNumber id="colesterol" useGrouping={false} required min={0} max={900}
                                    value={paciente.colesterol}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeColesterolAction(e.value))
                                    }
                                    }
                                    locale='pt-BR'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="glicemia">Glicemia de Jejum</label>
                                <Dropdown id="glicemia" value={paciente.glicemia.toString()} required
                                    optionLabel="label" optionValue="value"
                                    onChange={(e) => dispatch(pacienteTypesChangeGlicemiaAction(e.value))}
                                    options={glicemiaOptions} placeholder="Selecione a glicemia de jejum do paciente" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="eletro">Eletrocardiograma de Repouso</label>
                                <Dropdown id="eletro" value={paciente.eletro.toString()} required
                                    optionLabel="label" optionValue="value"
                                    onChange={(e) => dispatch(pacienteTypesChangeEletroAction(e.value))}
                                    options={eletroOptions} placeholder="Selecione o resultado do eletrocardiograma de repouso do paciente" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="frequencia">Frequência Cardíaca Máxima Atingida</label>
                                <InputNumber id="frequencia" useGrouping={false} required min={60} max={202}
                                    value={paciente.frecmax}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeFrequenciaCardiacaAction(e.value))
                                    }
                                    }
                                    locale='pt-BR'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="angina">Angina Induzida por Exercício</label>
                                <Dropdown id="angina" value={paciente.angina.toString()} required
                                    optionLabel="label" optionValue="value"
                                    onChange={(e) => dispatch(pacienteTypesChangeAnginaAction(e.value))}
                                    options={eletroOptions} placeholder="Selecione se a angina foi induzida por exercício" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="depressao">Valor de Depressão do Segmento ST</label>
                                <InputNumber id="depressao" useGrouping={false} required
                                    min={-10} max={-10} minFractionDigits={0} maxFractionDigits={2}
                                    value={paciente.depressao}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeFrequenciaCardiacaAction(e.value))
                                    }
                                    }
                                    locale='pt-BR'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-content-end m-2">
                    <Button label="Salvar" icon="pi pi-check"
                        onClick={(e) => salvarPaciente()} className='ml-1' />
                    <Button label="Fechar" className='ml-1' icon="pi pi-times" onClick={() => setVisible(false)} />
                </div>
            </Dialog >}
        <Button
            icon="pi pi-file"
            onClick={() => adicionarPaciente()}
            className="floating-button p-button-rounded p-button-primary"
        />
    </div >
    );
}

export default Paciente;