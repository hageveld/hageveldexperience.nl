'use strict';

require('source-map-support').install();
require('ts-node').register();

exports.sourceNodes = require('./gatsby/sourceNodes').default;
exports.createPages = require('./gatsby/createPages').default;

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        node: { fs: 'empty' }
    });
};
