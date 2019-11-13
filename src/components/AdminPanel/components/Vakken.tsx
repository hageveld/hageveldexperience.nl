import React, { FunctionComponent, Fragment } from 'react';
import { Table, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { vakken } from '../../../data';

const Vakken: FunctionComponent = () => (
    <Fragment>
        <h2>Vakken</h2>
        <Table
            columns={[
                {
                    title: '#',
                    dataIndex: 'id',
                    key: 'id'
                },
                {
                    title: 'Icoon',
                    dataIndex: 'icon',
                    key: 'icon'
                },
                {
                    title: 'Naam',
                    dataIndex: 'naam',
                    key: 'naam'
                }
            ]}
            dataSource={Object.values(vakken).map((vak: any) => {
                return {
                    id: vak.id,
                    icon: (
                        <Avatar style={{ backgroundColor: '#FA9B3D' }}>
                            <FontAwesomeIcon icon={['fas', vak.icon]} />
                        </Avatar>
                    ),
                    naam: vak.naam
                };
            })}
            pagination={{ pageSize: 15 }}
        />
    </Fragment>
);

export default Vakken;
