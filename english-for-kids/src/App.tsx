import './App.css';
import { useState } from 'react';
import { MainCategories } from './components/Main/MainCategories';
import { Header } from './components/Header/Header';
import { Checkbox } from './components/Checkbox/Checkbox';

export const App = (): JSX.Element => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Checkbox
        isOn={value}
        handleToggle={() => {
          return setValue(!value);
        }}
      />
      <MainCategories />
    </>
  );
};
