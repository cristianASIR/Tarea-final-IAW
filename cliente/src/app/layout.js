import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import "../styles/estilos.css";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-dark text-white">
        <Navbar />
        <br/>
        <br/>
        <main className="container mt-4">{children}</main>
        <br/>
        <Footer/>
      </body>
    </html>
  );
}



