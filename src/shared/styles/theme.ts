import { Theme as MaterialTheme } from '@material-ui/core/styles';
import { hexToRGBA } from './helpers';
import breakpoints from './breakpoints';

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
const colors = {
  mediumPurple: '#8c4be6',
  purpleHeart: '#6931b6',
  heliotrope: '#c17bff',
  wildSand: '#f4f4f4',
  mercury: '#e2e2e2',
  silver: '#c9c9c9',
  dustyGray: '#979797',
  codGray: '#1e1e1e',
  monza: '#d0021b',
  buttercup: '#f5a623',
  white: '#fff',
  black: '#000',
  alto: '#e0e0e0',
  heavyMetal: '#1d1d1b',
};

export const theme = {
  breakpoints,
  colors,
  palette: {
    text: {
      primary: colors.codGray,
      primaryInverted: colors.white,
      secondary: hexToRGBA(colors.codGray, 0.58),
      warning: colors.buttercup,
      positive: colors.purpleHeart,
      negative: colors.monza,
      disabled: hexToRGBA(colors.codGray, 0.55),
    },
    control: {
      border: {
        normal: colors.mercury,
        hover: colors.purpleHeart,
        focus: colors.mediumPurple,
        disabled: colors.mercury,
      },
      bg: {
        normal: colors.white,
        hover: colors.purpleHeart,
        focus: colors.mediumPurple,
        disabled: colors.mercury,
      },
    },
  },
  sizes: {
    control: {
      borderRadius: 4,
      minHeight: 40,
    },
    page: {
      maxWidth: 1100,
      horizontalPadding: 20,
    },
    header: {
      minHeightMobile: '3.4125rem',
      desktop: '6.25rem',
    },
  },
  spacing: {
    unit: 8,
    mainContentPadding: {
      desktop: '4.9063rem',
      mobile: '1.25rem',
    },
  },
  typography: {
    primaryFont: ['OpenSans', 'Arial', 'sans-serif'].join(','),
  },
  zIndex: {
    newContext: 0,
    mobileHeader: 500,
    modal: 1400,
    tooltip: 1500,
    beforeContext: (zIndex: number) => --zIndex,
    afterContext: (zIndex: number) => ++zIndex,
  },
  defaultTransitionDuration: '0.4s',
};

// type StylesObj = Record<string, React.CSSProperties> | {
//   [K in keyof React.CSSProperties]: ((props: any) => React.CSSProperties[K]) | React.CSSProperties[K]
// };

// function getMediaQueryByType(type: 'sm' | 'maxWidthScreen', withKeyword: boolean): string {
//   // tslint:disable-next-line:max-line-length
//   if (type === 'sm') {
//     return `${withKeyword ? '@media ' : ''}(max-width: ${screensWidth[type]}), (max-device-width: 1000px)`;
//   } else {
//     return `${withKeyword ? '@media ' : ''}(min-width: ${screensWidth[type]})`;
//   }
// }

export type Theme = MaterialTheme & { extra: typeof theme };
