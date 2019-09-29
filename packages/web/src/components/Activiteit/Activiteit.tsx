import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col, Button, Avatar, Statistic, Divider, Popconfirm, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from '../../hooks';
import { inschrijf, uitschrijf } from '../../store/inschrijving';
import ActiviteitType from '../../classes/activiteit';

interface Props {
    data: ActiviteitType;
}

const Activiteit: FunctionComponent<Props> = ({ data: { id, vak, dag, maxDeelnemers } }) => {
    const inschrijvingen = 0;
    const ingeschreven = useSelector(state => state.inschrijf[id]);
    const dispatch = useDispatch();

    const toggleSchrijfIn = () => {
        if(ingeschreven) {
            dispatch(uitschrijf(id));
            message.error('Succesvol uitgeschreven');
        } else {
            dispatch(inschrijf(id));
            message.success('Succesvol ingeschreven!');
        }
    };

    return (
        <Fragment>
                <Row gutter={12}>
                    <Col span={3}>
                        <Avatar>
                            <FontAwesomeIcon icon={['fas', vak.icon]} />
                        </Avatar>
                    </Col>
                    <Col span={3}>
                        {vak.naam}
                    </Col>
                    <Col span={2} style={{ float: 'right' }}>
                        <Popconfirm
                            title={ingeschreven ? "Weet je zeker dat je je uit wilt schrijven?" : (
                                <Fragment>
                                    <p>Weet je zeker dat je je in wilt schrijven?</p>
                                    <p>
                                        <b>Vak</b>: {vak.naam}
                                        <br />
                                        <b>Datum</b>: {dag.datum}
                                        <br />
                                        <b>Tijd</b>: {dag.startTijd} - {dag.eindTijd}
                                    </p>
                                    <p>Je krijgt een bevestigingsmail.</p>
                                </Fragment>
                            )}
                            onConfirm={toggleSchrijfIn}
                            okText="Ja"
                            cancelText="Nee"
                        >
                            <Button
                                type="primary"
                                shape="circle"
                                icon={ingeschreven ? "check" : "plus"}
                                disabled={inschrijvingen >= maxDeelnemers}
                                style={ingeschreven ? { backgroundColor: "#52c41a", borderColor: "#52c41a" } : {}}
                            />
                        </Popconfirm>
                    </Col>
                    <Col span={6} style={{ float: 'right' }}>
                        <Statistic
                            title="Inschrijvingen"
                            value={ingeschreven ? inschrijvingen+1 : inschrijvingen}
                            suffix={`/ ${maxDeelnemers}`}
                        />
                    </Col>
                </Row>
                <Divider style={{ margin: '15px' }} />
            </Fragment>
    );
}

export default Activiteit;