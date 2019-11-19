import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { Row, Col, Statistic } from 'antd';
import { getAdminCloudWatchData } from '../../../utils/api';

const CloudWatch: FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({} as any);

    useEffect(() => {
        if (!loading) {
            setLoading(true);
            getAdminCloudWatchData().then(data => {
                setResult(data);
            });
        }
    });

    return (
        <Fragment>
            <h2>CloudWatch</h2>
            <Row gutter={16} style={{ textAlign: 'center' }}>
                <Col span={12}>
                    <Statistic
                        title="Requests/week"
                        value={result.requestsDay}
                        groupSeparator="."
                        decimalSeparator=","
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Inschrijvingen"
                        value={result.requestsDay}
                        groupSeparator="."
                        decimalSeparator=","
                    />
                </Col>
            </Row>
            <Row gutter={16} style={{ textAlign: 'center' }}>
                <Col span={12}>
                    {result.requestsImage && (
                        <img src={`data:image/png;base64,${result.requestsImage}`} />
                    )}
                </Col>
                <Col span={12}>
                    {result.requestsAPIImage && (
                        <img src={`data:image/png;base64,${result.requestsAPIImage}`} />
                    )}
                </Col>
            </Row>
        </Fragment>
    );
};

export default CloudWatch;
