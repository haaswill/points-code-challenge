import React, { ReactElement, ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

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

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
