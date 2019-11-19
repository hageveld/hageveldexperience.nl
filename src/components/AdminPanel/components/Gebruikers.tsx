import React, { FunctionComponent, Fragment } from 'react';
import ExternalLink from '../../ExternalLink';
import { Table, Icon } from 'antd';

interface Props {
    data: any;
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

const roleToIcon = (role: number) => {
    switch (role) {
        case -1 /* Banned */:
            return <Icon type="flag" />;
        case 0 /* Disabled */:
            return <Icon type="clock-circle" />;
        case 1 /* User */:
            return <Icon type="user" />;
        case 2 /* Tester */:
            return <Icon type="tool" />;
        case 3 /* Docent */:
            return <Icon type="star" />;
        case 4 /* Admin */:
            return <Icon type="rocket" />;
        case 5 /* Superuser */:
            return <Icon type="crown" />;
        default:
            return <Icon type="question-circle" />;
    }
};

const Gebruikers: FunctionComponent<Props> = ({ data }: Props) => (
    <Fragment>
        <h2>Gebruikers</h2>
        <Table
            columns={[
                {
                    title: '',
                    dataIndex: 'role',
                    key: 'role'
                },
                {
                    title: 'E-mailadres',
                    dataIndex: 'email',
                    key: 'email',
                    sorter: (a: any, b: any) => a.email.localeCompare(b.email),
                    defaultSortOrder: 'ascend'
                },
                {
                    title: 'Naam',
                    dataIndex: 'naam',
                    key: 'naam',
                    sorter: (a: any, b: any) => a.naam.localeCompare(b.naam)
                },
                {
                    title: 'Geslacht',
                    dataIndex: 'geslacht',
                    key: 'geslacht'
                },
                {
                    title: 'Telefoonnummer',
                    dataIndex: 'telefoonnummer',
                    key: 'telefoonnummer'
                },
                {
                    title: 'Opties',
                    dataIndex: 'actions',
                    key: 'actions'
                }
            ]}
            dataSource={data.map((gebruiker: any, index) => ({
                key: index,
                email: gebruiker.email,
                naam:
                    gebruiker.roepnaam +
                    ' ' +
                    (gebruiker.tussenvoegsel ? gebruiker.tussenvoegsel + ' ' : '') +
                    gebruiker.achternaam,
                geslacht: geslachtToIcon(gebruiker.geslacht),
                role: gebruiker.admin ? <Icon type="crown" /> : <Icon type="user" />,
                telefoonnummer: gebruiker.telefoonnummer
                    ? '+' + gebruiker.prefix + gebruiker.telefoonnummer
                    : '',
                actions: (
                    <Fragment>
                        <ExternalLink to={`mailto:${gebruiker.email}`}>
                            <Icon type="mail" />
                        </ExternalLink>
                        {gebruiker.telefoonnummer && (
                            <ExternalLink
                                to={`tel:+${gebruiker.prefix}${gebruiker.telefoonnummer}`}
                            >
                                {' '}
                                <Icon type="phone" />
                            </ExternalLink>
                        )}
                    </Fragment>
                )
            }))}
        />
    </Fragment>
);

export default Gebruikers;
