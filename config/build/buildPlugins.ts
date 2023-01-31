import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import  {ProgressPlugin, WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";
const progressInfo = (percentage: number, message: string, ...args: string[]) => console.info(percentage, message, ...args);
export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(progressInfo),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}