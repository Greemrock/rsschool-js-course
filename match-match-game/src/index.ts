import Header from './components/header';
import './styles.scss';

const app = window.document.getElementById('app');

if (app) {
  app.innerHTML = `
    ${Header}
  `;
} else {
  console.error(`oops! app === ${app}`);
}
