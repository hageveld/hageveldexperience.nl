module.exports = {
    siteMetadata: {
        title: 'Hageveld Experience',
        siteUrl: 'https://experience.hageveld.nl',
        baseUrl: 'https://experience.hageveld.dev',
        description: 'Hageveld Experience',
        author: 'Luit'
    },
    pathPrefix: '/',
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
                modules: ['styled-components']
            }
        },
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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Hageveld Experience',
                short_name: 'Hageveld Experience',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#000000',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png'
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
                        disallow: '/'
                    }
                ]
            }
        },
        'gatsby-plugin-remove-trailing-slashes'
    ]
};
