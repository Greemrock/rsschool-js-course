import { Redirect, Route, Switch } from "react-router-dom";
import { IMainPageProps } from "../Shared/interface";
import { randomizer } from "../Shared/randomizer";
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
          {title.map((card) => {
            const cardsForTitle = cards[card.id];
            const randomCards = randomizer(cardsForTitle).slice();
            if (!statusCheckbox) {
              return (
                <Route
                  key={card.id}
                  path={`/${card.link}`}
                  render={() => (
                    <TrainCards
                      cards={cardsForTitle}
                      title={card.title}
                      randomCards={randomCards}
                    />
                  )}
                />
              );
            }
            return (
              <Route
                key={card.id}
                path={`/${card.link}`}
                render={() => (
                  <GameCards
                    cards={cardsForTitle}
                    title={card.title}
                    randomCards={randomCards}
                  />
                )}
              />
            );
          })}
        </Switch>
      </CardsList>
    </CardsContainer>
  );
};
