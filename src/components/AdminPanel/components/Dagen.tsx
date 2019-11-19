import React, { FunctionComponent, Fragment, useRef } from 'react';
import { Table, Progress, Button } from 'antd';
import ReactToPrint from 'react-to-print';
import DagPrint from '../../DagPrint';
import { activiteiten } from '../../../data';

interface Props {
    dagen: any;
    inschrijvingen: any;
    gebruikers: any;
}

const Dagen: FunctionComponent<Props> = ({ dagen, inschrijvingen, gebruikers }: Props) => {
    return (
        <Fragment>
            <h2>Dagen</h2>
            <Table
                columns={[
                    {
                        title: '#',
                        dataIndex: 'id',
                        key: 'id'
                    },
                    {
                        title: 'Datum',
                        dataIndex: 'datum',
                        key: 'datum'
                    },
                    {
                        title: 'Inschrijvingen',
                        dataIndex: 'inschrijvingen',
                        key: 'inschrijvingen'
                    },
                    {
                        title: 'Print',
                        dataIndex: 'print',
                        key: 'print'
                    }
                ]}
                dataSource={Object.values(dagen).map((dag: any) => {
                    const componentRef: any = useRef();
                    return {
                        id: dag.id,
                        datum: dag.datum,
                        inschrijvingen: (
                            <Progress
                                percent={Math.floor((dag.inschrijvingen / dag.maxDeelnemers) * 100)}
                            />
                        ),
                        print: (
                            <span>
                                <ReactToPrint
                                    trigger={() => (
                                        <Button type="primary" icon="printer">
                                            Print
                                        </Button>
                                    )}
                                    content={() => componentRef.current}
                                />
                                <div style={{ display: 'none' }}>
                                    <DagPrint
                                        dag={dag}
                                        inschrijvingen={inschrijvingen
                                            .filter((inschrijving: any) => {
                                                const item: any = activiteiten.find(
                                                    activiteit =>
                                                        activiteit.id === inschrijving.activiteit
                                                );
                                                return item.dag.id === dag.id;
                                            })
                                            .map((inschrijving: any, inschrijvingIndex) => {
                                                const gebruiker: any = gebruikers.find(
                                                    (gebruikerItem: any) =>
                                                        gebruikerItem.email === inschrijving.email
                                                );
                                                const item: any = activiteiten.find(
                                                    activiteit =>
                                                        activiteit.id === inschrijving.activiteit
                                                );
                                                gebruiker.activiteit = item.vak.naam;
                                                return gebruiker;
                                            })}
                                        ref={componentRef}
                                    />
                                </div>
                            </span>
                        )
                    };
                })}
            />
        </Fragment>
    );
};

export default Dagen;
