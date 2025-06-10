import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export { PageWrapper, Title, Grid };
