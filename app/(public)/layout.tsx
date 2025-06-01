import type { ReactNode } from 'react';

export const metadata = {
  title: 'Eddigi',
  description: 'Change your Journey with us!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}