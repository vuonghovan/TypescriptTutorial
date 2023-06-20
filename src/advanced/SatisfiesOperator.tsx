// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html

type Color = ColorString | ColorRGB;
type ColorRGB = {red: number, green: number, blue: number};
type ColorString = 'red' | 'green' | 'blue';

type Theme = Record<string, Color>;

const theme = {
    primary: 'red',
    tertiary: 'green',
} satisfies Theme;
const _ensureTheme: Theme = theme;
const [r, g, b] =  theme.tertiary;