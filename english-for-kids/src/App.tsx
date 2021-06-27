import "./App.css";
import { useState } from "react";
import { MainPage } from "./components/Main/MainPage";
import { Header } from "./components/Header/Header";
import { Checkbox } from "./components/Header/Checkbox/Checkbox";
import { SECTIONS } from "./components/Shared/collectionCards";

export const App: React.FC = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <Header title={SECTIONS} />
      <Checkbox
        isOn={value}
        handleToggle={() => {
          return setValue(!value);
        }}
      />
      <MainPage title={SECTIONS} />
    </>
  );
};
