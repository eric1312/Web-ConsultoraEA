const services = [
  {
    title: 'Páginas web corporativas',
    text: 'Desarrollamos sitios institucionales modernos, claros y profesionales para presentar tu empresa con autoridad.',
  },
  {
    title: 'Tiendas online',
    text: 'Construimos ecommerce con experiencia de compra sencilla, diseño atractivo y flujo de venta optimizado.',
  },
  {
    title: 'Soluciones a medida',
    text: 'Diseñamos herramientas digitales internas o externas para automatizar procesos y mejorar la operación del negocio.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="container section">
      <div className="section-heading">
        <h2>Nuestros servicios</h2>
        <p>Diseñamos productos digitales que aportan valor real a tiendas, negocios y empresas de todos los tamaños.</p>
      </div>
      <div className="grid-3">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
