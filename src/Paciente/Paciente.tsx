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
    anginaOptions,
    doencaOptions,
    dorOptions,
    eletroOptions,
    glicemiaOptions,
    inclinacaoOptions,
    PacienteAllState,
    PacienteState,
    sexOptions,
} from './PacienteTypes';
import {
    deletePaciente,
    getListaPacientes,
    getPaciente,
    postPaciente
} from './Paciente.service';
import {
    pacienteTypesChangeAnginaAction,
    pacienteTypesChangeColesterolAction,
    pacienteTypesChangeDepressaoAction,
    pacienteTypesChangeEletroAction,
    pacienteTypesChangeFrequenciaCardiacaAction,
    pacienteTypesChangeGlicemiaAction,
    pacienteTypesChangeIdadeAction,
    pacienteTypesChangeInclinacaoAction,
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
import moment from 'moment';

const Paciente = () => {
    const paciente: PacienteState = useSelector((state: any) => state.paciente);
    const pacientes: PacienteAllState = useSelector((state: any) => state.pacientes);
    const dispatch: AppDispatch = useDispatch();
    const dt = React.useRef<DataTable<PacienteState[]>>(null);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [consulta, setConsulta] = React.useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = React.useState<string>("");

    React.useEffect(() => {
        dispatch(getListaPacientes());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const salvarPaciente = () => {
        if (!paciente.nome) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "O nome do paciente está em branco!",
                showConfirmButton: false,
                timer: 1000
            });
        } else {
            setVisible(false);
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
                    dispatch(postPaciente(paciente));
                }
            });
        }
    }

    const consultarPaciente = (id: number) => {
        dispatch(getPaciente(id));
        setConsulta(true);
        setVisible(true);
    }

    const excluirPaciente = (id: number, nome: string) => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você vai excluir o paciente " + nome + " portador de ID #" + id + "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, pode excluir!",
            cancelButtonText: "Cancelar"
        }).then((result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
                dispatch(deletePaciente(id));
            }
        });
    }

    const actionsTemplace = (rowData: PacienteState, options: ColumnBodyOptions) => {
        return (<div className="card flex flex-wrap justify-content-center gap-1">
            <Button type='button' icon="pi pi-eye" text onClick={() => consultarPaciente(rowData.id)} />
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

    const renderizarSexo = (rowData: PacienteState) => sexOptions.filter((it) => it.value == rowData.sex.toString())[0].label;
    const renderizarDor = (rowData: PacienteState) => dorOptions.filter((it) => it.value == rowData.dor.toString())[0].label.split(":")[1].trim();
    const renderizarGlicemia = (rowData: PacienteState) => glicemiaOptions.filter((it) => it.value == rowData.glicemia.toString())[0].label;
    const renderizarEletro = (rowData: PacienteState) => eletroOptions.filter((it) => it.value == rowData.eletro.toString())[0].label.split(":")[0].trim();;
    const renderizarAngina = (rowData: PacienteState) => anginaOptions.filter((it) => it.value == rowData.angina.toString())[0].label.split(":")[1].trim();;
    const renderizarInclinacao = (rowData: PacienteState) => inclinacaoOptions.filter((it) => it.value == rowData.inclinacao.toString())[0].label.split(":")[0].trim();;
    const renderizarResultado = (rowData: PacienteState) => doencaOptions.filter((it) => it.value == rowData.doenca.toString())[0].label;
    const renderizarData = (rowData: PacienteState) => moment(rowData.data_insercao).format("DD/MM/YYYY");

    return (<div>
        <div className="card">
            <DataTable ref={dt} value={pacientes.pacientes} dataKey="id" paginator rows={9} size='small' className='m-4'
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                globalFilter={globalFilter} header={header} removableSort scrollable stripedRows
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="id" header="ID" sortable />
                <Column field="nome" header="Nome" sortable />
                <Column field="age" header="Idade" sortable />
                <Column field="sex" header="Sexo" body={renderizarSexo} sortable />
                <Column field="dor" header="Tipo de Dor no Peito" body={renderizarDor} sortable />
                <Column field="pressao" header="Pressão Arterial em Repouso" sortable />
                <Column field="colesterol" header="Colesterol Sérico" sortable />
                <Column field="glicemia" header="Glicemia de Jejum" body={renderizarGlicemia} sortable />
                <Column field="eletro" header="ECG" body={renderizarEletro} sortable />
                <Column field="frecmax" header="Frequência Cardíaca Máxima" sortable />
                <Column field="angina" header="Angina Induzida por Exercício" body={renderizarAngina} sortable />
                <Column field="depressao" header="Depressão do Segmento ST" sortable />
                <Column field="inclinacao" header="Inclinação do Segmento ST" body={renderizarInclinacao} sortable />
                <Column field="doenca" header="Resultado" body={renderizarResultado} sortable />
                <Column field="data_insercao" header="Data" body={renderizarData} sortable />
                <Column style={{ flex: '0 0 4rem', width: '8rem' }} body={actionsTemplace} />
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
                                    onChange={(e) => dispatch(pacienteTypesChangeNomeAction(e.target.value))}
                                    disabled={consulta}
                                />
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
                                        dispatch(pacienteTypesChangeIdadeAction(Number(e.value)))
                                    }
                                    }
                                    locale='pt-BR'
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="sexo">Sexo</label>
                                <Dropdown id="sexo" value={paciente.sex.toString()} required
                                    onChange={(e) => dispatch(pacienteTypesChangeSexoAction(Number(e.value)))}
                                    options={sexOptions} placeholder="Selecione o sexo do paciente"
                                    disabled={consulta}
                                />
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
                                    onChange={(e) => dispatch(pacienteTypesChangeTipoDorAction(Number(e.value)))}
                                    options={dorOptions} placeholder="Selecione o tipo de dor no peito que o paciente está sentindo"
                                    disabled={consulta}
                                />
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
                                        dispatch(pacienteTypesChangePressaoAction(Number(e.value)))
                                    }
                                    }
                                    locale='pt-BR'
                                    disabled={consulta}
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
                                        dispatch(pacienteTypesChangeColesterolAction(Number(e.value)))
                                    }
                                    }
                                    locale='pt-BR'
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="glicemia">Glicemia de Jejum</label>
                                <Dropdown id="glicemia" value={paciente.glicemia.toString()} required
                                    onChange={(e) => dispatch(pacienteTypesChangeGlicemiaAction(Number(e.value)))}
                                    options={glicemiaOptions} placeholder="Selecione a glicemia de jejum do paciente"
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-12'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="eletro">Eletrocardiograma de Repouso</label>
                                <Dropdown id="eletro" value={paciente.eletro.toString()} required
                                    onChange={(e) => dispatch(pacienteTypesChangeEletroAction(Number(e.value)))}
                                    options={eletroOptions} placeholder="Selecione o resultado do eletrocardiograma de repouso do paciente"
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="frequencia">Frequência Cardíaca Máxima Atingida</label>
                                <InputNumber id="frequencia" useGrouping={false} required min={60} max={202}
                                    value={paciente.frecmax}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeFrequenciaCardiacaAction(Number(e.value)))
                                    }
                                    }
                                    locale='pt-BR'
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="angina">Angina Induzida por Exercício</label>
                                <Dropdown id="angina" value={paciente.angina.toString()} required
                                    onChange={(e) => dispatch(pacienteTypesChangeAnginaAction(Number(e.value)))}
                                    options={anginaOptions} placeholder="Selecione se a angina foi induzida por exercício"
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="depressao">Valor de Depressão do Segmento ST</label>
                                <InputNumber id="depressao" useGrouping={false} required
                                    min={-10} max={10} minFractionDigits={0} maxFractionDigits={2}
                                    value={paciente.depressao}
                                    onValueChange={(e) => {
                                        dispatch(pacienteTypesChangeDepressaoAction(Number(e.value)))
                                    }
                                    }
                                    locale='pt-BR'
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="inclinacao">Inclinação do Segmento ST (Pico de Exercício)</label>
                                <Dropdown id="inclinacao" value={paciente.inclinacao.toString()} required
                                    onChange={(e) => dispatch(pacienteTypesChangeInclinacaoAction(Number(e.value)))}
                                    options={inclinacaoOptions} placeholder="Selecione se a inclinação do segmento ST durante o pico de exercício"
                                    disabled={consulta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {(consulta) && <div className='grid'>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="data_insercao">Data de Inserção</label>
                                <InputText id="data_insercao" value={moment(paciente.data_insercao).format("DD/MM/YYYY")} disabled />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="doenca">Resultado</label>
                                <Dropdown id="doenca" value={paciente.doenca.toString()} options={doencaOptions} disabled />
                            </div>
                        </div>
                    </div>
                </div>
                }
                <div className="flex justify-content-end m-2">
                    <Button label="Salvar" icon="pi pi-check"
                        onClick={(e) => salvarPaciente()} className='ml-1'
                        visible={!consulta}
                    />
                    <Button label="Fechar" className='ml-1' icon="pi pi-times" onClick={() => setVisible(false)} />
                </div>
            </Dialog >
        }
        <Button
            icon="pi pi-file"
            onClick={() => {
                dispatch(pacienteTypesGetDataAction(initialPacienteState));
                setConsulta(false)
                setVisible(true);
            }}
            className="floating-button p-button-rounded p-button-primary"
        />
    </div >
    );
}

export default Paciente;