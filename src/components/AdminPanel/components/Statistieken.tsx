import React, { FunctionComponent, Fragment } from 'react';
import { Row, Col, Statistic } from 'antd';
import PieChart from 'react-minimal-pie-chart';
import colors from 'nice-color-palettes';

interface Props {
    data: any;
}

const Statistieken: FunctionComponent<Props> = ({ data }: Props) => (
    <Fragment>
        <h2>Statistieken</h2>
        <Row gutter={16} style={{ textAlign: 'center' }}>
            <Col span={12}>
                <Statistic
                    title="Gebruikers"
                    value={data.gebruikers}
                    groupSeparator="."
                    decimalSeparator=","
                />
            </Col>
            <Col span={12}>
                <Statistic
                    title="Inschrijvingen"
                    value={data.inschrijvingen}
                    groupSeparator="."
                    decimalSeparator=","
                />
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row
            gutter={24}
            style={{
                textAlign: 'center',
                marginLeft: '60px',
                marginRight: '60px'
            }}
        >
            <Col span={12}>
                <h2>Verwijzing</h2>
                <PieChart
                    radius={35}
                    lineWidth={13}
                    label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                    labelStyle={{
                        fontSize: '3px'
                    }}
                    labelPosition={120}
                    data={
                        Object.keys(data.verwijzingen).map((verwijzing, index) => {
                            const aantal = data.verwijzingen[verwijzing];
                            const color = colors[6][index];
                            return {
                                title: verwijzing,
                                value: aantal,
                                color
                            };
                        }) as any
                    }
                    style={{
                        height: '400px'
                    }}
                />
            </Col>
            <Col span={12}>
                <h2>Inschrijvingen per gebruiker</h2>
                <PieChart
                    radius={35}
                    lineWidth={13}
                    label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                    labelStyle={{
                        fontSize: '3px'
                    }}
                    labelPosition={120}
                    data={
                        Object.keys(data.inschrijvingenGemiddelde).map((inschrijvingen, index) => {
                            const aantal = data.inschrijvingenGemiddelde[inschrijvingen];
                            const color = colors[21][index];
                            return {
                                title: inschrijvingen,
                                value: aantal,
                                color
                            };
                        }) as any
                    }
                    style={{
                        height: '400px'
                    }}
                />
            </Col>
        </Row>
        <br />
        <br />
        <Row
            gutter={24}
            style={{
                textAlign: 'center',
                marginLeft: '60px',
                marginRight: '60px'
            }}
        >
            <Col span={12}>
                <h2>Inschrijvingen per dag</h2>
                <PieChart
                    radius={35}
                    lineWidth={13}
                    label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                    labelStyle={{
                        fontSize: '3px'
                    }}
                    labelPosition={120}
                    data={
                        Object.keys(data.dagen).map((dag, index) => {
                            const aantal = data.dagen[dag];
                            const color = colors[28][index];
                            return {
                                title: dag,
                                value: aantal,
                                color
                            };
                        }) as any
                    }
                    style={{
                        height: '400px'
                    }}
                />
            </Col>
            <Col span={12}>
                <h2>Inschrijvingen per vak</h2>
                <PieChart
                    radius={35}
                    lineWidth={13}
                    label={(labelProps: any) => labelProps.data[labelProps.dataIndex].title}
                    labelStyle={{
                        fontSize: '3px'
                    }}
                    labelPosition={120}
                    data={
                        Object.keys(data.vakken).map((vak, index) => {
                            const aantal = data.vakken[vak];
                            const color = [...colors[29], ...colors[30], ...colors[39]][index];
                            return {
                                title: vak,
                                value: aantal,
                                color
                            };
                        }) as any
                    }
                    style={{
                        height: '400px'
                    }}
                />
            </Col>
        </Row>
    </Fragment>
);

export default Statistieken;
