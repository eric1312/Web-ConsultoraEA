import Steps from './Steps.jsx';

const items = [
  { title: 'Enfoque estratégico', text: 'Cada proyecto parte de una idea clara y un objetivo medible.' },
  { title: 'Diseño pensado para usuarios', text: 'Interfaces limpias, modernas y orientadas a la conversión.' },
  { title: 'Desarrollo sólido', text: 'Implementamos soluciones escalables y funcionales para crecer con tu negocio.' },
  { title: 'Soporte continuo', text: 'Brindamos acompañamiento post lanzamiento para mantener tu proyecto vigente.' },
];

export default function Benefits() {
  return (
    <Steps
      title="Por qué elegir EA"
      intro="Nos enfocamos en entender el negocio, el público y los objetivos para entregar soluciones útiles, atractivas y fáciles de administrar."
      items={items}
    />
  );
}
