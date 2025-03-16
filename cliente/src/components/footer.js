import React from 'react';
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
         <div className="container text-center">
          <h2>Puedes encontrarnos en</h2>
          <a href="https://github.com/cristianASIR/Tarea-final-IAW"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '25px',color:'#000000' ,margin: '0 40px' }}>
                <FaGithub/>
            </a>
        <p className="mb-2">© 2025 Online Store</p>
      </div>
    </footer>
  );
}
