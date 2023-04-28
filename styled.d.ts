import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      border: string;
      error: string;
      font: string;
    };
    borderRadius: string;
  }
}
