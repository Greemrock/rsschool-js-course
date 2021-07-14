import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { routes } from "./components/Shared/routes";
import { store } from "./components/Shared/store";
import {
  CardsContainer,
  CardsList,
} from "./components/Main/Styled/Main.styled";
import { CategoryCards } from "./components/Main/CategoryCard/CategoryCards";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Main/Login/Login";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [numberCategory, setNumberCategory] = useState(0);
  const [statusModal, setModal] = useState(false);

  const renderSwitch = (): JSX.Element => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <CategoryCards
              routes={routes}
              setNumberCategory={setNumberCategory}
            />
          )}
        />
        {routes.map((route) => {
          return route.isPrivate ? (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route
              key={route.name}
              path={route.path}
              render={() => <Main category={numberCategory} />}
            />
          );
        })}
      </Switch>
    );
  };

  return (
    <>
      <Login statusModal={statusModal} setModal={setModal} />
      <Header
        routes={routes}
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={setStatusCheckbox}
        setNumberCategory={setNumberCategory}
        setModal={setModal}
      />
      <CardsContainer>
        <CardsList>{renderSwitch()}</CardsList>
      </CardsContainer>
      <Footer />
    </>
  );
};
