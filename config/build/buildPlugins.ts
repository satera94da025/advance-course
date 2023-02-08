import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
import {DefinePlugin, ProgressPlugin, WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";

const progressInfo = (percentage: number, message: string, ...args: string[]) => console.info(percentage, message, ...args);

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(progressInfo),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ]
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }
    return plugins
}