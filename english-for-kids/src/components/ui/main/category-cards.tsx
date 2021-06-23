import styled from 'styled-components';
import categories from '../../categories';
import { CategoryCard } from './category-card';

const CardsContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const CategoryCards:React.FC = () => {
  return (
    <CardsContainer>
      <CardsList>
        {categories.map((cat) => {
          return <CategoryCard name={cat.name} image={cat.image} />;
        })}
      </CardsList>
    </CardsContainer>
  );
};
