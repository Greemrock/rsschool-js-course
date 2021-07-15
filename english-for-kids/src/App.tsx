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
import { getCategories } from "./AdminPage/api/api";
import { ICategory } from "./components/Shared/interface";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [numberCategory, setNumberCategory] = useState(0);
  const [statusModal, setModal] = useState(false);
  const [login, setLogIn] = useState(false);
  const [items, setItems] = useState<ICategory[]>([]);
  useEffect(() => {
    const categories = getCategories();
    const data = async () => {
      setItems(await categories);
    };
    data();
  }, [items]);
  const renderSwitch = (): JSX.Element => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <CategoryCards
              routes={items}
              setNumberCategory={setNumberCategory}
            />
          )}
        />
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
            />
          );
        })}
        {items.map((route) => {
          return (
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
          routes={items}
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
