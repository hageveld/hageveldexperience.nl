import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col, Button, Avatar, Statistic, Divider, Popconfirm, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from '../../hooks';
import {
    schrijfIn,
    schrijfUit,
    ingeschreven as ingeschrevenDispatch,
    uitgeschreven
} from '../../store/activiteiten';
import ActiviteitModel from '../../models/activiteit';
import { addInschrijving, removeInschrijving } from '../../utils/api';

interface Props {
    data: ActiviteitModel;
    fetching: boolean;
}

const Activiteit: FunctionComponent<Props> = ({
    data: { id, vak, dag, maxDeelnemers },
    fetching
}) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const activiteit = useSelector(state => state.activiteiten.items[id]);
    const dagen = useSelector(state => state.activiteiten.dagen);
    const ingeschreven = activiteit ? activiteit.ingeschreven : false;
    const deelnemers = activiteit ? activiteit.deelnemers : 0;
    const loading = fetching || (activiteit ? activiteit.loading : true);
    const dispatch = useDispatch();

    console.log('ACTIVITEIT RENDER');

    const geactiveerd =
        !loading &&
        isLoggedIn &&
        (ingeschreven ||
            (!dagen[activiteit.dag] &&
                deelnemers < maxDeelnemers &&
                Object.keys(dagen).length < 2));

    const toggleSchrijfIn = () => {
        if (isLoggedIn) {
            if (ingeschreven) {
                dispatch(schrijfUit(id));
                removeInschrijving(id).then(() => {
                    dispatch(uitgeschreven(id));
                    message.error('Succesvol uitgeschreven');
                });
            } else {
                dispatch(schrijfIn(id));
                addInschrijving(id).then(() => {
                    dispatch(ingeschrevenDispatch(id));
                    message.success('Succesvol ingeschreven!');
                });
            }
        }
    };

    return (
        <Fragment>
            <Row gutter={12}>
                <Col span={3}>
                    <Avatar style={{ backgroundColor: '#FA9B3D' }}>
                        <FontAwesomeIcon icon={['fas', vak.icon]} />
                    </Avatar>
                </Col>
                <Col span={7}>{vak.naam}</Col>
                <Col span={2} style={{ float: 'right' }}>
                    {geactiveerd ? (
                        <Popconfirm
                            title={
                                ingeschreven ? (
                                    'Weet je zeker dat je je uit wilt schrijven?'
                                ) : (
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
                                )
                            }
                            onConfirm={toggleSchrijfIn}
                            okText="Ja"
                            cancelText="Nee"
                        >
                            <Button
                                type="primary"
                                shape="circle"
                                icon={
                                    loading
                                        ? 'loading'
                                        : isLoggedIn && ingeschreven
                                        ? 'check'
                                        : 'plus'
                                }
                                disabled={!geactiveerd}
                                style={
                                    isLoggedIn && ingeschreven && !loading
                                        ? { backgroundColor: '#52c41a', borderColor: '#52c41a' }
                                        : {}
                                }
                            />
                        </Popconfirm>
                    ) : (
                        <Button
                            type="primary"
                            shape="circle"
                            icon={
                                loading ? 'loading' : isLoggedIn && ingeschreven ? 'check' : 'plus'
                            }
                            disabled={!geactiveerd}
                            style={
                                isLoggedIn && ingeschreven && !loading
                                    ? { backgroundColor: '#52c41a', borderColor: '#52c41a' }
                                    : {}
                            }
                        />
                    )}
                </Col>
                <Col span={6} style={{ float: 'right' }}>
                    <Statistic
                        title="Inschrijvingen"
                        value={activiteit ? activiteit.deelnemers : '0'}
                        suffix={`/ ${maxDeelnemers}`}
                    />
                </Col>
            </Row>
            <Divider style={{ margin: '15px' }} />
        </Fragment>
    );
};

export default Activiteit;
