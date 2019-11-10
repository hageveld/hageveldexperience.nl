import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import * as preview from '../../images/preview.png';

interface Props {
    title?: string;
}

const MetaData: FunctionComponent<Props> = ({  }: Props) => {
    const title = 'Hageveld Experience';
    const siteUrl = 'https://hageveldexperience.nl';
    const description = 'Hageveld Experience';
    const author = 'Atheneum College Hageveld';
    const keywords = 'Atheneum, College, Hageveld, Experience, VWO, Heemstede';

    return (
        <Helmet htmlAttributes={{ lang: 'nl' }}>
            <title>{title}</title>
            <meta name="apple-mobile-web-app-title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="nl_NL" />
            <meta property="og:image" content={`${siteUrl}${preview}`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Hageveld" />
            <meta name="twitter:creator" content="@Hageveld" />
            <meta name="twitter:image" content={`${siteUrl}${preview}`} />
            <meta name="theme-color" content="#E67200" />
            <meta name="mobile-web-app-capable" content="yes" />
        </Helmet>
    );
};

export default MetaData;
