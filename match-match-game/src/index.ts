import './styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw Error(`oops! app == ${appElement}`);
  new App(appElement).render();
};
