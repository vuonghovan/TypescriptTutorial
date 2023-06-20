type Color = ColorString | ColorRGB;
type ColorRGB = {
    red: number;
    green: number;
    blue: number;
};
type ColorString = 'red' | 'green' | 'blue';
type Theme = Record<string, Color>;
declare const theme: {
    primary: "red";
    tertiary: "green";
};
declare const _ensureTheme: Theme;
declare const r: string | undefined, g: string | undefined, b: string | undefined;
