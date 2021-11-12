import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { store } from "./components/shared/store/store";
import { CardsContainer, CardsList } from "./App.styled";
import { CategoryCards } from "./components/Main/CategoryCards/CategoryCards";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Main/Login/Login";
import { AdminHeader } from "./components/AdminHeader/AdminHeader";
import { ICategory } from "./components/shared/interface/interface";
import { getCategories } from "./components/api/api-category";
import { PageCategories } from "./components/PageCategories/PageCategories";
import { PageWords } from "./components/PageWords/PageWords";

export const App: React.FC = () => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);
  store.playMode = statusCheckbox;
  const [statusModal, setModal] = useState(false);
  const location = useLocation();
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const allCategories = async () => {
      setCategories(await getCategories());
    };
    allCategories();
  }, []);
  return (
    <>
      {(location.pathname === "/edit_category" ||
        location.pathname === "/words/:id") &&
        !localStorage.getItem("login") && <Redirect to="/" />}

      {localStorage.getItem("login") ? (
        <AdminHeader />
      ) : (
        <>
          <Login statusModal={statusModal} setModal={setModal} />
          <Header
            categories={categories}
            statusCheckbox={statusCheckbox}
            setStatusCheckbox={setStatusCheckbox}
            setModal={setModal}
          />
        </>
      )}
      <CardsContainer>
        <CardsList>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <CategoryCards categories={categories} />}
            />
            <Route path="/edit_category" component={PageCategories} />
            <Route
              path="/words/:id"
              render={(routeProps) => <PageWords matchId={routeProps.match} />}
            />
            <Route
              path="/category/:id"
              render={(routeProps) => <Main matchId={routeProps.match} />}
            />
          </Switch>
        </CardsList>
      </CardsContainer>
      <Footer />
    </>
  );
};
