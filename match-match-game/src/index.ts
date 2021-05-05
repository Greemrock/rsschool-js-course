import Header from './components/header';
import './styles.scss';

const app = window.document.getElementById('app');

if (app === null) {
  alert('oops! app === null');
} else {
  app.innerHTML = `
  ${Header}
`;
}
