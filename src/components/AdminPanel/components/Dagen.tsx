import React, { FunctionComponent, Fragment } from 'react';
import { Table, Progress } from 'antd';

interface Props {
    data: any;
}

const Dagen: FunctionComponent<Props> = ({ data }: Props) => (
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
                }
            ]}
            dataSource={Object.values(data).map((dag: any) => {
                return {
                    id: dag.id,
                    datum: dag.datum,
                    inschrijvingen: (
                        <Progress
                            percent={Math.floor((dag.inschrijvingen / dag.maxDeelnemers) * 100)}
                        />
                    )
                };
            })}
        />
    </Fragment>
);

export default Dagen;
