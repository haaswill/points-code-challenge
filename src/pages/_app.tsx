import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyles';

const theme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: '#5f469c',
    secondary: '#3b396d',
    tertiary: '#c4c2ff',
    background: '#fbfbfb',
    border: '#aaaaaa',
    error: '#dd2206',
    font: '#1e1e1e',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
