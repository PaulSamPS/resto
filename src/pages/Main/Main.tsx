import React from 'react';
// import {Slider} from '../../components/Slider/Slider';
import {Nav} from '../../components/Nav/Nav';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getProduct} from '../../redux/actions/ActionCreator';
import {Card} from '../../components/Card/Card';
import {H1} from '../../styles/components';
import styled from 'styled-components';
import {Modal} from '../../components/Modal/Modal';
import {CardInfo} from '../../components/CardInfo/CardInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

export const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {product} = useAppSelector((state) => state.productReducer);
  const [modal, setModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <Container>
      {/* <Slider/>*/}
      <Nav/>
      <Title size={32}>{product.map((p) => p.categoryRu)[0]}</Title>
      <StyledProductBlock>
        {product.map((p) => <Card setModal={setModal} key={p.id} product={p}/>)}
      </StyledProductBlock>
      {modal &&
        <Modal setModal={setModal} modal={modal}>
          <CardInfo/>
        </Modal>
      }
    </Container>
  );
};

