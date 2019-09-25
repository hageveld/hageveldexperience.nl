import React, { FunctionComponent, ReactNode } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

interface Props {
    children?: ReactNode;
    centered?: boolean;
}

const TitleWrapper = styled(Typography.Title)`
    font-size: 40px;
    color: #362e95 !important;
    text-align: ${(props: Props) => props.centered ? "center" : "inherit"};
`;

const Title: FunctionComponent<Props> = ({ children, ...props }: Props) => (
    <TitleWrapper {...props}>{children ? children : "Hageveld Experience"}</TitleWrapper>
)

export default Title;