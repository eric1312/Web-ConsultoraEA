const PHONE = '2345413571';
const MESSAGE = '¡Hola! Me gustaría obtener más información.';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      title="Contáctanos por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a9.5 9.5 0 1 1-9.5-9.5c2.6 0 5 1 6.8 2.8A9.45 9.45 0 0 1 21 11.5Z" />
        <path d="M15.8 13.8c-.2.5-.9.8-1.3.9-.3.1-.6.1-.9.1-1.8 0-3.5-1.1-4.1-2.7-.2-.5-.2-1.1 0-1.6.1-.2.3-.4.5-.5.1-.1.2-.2.4-.2h.3c.1 0 .2 0 .3.2l.4.8c.1.1.1.2 0 .3l-.3.4c-.1.1-.1.2 0 .3.2.2.4.4.6.6.2.2.4.4.6.6.1.1.2.1.3 0l.4-.3c.1-.1.2-.1.3 0l.8.4c.1.1.2.2.2.3Z" />
      </svg>
    </a>
  );
}
