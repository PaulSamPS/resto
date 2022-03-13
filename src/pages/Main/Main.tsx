import React from 'react';
import {useAppSelector} from '../../hooks/redux';
import {Card} from '../../components/Card/Card';
import {H1} from '../../styles/components';
import {Modal} from '../../components/Modal/Modal';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {MainProps} from './Main.props';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 223px - 155.6px);
`;

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

export const Main: React.FC<MainProps> = ({product}): JSX.Element => {
  const {cart} = useAppSelector((state) => state.cartReducer);
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <Container>
      <Title size={32}>{product.map((p) => p.categoryRu)[0]}</Title>
      <StyledProductBlock>
        {product.map((p) => <Card setModal={setModal} count={cart} key={p.id} product={p}/>)}
      </StyledProductBlock>
      {modal &&
        <Modal setModal={setModal}>
          <CardInfo count={cart}/>
        </Modal>
      }
    </Container>
  );
};

