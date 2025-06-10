import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
`;

export { Card, Image, Title };
