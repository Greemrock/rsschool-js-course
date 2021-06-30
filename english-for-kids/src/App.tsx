import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { collectionCards, SECTIONS } from "./components/Shared/collectionCards";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header
        title={SECTIONS}
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={setStatusCheckbox}
      />
      <Main
        title={SECTIONS}
        cards={collectionCards[0]}
        statusCheckbox={statusCheckbox}
      />
    </BrowserRouter>
  );
};
