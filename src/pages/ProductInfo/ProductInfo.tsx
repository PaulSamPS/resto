import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Nav} from '../../components/Nav/Nav';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {ReactComponent as ArrowIcon} from './Icons/arrow.svg';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getInfoProduct} from '../../redux/actions/ActionCreator';
import {Button, Span, Flex} from '../../styles/components';
import styled from 'styled-components';

const BackButton = styled(Button)`
  ${Flex};
  margin-bottom: 30px;
  margin-top: 40px;
  margin-left: 115px;
  cursor: pointer;
  background: none;
  box-shadow: unset;
  padding: 0;
  column-gap: 10px;

  &:hover {
    span {
      color: var(--textWhite);
    }
  }
`;

const Icon = styled.div`
  background: var(--green);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  ${Flex};
`;

const StyledSpan = styled(Span)`
`;

export const ProductInfo: React.FC = (): JSX.Element => {
  const {id} = useParams();
  const productInfo = useAppSelector((state) => state.productInfoReducer.product);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getInfoProduct(id));
  }, [id]);

  return (
    <>
      <Nav/>
      <BackButton align={'center'} onClick={() => navigate('/')}>
        <Icon align={'center'} justify={'center'}><ArrowIcon/></Icon>
        <StyledSpan size={16} weight={600}>Вернуться назад</StyledSpan>
      </BackButton>
      <CardInfo product={productInfo}/>
    </>
  );
};
