import { Listener } from './components/ui/listener';
import { App } from './components/app/app';
import './styles.scss';

const root = document.querySelector('#root');

if (!root) throw new Error(`root = ${typeof root}`);

new App(root).render();
new Listener().start();
