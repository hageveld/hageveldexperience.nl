module.exports = {
    siteMetadata: {
        title: 'Atheneum College Hageveld',
        siteUrl: 'https://hageveld.nl',
        description:
            'Atheneum College Hageveld is gelegen op landgoed Hageveld en is gehuisvest in een gebouw dat voorheen een klein-seminarie herbergde. Het is een sfeervol monumentaal gebouw dat wordt omzoomd door veel groen. Ook de sportvelden liggen rondom de school. College Hageveld is het enige zelfstandige atheneum dat Nederland telt.',
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
                name: 'Atheneum College Hageveld',
                short_name: 'Hageveld',
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
        }
    ]
};
