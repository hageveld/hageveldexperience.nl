import React, { FunctionComponent, Fragment, useRef } from 'react';
import { Table, Collapse, Button, Icon } from 'antd';
import ActiviteitPrint from '../../ActiviteitPrint';
import ExternalLink from '../../ExternalLink';
import ReactToPrint from 'react-to-print';
import { useSelector } from '../../../hooks';
import { activiteiten } from '../../../data';

const { Panel } = Collapse;

interface Props {
    inschrijvingen: any;
    gebruikers: any;
}

const geslachtToIcon = (geslacht: string) => {
    switch (geslacht) {
        case 'M':
            return <Icon type="man" />;
        case 'V':
            return <Icon type="woman" />;
        default:
            return <Icon type="question-circle" />;
    }
};

const Inschrijvingen: FunctionComponent<Props> = ({ inschrijvingen, gebruikers }: Props) => {
    const componentRef: any = useRef();
    const auth = useSelector(state => state.auth.auth);

    return (
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
                                    key: 'naam',
                                    sorter: (a: any, b: any) => a.naam.localeCompare(b.naam),
                                    defaultSortOrder: 'ascend'
                                },
                                {
                                    title: 'Geslacht',
                                    dataIndex: 'geslacht',
                                    key: 'geslacht'
                                },
                                {
                                    title: 'Opties',
                                    dataIndex: 'actions',
                                    key: 'actions'
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
                                        email: inschrijving.email,
                                        naam:
                                            gebruiker.roepnaam +
                                            ' ' +
                                            (gebruiker.tussenvoegsel
                                                ? gebruiker.tussenvoegsel + ' '
                                                : '') +
                                            gebruiker.achternaam,
                                        geslacht: geslachtToIcon(gebruiker.geslacht),
                                        actions: (
                                            <Fragment>
                                                <ExternalLink to={`mailto:${gebruiker.email}`}>
                                                    <Icon type="mail" />
                                                </ExternalLink>
                                                {gebruiker.telefoonnummer && (
                                                    <ExternalLink
                                                        to={`tel:+${gebruiker.prefix}${
                                                            gebruiker.telefoonnummer
                                                        }`}
                                                    >
                                                        {' '}
                                                        <Icon type="phone" />
                                                    </ExternalLink>
                                                )}
                                            </Fragment>
                                        )
                                    };
                                })}
                        />
                        <div>
                            <ReactToPrint
                                trigger={() => (
                                    <Button
                                        type="primary"
                                        icon="printer"
                                        style={{ position: 'relative', bottom: '48px' }}
                                    >
                                        Print
                                    </Button>
                                )}
                                content={() => componentRef.current}
                            />
                            <div style={{ display: 'none' }}>
                                <ActiviteitPrint
                                    deelnemers={inschrijvingen
                                        .filter(
                                            (inschrijving: any) =>
                                                inschrijving.activiteit === activiteit.id
                                        )
                                        .map((inschrijving: any, inschrijvingIndex) => {
                                            const gebruiker: any = gebruikers.find(
                                                (gebruikerItem: any) =>
                                                    gebruikerItem.email === inschrijving.email
                                            );
                                            return gebruiker;
                                        })}
                                    activiteit={activiteit}
                                    auth={auth}
                                    ref={componentRef}
                                />
                            </div>
                        </div>
                    </Panel>
                ))}
            </Collapse>
        </Fragment>
    );
};

export default Inschrijvingen;
