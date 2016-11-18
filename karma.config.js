var karma_webpack = require('karma-webpack');
var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            {pattern: './node_modules/phantomjs-polyfill/bind-polyfill.js', watched: false},
            {pattern: 'test/*Spec.js', watched: false},
            {pattern: 'test/**/*Spec.js', watched: false}
        ],
        plugins: [
            karma_webpack,
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],
        browsers: ['PhantomJS'],
        preprocessors: {
            'test/*Spec.js': ['webpack'],
            'test/**/*Spec.js': ['webpack']
        },
        reporters: ['spec'],
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: /node_modules/,
                        query: {
                            presets: ['react', 'es2015', 'airbnb']
                        }
                    },
                    {
                        test: /\.json$/,
                        loader: 'json',
                    }
                ]
            },
            resolve: {
                extensions: ['', '.js'],
                root: path.resolve(path.join(__dirname, 'src')),
            },
            plugins: [
                new webpack.NoErrorsPlugin()
            ],
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            },
            node: {
                fs: "empty"
            }
        },
        webpackMiddleware: {stats: 'errors-only'}
    });
};
