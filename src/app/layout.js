import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Tony Querrec - Photographe",
  description:
    "Site web de Tony Querrec, photographe professionnel spécialisé dans la photographie de portrait, d'art et de fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"py-[48px] px-[24px] sm:px-[48px]"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
