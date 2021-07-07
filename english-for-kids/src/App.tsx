import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { collectionCards, SECTIONS } from "./components/Shared/collectionCards";
import { store } from "./components/Shared/store";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  return (
    <BrowserRouter>
      <Header
        title={SECTIONS}
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={setStatusCheckbox}
      />
      <Main title={SECTIONS} cards={collectionCards} />
    </BrowserRouter>
  );
};
