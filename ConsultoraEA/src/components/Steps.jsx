// Tarjetas numeradas reutilizadas por "Por qué elegir EA" y "Cómo trabajamos".
export default function Steps({ id, title, intro, items }) {
  return (
    <section id={id} className="container section">
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="grid-4">
        {items.map((item, i) => (
          <article className="card process-step" key={item.title}>
            <span>{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
