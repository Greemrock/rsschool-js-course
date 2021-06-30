import { Redirect, Route, Switch } from "react-router-dom";
import { IMainPageProps } from "../Shared/interface";
import { CategoryCards } from "./CategoryCard/CategoryCards";
import { CardsContainer, CardsList } from "./Styled/Game.styled";
import { TrainCards } from "./TrainCard/TrainCards";

export const Main: React.FC<IMainPageProps> = ({ title, cards }) => {
  return (
    <CardsContainer>
      <CardsList>
        <Redirect from="/" to="/main" />
        <Switch>
          <Route
            exact
            path="/main"
            render={() => <CategoryCards title={title} />}
          />
          {title.map((c) => {
            const cardsForTitle = cards[c.id];
            return (
              <Route
                key={c.id}
                path={`/${c.link}`}
                render={() => <TrainCards cards={cardsForTitle} />}
              />
            );
          })}
        </Switch>
      </CardsList>
    </CardsContainer>
  );
};
