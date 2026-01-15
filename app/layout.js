import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pokémon Dashboard",
  description: "Educational demo for Web Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 min-h-screen">
        <Navbar />
        <main className="min-h-screen p-4 md:p-6">
          {children}
        </main>
      </body>
    </html>
  );
}