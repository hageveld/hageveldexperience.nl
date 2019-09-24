import React, { Component } from 'react';
import { Row, Col, Button, List, Avatar, Statistic} from 'antd';
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
    }

    render() {
        const { icon, naam, inschrijvingen, deelnemers } = this.props;
        const { ingeschreven } = this.state;

        return (
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Avatar>
                            <FontAwesomeIcon icon={['fas', icon]} />
                        </Avatar>
                    }
                    title={naam}
                    description={
                        <Row gutter={12}>
                            <Col span={6}>
                                <p>Test</p>
                            </Col>
                            <Col span={6} style={{ float: 'right' }}>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    icon={ingeschreven ? "check" : "plus"}
                                    onClick={this.toggleSchrijfIn}
                                    disabled={inschrijvingen >= deelnemers}
                                    style={ingeschreven ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                                />
                            </Col>
                            <Col span={6} style={{ float: 'right' }}>
                                <Statistic
                                    title="Inschrijvingen"
                                    value={inschrijvingen}
                                    suffix={`/ ${deelnemers}`}
                                />
                            </Col>
                        </Row>
                    }
                />
            </List.Item>
        );
    }
}