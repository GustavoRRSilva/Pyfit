import Head from "next/head";
import "./globals.scss";
import Navbar from "@/Components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
