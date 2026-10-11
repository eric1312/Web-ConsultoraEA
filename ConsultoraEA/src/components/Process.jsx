import Steps from './Steps.jsx';

const items = [
  { title: 'Descubrimiento', text: 'Analizamos tus objetivos, público y necesidades para definir una estrategia adecuada.' },
  { title: 'Diseño', text: 'Diseñamos la experiencia visual y funcional de forma clara y atractiva.' },
  { title: 'Desarrollo', text: 'Construimos la solución con tecnología confiable y enfoque en rendimiento.' },
  { title: 'Lanzamiento y crecimiento', text: 'Entregamos el proyecto listo para usar y lo acompañamos para seguir mejorando.' },
];

export default function Process() {
  return (
    <Steps
      id="proceso"
      title="Cómo trabajamos"
      intro="Un proceso claro y colaborativo para convertir ideas en productos digitales efectivos."
      items={items}
    />
  );
}
