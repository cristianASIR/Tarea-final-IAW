import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import "../styles/estilos.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-dark text-white">
        <Navbar />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}



