import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
    background: '#fdfdfd',
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
