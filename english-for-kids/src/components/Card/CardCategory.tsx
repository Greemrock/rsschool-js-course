import styled from "styled-components";

interface CategoryCardProps {
  name: string;
  image: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 3 - 20px);
  height: fit-content;
  max-width: 320px;
  border-radius: 5px;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover,
  &:focus {
    box-shadow: 0px 0px 28px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.1, 1.1);
    cursor: pointer;
    transition: all 0.8s ease;
  }
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content-box;
  }
  div {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    background-color: #ffffff;
    border-radius: 0 0 5px 5px;
  }
`;

export const CardCategory: React.FC<CategoryCardProps> = ({ name, image }) => {
  return (
    <Card data-categories={name}>
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
      </div>
    </Card>
  );
};
