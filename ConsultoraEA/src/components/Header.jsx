export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#inicio" className="brand">
          <img src="/images/logo.jpeg" alt="Logo de EA" />
          <span>EA Consultora de Software</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
