import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import * as preview from '../../images/preview.png';

interface Props {
    title?: string;
}

const MetaData: FunctionComponent<Props> = ({ title }: Props) => (
    <StaticQuery
        query={graphql`
            query PageData {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        author
                    }
                }
            }
        `}
        render={({ site: { siteMetadata } }) => (
            <Helmet>
                <title>{title ? `${siteMetadata.title} - ${title}` : siteMetadata.title}</title>
                <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
                <meta name="description" content={siteMetadata.description} />
                <meta name="author" content={siteMetadata.author} />
                <meta property="og:title" content={siteMetadata.title} />
                <meta property="og:site_name" content={siteMetadata.title} />
                <meta property="og:description" content={siteMetadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content={`${siteMetadata.siteUrl}${preview}`} />
                <meta name="twitter:title" content={siteMetadata.title} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Hageveld" />
                <meta name="twitter:creator" content="@Hageveld" />
                <meta name="twitter:image" content={`${siteMetadata.siteUrl}${preview}`} />
                <meta name="theme-color" content="#000000" />
                <meta name="mobile-web-app-capable" content="yes" />
            </Helmet>
        )}
    />
);

export default MetaData;
