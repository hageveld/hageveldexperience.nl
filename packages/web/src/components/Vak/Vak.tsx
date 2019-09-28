import React, { Component, Fragment } from 'react';
import { Row, Col, Button, List, Avatar, Statistic, Divider, Popconfirm, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
    icon: IconName;
    naam: string;
    inschrijvingen: number; // maximale inschrijvingen (!)
    deelnemers: number; // huidige inschrijvingen
}

interface State {
    ingeschreven: boolean;
}

export default class Vak extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            ingeschreven: false
        };
        this.toggleSchrijfIn = this.toggleSchrijfIn.bind(this);
    }

    toggleSchrijfIn() {
        const { ingeschreven } = this.state;
        this.setState({
            ingeschreven: !ingeschreven
        });
        if(ingeschreven) {
            message.error('Succesvol uitgeschreven');
        } else {
            message.success('Succesvol ingeschreven!');
        }
    }

    render() {
        const { icon, naam, inschrijvingen, deelnemers } = this.props;
        const { ingeschreven } = this.state;

        return (
            <Fragment>
                <Row gutter={12}>
                    <Col span={3}>
                        <Avatar>
                            <FontAwesomeIcon icon={['fas', icon]} />
                        </Avatar>
                    </Col>
                    <Col span={3}>
                        {naam}
                    </Col>
                    <Col span={2} style={{ float: 'right' }}>
                        <Popconfirm
                            title={ingeschreven ? "Weet je zeker dat je je uit wilt schrijven?" : (
                                <Fragment>
                                    <p>Weet je zeker dat je je in wilt schrijven?</p>
                                    <p>
                                        <b>Vak</b>: {naam}
                                        <br />
                                        <b>Datum</b>: 01-01-9999
                                        <br />
                                        <b>Tijd</b>: 14:00 - 15:30
                                    </p>
                                    <p>Je krijgt een bevestigingsmail.</p>
                                </Fragment>
                            )}
                            onConfirm={this.toggleSchrijfIn}
                            okText="Ja"
                            cancelText="Nee"
                        >
                            <Button
                                type="primary"
                                shape="circle"
                                icon={ingeschreven ? "check" : "plus"}
                                disabled={inschrijvingen >= deelnemers}
                                style={ingeschreven ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                            />
                        </Popconfirm>
                    </Col>
                    <Col span={6} style={{ float: 'right' }}>
                        <Statistic
                            title="Inschrijvingen"
                            value={ingeschreven ? inschrijvingen+1 : inschrijvingen}
                            suffix={`/ ${deelnemers}`}
                        />
                    </Col>
                </Row>
                <Divider style={{ margin: '15px' }} />
            </Fragment>
        );
    }
}