import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import '../css/question.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    openOnInit: [],
  });
});
