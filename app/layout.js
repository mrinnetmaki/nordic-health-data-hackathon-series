import Body from './body';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://fhir.fi'),
  title: {
    default: 'Nordic Health Data Hackathons',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/hackathon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/hackathon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/hackathon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hackathon" />
        <link rel="manifest" href="/hackathon/site.webmanifest" />
      </head>
      <Body>{children}</Body>
    </html>
  );
}
