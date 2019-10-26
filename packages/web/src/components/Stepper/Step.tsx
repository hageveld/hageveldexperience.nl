import React, { FunctionComponent, Fragment, ReactNode } from 'react';

interface Props {
    title: string;
    icon: string;
    description: string;
    children: ReactNode;
    showForward?: boolean;
}

const Step: FunctionComponent<Props> = () => (
    <Fragment />
);

export default Step;