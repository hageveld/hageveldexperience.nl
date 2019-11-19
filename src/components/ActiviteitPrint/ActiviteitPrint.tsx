import React, { Component } from 'react';
import { Table, Icon, PageHeader, Descriptions } from 'antd';
import HageveldExperience from '../../images/hageveld_experience.png';

interface Props {
    ref: any;
    deelnemers: any;
    activiteit: any;
    auth: any;
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

export default class ActiviteitPrint extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const { deelnemers, activiteit, auth } = this.props;

        return (
            <div style={{ margin: '8px' }}>
                <PageHeader
                    title="Inschrijvingen"
                    subTitle="Atheneum College Hageveld"
                    extra={
                        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                            <img width="200px" src={HageveldExperience} />
                        </div>
                    }
                >
                    <Descriptions size="small" column={1}>
                        <Descriptions.Item label="Vak">{activiteit.vak.naam}</Descriptions.Item>
                        <Descriptions.Item label="Datum">{activiteit.dag.datum}</Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <Table
                    locale={{ emptyText: 'Geen inschrijvingen' }}
                    pagination={false}
                    size="small"
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
                        },
                        {
                            title: 'Telefoonnummer',
                            dataIndex: 'telefoonnummer',
                            key: 'telefoonnummer'
                        }
                    ]}
                    dataSource={deelnemers
                        .map((deelnemer: any, index) => {
                            return {
                                key: index,
                                email: deelnemer.email,
                                naam:
                                    deelnemer.roepnaam +
                                    ' ' +
                                    (deelnemer.tussenvoegsel ? deelnemer.tussenvoegsel + ' ' : '') +
                                    deelnemer.achternaam,
                                geslacht: geslachtToIcon(deelnemer.geslacht),
                                telefoonnummer: deelnemer.telefoonnummer
                                    ? '+' + deelnemer.prefix + deelnemer.telefoonnummer
                                    : ''
                            };
                        })
                        .sort((a: any, b: any) => a.naam.localeCompare(b.naam))}
                />
            </div>
        );
    }
}
