import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  // @media only screen and (max-width: 800px){
  //   max-width: 100vw;
  //   display: flex;
  //   flex-direction:row;
  //   flex-wrap:wrap;
  // }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 800px){
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: unset;
    grid-gap: unset;
    
  }
`;