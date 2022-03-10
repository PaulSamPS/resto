import React from 'react';
// import {Slider} from '../../components/Slider/Slider';
import {Nav} from '../../components/Nav/Nav';
import {ProductBlock} from '../../components/ProductBlock/ProductBlock';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getProduct} from '../../redux/actions/ActionCreator';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {product} = useAppSelector((state) => state.productReducer);

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <Container>
      {/* <Slider/>*/}
      <Nav/>
      <ProductBlock products={product}/>
    </Container>
  );
};

