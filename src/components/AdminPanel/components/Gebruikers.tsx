import React, { FunctionComponent, Fragment } from 'react';
import { Table } from 'antd';

interface Props {
    data: any;
}

const Gebruikers: FunctionComponent<Props> = ({ data }: Props) => (
    <Fragment>
        <h2>Gebruikers</h2>
        <Table
            columns={[
                {
                    title: 'E-mailadres',
                    dataIndex: 'email',
                    key: 'email'
                },
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
            dataSource={data
                .map((gebruiker: any, index) => ({
                    key: index,
                    email: gebruiker.email.toLowerCase(),
                    naam:
                        gebruiker.roepnaam +
                        ' ' +
                        (gebruiker.tussenvoegsel ? gebruiker.tussenvoegsel + ' ' : '') +
                        gebruiker.achternaam,
                    geslacht: gebruiker.geslacht
                }))
                .sort((a, b) => a.email.localeCompare(b.email))}
        />
    </Fragment>
);

export default Gebruikers;
