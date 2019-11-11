import React, { FunctionComponent, Fragment } from 'react';
import { Table, Collapse, Button } from 'antd';
import { activiteiten } from '../../../data';

const { Panel } = Collapse;

interface Props {
    inschrijvingen: any;
    gebruikers: any;
}

const Inschrijvingen: FunctionComponent<Props> = ({ inschrijvingen, gebruikers }: Props) => (
    <Fragment>
        <h2>Inschrijvingen</h2>
        <Collapse bordered={false}>
            {activiteiten.map((activiteit, activiteitIndex) => (
                <Panel
                    header={activiteit.vak.naam + ' (' + activiteit.dag.datum + ')'}
                    key={activiteitIndex}
                >
                    <Table
                        locale={{ emptyText: 'Geen inschrijvingen' }}
                        columns={[
                            {
                                title: 'Naam',
                                dataIndex: 'naam',
                                key: 'naam'
                            },
                            {
                                title: 'Geslacht',
                                dataIndex: 'geslacht',
                                key: 'geslacht'
                            }
                        ]}
                        dataSource={inschrijvingen
                            .filter(
                                (inschrijving: any) => inschrijving.activiteit === activiteit.id
                            )
                            .map((inschrijving: any, inschrijvingIndex) => {
                                const gebruiker: any = gebruikers.find(
                                    (gebruikerItem: any) =>
                                        gebruikerItem.email === inschrijving.email
                                );
                                return {
                                    key: inschrijvingIndex,
                                    email: inschrijving.email.toLowerCase(),
                                    naam:
                                        gebruiker.roepnaam +
                                        ' ' +
                                        (gebruiker.tussenvoegsel
                                            ? gebruiker.tussenvoegsel + ' '
                                            : '') +
                                        gebruiker.achternaam,
                                    geslacht: gebruiker.geslacht
                                };
                            })
                            .sort((a, b) => a.naam.localeCompare(b.naam))}
                    />
                    <Button
                        type="primary"
                        icon="printer"
                        style={{ position: 'relative', bottom: '48px' }}
                    >
                        Print
                    </Button>
                </Panel>
            ))}
        </Collapse>
    </Fragment>
);

export default Inschrijvingen;
