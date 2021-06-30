import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Game } from "./components/Main/Game";
import { Header } from "./components/Header/Header";
import { Checkbox } from "./components/Header/Checkbox/Checkbox";
import { collectionCards, SECTIONS } from "./components/Shared/collectionCards";

export const App: React.FC = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header title={SECTIONS} />
      <Checkbox
        isOn={value}
        handleToggle={() => {
          return setValue(!value);
        }}
      />
      <Game title={SECTIONS} cards={collectionCards[0]} />
    </BrowserRouter>
  );
};
