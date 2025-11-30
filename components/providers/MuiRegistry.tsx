// components/providers/MuiRegistry.tsx
'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';

export default function MuiRegistry({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedTheme === 'dark' ? 'dark' : 'light',
        },
      }),
    [resolvedTheme]
  );

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}