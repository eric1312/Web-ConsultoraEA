import { useState } from 'react';

const EMAIL = 'eaconsultoradigital@gmail.com';
// ID del formulario de Formspree (ver README). Sin él, se usa mailto como alternativa.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Consulta de ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus({ type: 'sending', text: '' });
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Respuesta no válida');
      form.reset();
      setStatus({ type: 'ok', text: 'Tu mensaje ha sido enviado correctamente.' });
    } catch {
      setStatus({
        type: 'error',
        text: `No pudimos enviar el mensaje. Escribinos a ${EMAIL}.`,
      });
    }
  }

  return (
    <section id="contacto" className="container section">
      <div className="contact-card">
        <div>
          <h2>Contáctanos</h2>
          <p>
            Si buscas una consultora de software que te ayude a construir una web profesional para tu tienda o
            empresa, estamos listos para acompañarte.
          </p>
          <div className="contact-item">
            <strong>Correo:</strong><br />
            {EMAIL}
          </div>
          <div className="contact-item">
            <strong>Teléfono:</strong><br />
            +54 2345413571
          </div>
          <div className="contact-item">
            <strong>Ubicación:</strong><br />
            Saladillo, Provincia De Buenos Aires · Soluciones digitales a distancia y presenciales
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {status.type === 'ok' && <div className="form-status ok" role="status">{status.text}</div>}
          {status.type === 'error' && <div className="form-status error" role="alert">{status.text}</div>}

          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" required />

          <label htmlFor="email">Correo</label>
          <input id="email" name="email" type="email" placeholder="tu@email.com" required />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" placeholder="Cuéntanos sobre tu proyecto" required />

          <button type="submit" className="btn btn-primary" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
