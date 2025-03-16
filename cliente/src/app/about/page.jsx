import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/about.module.css'; // Importa el CSS


export default function About() {
  return (
    <div className={styles.mainContent}>
      <Head>
        <title>Sobre Nosotros PLAYGAME</title>
      </Head>


      <main>
        {/* Encabezado Hero */}
        <div className={styles.hero}>
          <Container>
            <h1>Conoce a los Creadores de PLAYGAME!</h1>
            <p>Pasión por los videojuegos, dedicación al desarrollo.</p>
          </Container>
        </div>


        {/* Nuestro Equipo */}
        <Container className={`mt-5 ${styles.teamSection}`}>
          <h2 className="text-center mb-4">Nuestro Equipo</h2>
          <Row>
            <Col md={6}>
              <h3>Backend</h3>
              <p>Cristian Cortés Fernández</p>
              <p>Juan Luis Sánchez Sánchez</p>
            </Col>
            <Col md={6}>
              <h3>Frontend</h3>
              <p>Victor Alvarez Fuentes </p>
              <p>Jazmin Carlos Santa Cruz </p>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
