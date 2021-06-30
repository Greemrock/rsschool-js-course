import { Redirect, Route, Switch } from "react-router-dom";
import { IMainPageProps } from "../Shared/interface";
import { CategoryCards } from "./CategoryCard/CategoryCards";
import { GameCards } from "./GameMode/GameCards";
import { CardsContainer, CardsList } from "./Styled/Main.styled";
import { TrainCards } from "./TrainMode/TrainCards";

export const Main: React.FC<IMainPageProps> = ({
  title,
  cards,
  statusCheckbox,
}) => {
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
            if (!statusCheckbox) {
              return (
                <Route
                  key={c.id}
                  path={`/${c.link}`}
                  render={() => (
                    <TrainCards cards={cardsForTitle} title={c.title} />
                  )}
                />
              );
            }
            return (
              <Route
                key={c.id}
                path={`/${c.link}`}
                render={() => (
                  <GameCards cards={cardsForTitle} title={c.title} />
                )}
              />
            );
          })}
        </Switch>
      </CardsList>
    </CardsContainer>
  );
};
