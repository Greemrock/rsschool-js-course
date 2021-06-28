import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { IMainPageProps } from "../Shared/interface";
import { CategoryCards } from "./CategoryCards";
import { TrainCards } from "./TrainCards";

const CardsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const CardsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 0px 80px;
`;

export const Game: React.FC<IMainPageProps> = ({ title, cards }) => {
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
