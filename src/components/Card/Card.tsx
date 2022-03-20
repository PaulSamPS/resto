import React from 'react';
import {CardProps} from './Card.props';
import {ReactComponent as BuyIcon} from './Icons/buy.svg';
import {ReactComponent as MinusIcon} from './Icons/minus.svg';
import {ReactComponent as PlusIcon} from './Icons/plus.svg';
import {useAppDispatch} from '../../hooks/redux';
import {Button, Flex, H3, Img, P, Span} from '../../styles/components';
import {getInfoProduct} from '../../redux/actions/ActionCreator';
import {setCart, minusItem} from '../../redux/reducers/CartSlice';
import {device} from '../../styles/breakpoints';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  ${Flex};
  position: relative;
  width: 327px;
  transition: all ease 0.2s;
  border-radius: 10px;
  background: var(--brownGradient);

  a {
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
  }

  @media only screen and ${device.desktop} {
    width: 300px;
  }
`;

const StyledImg = styled(Img)`
  cursor: pointer;
  border-radius: 10px 10px 0 0;

  @media only screen and ${device.desktop} {
    width: 300px;
  }
`;

const Top = styled.div`
  padding: 15px 20px 0;
  ${Flex}
`;

const ButtonAddToCart = styled(Button)`
  height: 44px;
  ${Flex};
  column-gap: 12px;

  @media only screen and ${device.laptopL} {
    font-size: 12px;
  }
`;

const Description = styled(P)`
  margin-top: 10px;
  max-width: 250px;
  padding: 0 20px;
  flex-grow: 1;
  
  @media only screen and ${device.desktop} {
    width: 220px;
  }

  @media only screen and ${device.laptopL} {
    width: 200px;
    font-size: 11px;
  }
`;

const Bottom = styled(motion.div)`
  padding: 0 20px 20px;
  margin-top: 15px;
  ${Flex}
`;

const BottomCount = styled(motion.div)`
  padding: 0 20px 20px;
  margin-top: 15px;
  ${Flex}
`;

const Count = styled(motion.div)`
  position: absolute;
  top: -12px;
  right: -12px;
  ${Flex};
  height: 50px;
  width: 50px;
  color: var(--textWhite);
  border-radius: 50%;
  background: var(--green);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const Card: React.FC<CardProps> = ({product, count, setModal}) => {
  const dispatch = useAppDispatch();
  const itemCount = count.filter((item) => item.id === product.id);

  const variants = {
    show: {opacity: 1},
    hide: {opacity: 0},
  };

  const handleItemInfo = () => {
    dispatch(getInfoProduct(product.id));
    setModal(true);
  };

  const addProductToCart = () => {
    dispatch(setCart(product));
  };

  const handleMinusItem = () => {
    dispatch(minusItem(product));
  };

  return (
    <Wrapper
      direction={'column'}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
    >
      <StyledImg onClick={handleItemInfo} height={227} width={327} src={product.image} alt={product.name}/>
      <Top align={'baseline'} justify={'space-between'}>
        <H3 size={20}>{product.name}</H3>
        <Span color={'#CFCFCF'} size={12} weight={400}>Вес: {product.weight} г</Span>
      </Top>
      <Description size={13}>{product.description}</Description>
      <AnimatePresence>
        {itemCount && itemCount.length > 0 ?
          <Bottom
            align={'center'}
            justify={'space-between'}
            animate={itemCount && itemCount.length > 0 ? 'show' : 'hide'}
            variants={variants}
            initial={'hide'}
            exit={'show'}
            transition={{
              duration: 1
            }}
          >
            <ButtonAddToCart align={'center'} onClick={handleMinusItem}>
              <MinusIcon />
            </ButtonAddToCart>
            <Span size={20} weight={600}>{product.price} ₽</Span>
            <ButtonAddToCart align={'center'} onClick={addProductToCart}>
              <PlusIcon />
            </ButtonAddToCart>
          </Bottom> :
          <BottomCount
            align={'center'}
            justify={'space-between'}
            animate={itemCount && itemCount.length > 0 ? 'hide' : 'show'}
            variants={variants}
            initial={'show'}
            exit={'hide'}
            transition={{
              duration: 1
            }}
          >
            <Span size={20} weight={600}>{product.price} ₽</Span>
            <ButtonAddToCart align={'center'} onClick={addProductToCart}>
              В корзину
              <BuyIcon />
            </ButtonAddToCart>
          </BottomCount>
        }
      </AnimatePresence>
      {itemCount && itemCount.map((i) =>
        <AnimatePresence key={i.id}>
          {itemCount &&
            <Count
              align={'center'}
              justify={'center'}
              animate={itemCount ? 'show' : 'hide'}
              variants={variants}
              initial={'hide'}
              exit={'show'}
              transition={{
                duration: .5
              }}
            >
              {i.qty}
            </Count>
          }
        </AnimatePresence>
      )}
    </Wrapper>
  );
};

