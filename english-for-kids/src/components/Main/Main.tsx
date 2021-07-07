import { Route, Switch } from "react-router-dom";
import { IMainPageProps } from "../Shared/interface";
import { randomizer } from "../Shared/randomizer";
import { CategoryCards } from "./CategoryCard/CategoryCards";
import { GameCards } from "./GameMode/GameCards";
import { CardsContainer, CardsList } from "./Styled/Main.styled";

export const Main: React.FC<IMainPageProps> = ({ title, cards }) => {
  return (
    <CardsContainer>
      <CardsList>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <CategoryCards title={title} />}
          />
          {/* <Route
            path="/Action_setA"
            render={() => <CategoryCards title={title} />}
          />
          <Route
            path="/Action_setB"
            render={() => <CategoryCards title={title} />}
          />
          <Route
            path="/Animal_setA"
            render={() => <CategoryCards title={title} />}
          />
          <Route
            path="/Animal_setB"
            render={() => <CategoryCards title={title} />}
          />
          <Route
            path="/Clothes"
            render={() => <CategoryCards title={title} />}
          />
          <Route
            path="/Emotions"
            render={() => <CategoryCards title={title} />}
          /> */}
          {title.map((card) => {
            const cardsForTitle = cards[card.id];
            const randomCards = randomizer(cardsForTitle).slice();
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
