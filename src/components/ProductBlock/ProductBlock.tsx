import React from 'react';
import {Card} from '../Card/Card';
import {ProductsBlockProps} from './ProductsBlock.props';
import {H1} from '../../styles/components';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled(H1)`
  margin-bottom: 40px;
  margin-left: 115px;
  padding-left: 20px;
  border-left: 4px solid var(--green);
`;

const StyledProductBlock = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 20px;
`;

export const ProductBlock: React.FC<ProductsBlockProps> = ({products}) => {
  return (
    <Wrapper>
      <Title size={32}>{products.map((p) => p.categoryRu)[0]}</Title>
      <StyledProductBlock>
        {products.map((p) => <Card key={p.id} product={p}/>)}
      </StyledProductBlock>
    </Wrapper>
  );
};

