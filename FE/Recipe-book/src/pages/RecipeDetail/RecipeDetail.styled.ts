import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
`;

const Main = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin-top: 0.5rem;
`;

const Subtitle = styled.p`
  font-weight: bold;
  color: #1e90ff;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Instructions = styled.div`
  margin-top: 2rem;
  line-height: 1.5;
`;

const Ingredients = styled.ul`
  margin-top: 2rem;
  padding-left: 1rem;
`;

const Ingredient = styled.li`
  list-style: disc;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #1e90ff;
    text-decoration: underline;
  }
`;

export { Container, Main, Image, Title, Subtitle, Instructions, Ingredients, Ingredient };
