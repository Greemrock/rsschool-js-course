import { useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { routePages } from "./components/shared/routes/routes";
import { store } from "./components/shared/store/store";
import { CardsContainer, CardsList } from "./App.styled";
import { CategoryCards } from "./components/Main/CategoryCards/CategoryCards";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Main/Login/Login";
import { AdminHeader } from "./components/AdminHeader/AdminHeader";
import { categoriesStore } from "./components/shared/categoriesStore";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [statusModal, setModal] = useState(false);
  const [login, setLogIn] = useState(false);
  const location = useLocation();
  // const [items, setItems] = useState<ICategory[]>([]);
  // useEffect(() => {
  //   const categories = getCategories();
  //   const data = async () => {
  //     setItems(await getCategories());
  //   };
  //   data();
  // }, [items]);
  return (
    <>
      {(location.pathname === "/categories" ||
        location.pathname === "/words") &&
        !login && <Redirect to="/" />}

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
          routes={categoriesStore}
          statusCheckbox={statusCheckbox}
          setStatusCheckbox={setStatusCheckbox}
          setModal={setModal}
        />
      )}
      <CardsContainer>
        <CardsList>
          <Switch>
            <Route exact path="/" render={() => <CategoryCards />} />
            {routePages.map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
            <Route
              path="/cards/:id"
              render={(routeProps) => <Main matchId={routeProps.match} />}
            />
          </Switch>
        </CardsList>
      </CardsContainer>
      <Footer />
    </>
  );
};
