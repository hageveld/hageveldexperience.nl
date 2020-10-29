module.exports = {
    siteMetadata: {
        title: 'Hageveld Experience',
        siteUrl: 'https://hageveldexperience.nl',
        description:
            'Tijdens de Hageveld Experience krijg je een unieke rondleiding in onze school, en kun je ervaren hoe een les op Hageveld eruit ziet.',
        author: 'Atheneum College Hageveld',
        keywords:
            'Atheneum, College, Hageveld, Experience, VWO, Heemstede, Groep 8, Brugklas, Basisschool'
    },
    pathPrefix: '/',
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'src/images'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-less',
            options: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': `#5B34AD`
                }
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Hageveld Experience',
                short_name: 'Hageveld Experience',
                start_url: '/',
                background_color: '#5B34AD',
                theme_color: '#E67200',
                display: 'minimal-ui',
                icon: 'src/images/favicon_v2.png'
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                cssLoaderOptions: {
                    camelCase: false
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-antd',
            options: {
                style: true
            }
        },
        'gatsby-plugin-remove-trailing-slashes'
    ]
};
