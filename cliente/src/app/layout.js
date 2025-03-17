import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import "../styles/estilos.css";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-dark text-white">
        {/* Navbar persistente en todas las páginas */}
        <Navbar />
        <br />
        <br />
        
        {/* Contenido principal de cada página */}
        <main className="container mt-4">{children}</main>
        
        <br />
        
        {/* Footer común para todas las páginas */}
        <Footer />
      </body>
    </html>
  );
}




