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
declare module 'webpack-bundle-analyzer';

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
      >;

  export default ReactComponent;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
// eslint-disable-next-line @typescript-eslint/naming-convention,no-unused-vars
declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
