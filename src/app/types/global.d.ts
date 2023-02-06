declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
}