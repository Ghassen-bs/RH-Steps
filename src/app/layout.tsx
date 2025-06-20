
import "@/styles/index.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <head>
        <link rel="icon" href="/assets/img/favicon-1.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <title>RH STEPS - Agence Creative</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
