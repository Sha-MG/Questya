export const metadata = {
  title: 'Questya',
  description: 'Site créé par Morgane Gamory.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
