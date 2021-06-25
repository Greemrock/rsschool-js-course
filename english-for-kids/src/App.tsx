import './App.css';
import { MainCategories } from './components/Main/MainCategories';
import { Menu } from './components/Menu/Menu';

export const App = (): JSX.Element => {
  return (
    <>
      <Menu />
      <MainCategories />
    </>
  );
};
