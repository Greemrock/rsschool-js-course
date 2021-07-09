import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { SECTIONS } from "./components/Shared/collectionCards";
import { store } from "./components/Shared/store";
import {
  CardsContainer,
  CardsList,
} from "./components/Main/Styled/Main.styled";
import { CategoryCards } from "./components/Main/CategoryCard/CategoryCards";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [numberCategory, setNumberCategory] = useState(0);
  return (
    <BrowserRouter>
      <Header
        title={SECTIONS}
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={setStatusCheckbox}
        setNumberCategory={setNumberCategory}
      />
      <CardsContainer>
        <CardsList>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CategoryCards
                  title={SECTIONS}
                  setNumberCategory={setNumberCategory}
                />
              )}
            />
            <Route
              path="/action_set_a"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/action_set_b"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/animal_set_a"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/animal_set_b"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/clothes"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/emotions"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/body_parts"
              render={() => <Main category={numberCategory} />}
            />
            <Route
              path="/vegetable"
              render={() => <Main category={numberCategory} />}
            />
          </Switch>
        </CardsList>
      </CardsContainer>
      <Footer />
    </BrowserRouter>
  );
};
