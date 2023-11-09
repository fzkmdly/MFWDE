import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './view/components/header';
import './view/components/footer';
import App from './view/app';
import swRegister from './utils/swRegister';

console.log('Hello Coders! :)');

const app = new App({
  button: document.querySelector('#open-drawer'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

// Event listeners
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
