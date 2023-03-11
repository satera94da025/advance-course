import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const progressInfo = (percentage: number, message: string, ...args: string[]) => console.info(
    percentage,
    message,
    ...args,
);

export function buildPlugins({
    paths, isDev, apiUrl, project,
}: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(progressInfo),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }
    return plugins;
}
