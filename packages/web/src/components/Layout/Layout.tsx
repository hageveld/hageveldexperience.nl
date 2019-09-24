import React, { FunctionComponent, Fragment, ReactNode } from 'react';
import MetaData from '../MetaData';
import Header from '../Header';
import Footer from '../Footer';
import { Layout as AntLayout } from 'antd';

interface Props {
    title?: string;
    children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, title }: Props) => (
    <Fragment>
        <MetaData title={title} />
        <AntLayout>
            <AntLayout.Header style={{ padding: '0' }}>
                <Header />
            </AntLayout.Header>
            <AntLayout.Content>{children}</AntLayout.Content>
            <AntLayout.Footer>
                <Footer />
            </AntLayout.Footer>
        </AntLayout>
    </Fragment>
);

export default Layout;
