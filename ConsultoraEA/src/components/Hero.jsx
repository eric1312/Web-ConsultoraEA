export default function Hero() {
  return (
    <section className="container hero" id="inicio">
      <div>
        <span className="eyebrow">Consultora de software</span>
        <h1>
          Construimos sitios web, tiendas online y soluciones digitales para empresas que quieren crecer.
        </h1>
        <p>
          En EA ayudamos a negocios y marcas a transformar su presencia digital con estrategias claras, diseño
          profesional y tecnología sólida. Creamos experiencias que comunican mejor, generan confianza y convierten
          visitas en clientes.
        </p>
        <div className="actions">
          <a href="#contacto" className="btn btn-primary">Hablemos de tu proyecto</a>
          <a href="#servicios" className="btn btn-secondary">Ver servicios</a>
        </div>
        <ul className="hero-list">
          <li>Diseño y desarrollo web a medida</li>
          <li>Tiendas online para vender mejor</li>
          <li>Soluciones digitales para empresas y marcas</li>
        </ul>
      </div>
      <div className="hero-panel">
        <img src="/images/mascota.jpeg" alt="Mascota de EA" />
        <span className="badge">
          Hola me Llamo Denver! soy la mascota de EA, Seré tu guía en el mundo digital.
        </span>
      </div>
    </section>
  );
}
