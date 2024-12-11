import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "AKRONIM",
  description: "Formation d'excellence en informatique, gestion et sciences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
