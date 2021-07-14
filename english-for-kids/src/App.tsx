import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import { AdminHeader } from "./AdminPage/AdminHeader/AdminHeader";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [numberCategory, setNumberCategory] = useState(0);
  const [statusModal, setModal] = useState(false);
  const [login, setLogIn] = useState(false);

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
  useEffect(() => {}, [login]);
  return (
    <>
      {login ? <Redirect to="/categories" /> : ""}
      {window.location.pathname === "/categories" && !login ? (
        <Redirect to="/" />
      ) : (
        ""
      )}
      {window.location.pathname === "/words" && !login ? (
        <Redirect to="/" />
      ) : (
        ""
      )}

      <Login
        statusModal={statusModal}
        setModal={setModal}
        login={login}
        setLogIn={setLogIn}
      />
      {login ? (
        <AdminHeader setLogIn={setLogIn} />
      ) : (
        <Header
          routes={routes}
          statusCheckbox={statusCheckbox}
          setStatusCheckbox={setStatusCheckbox}
          setNumberCategory={setNumberCategory}
          setModal={setModal}
        />
      )}
      <CardsContainer>
        <CardsList>{renderSwitch()}</CardsList>
      </CardsContainer>
      <Footer />
    </>
  );
};
