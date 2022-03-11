import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getNav, getProduct} from '../../redux/actions/ActionCreator';
import {NavInterface} from '../../interfaces/nav.interface';
import {Flex, StyledA} from '../../styles/components';
import {useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledNav = styled.nav`
  ${Flex};
  margin: 28px 80px 0;
`;

const StyledLink = styled(StyledA)`
  padding-bottom: 30px;
  transform: translateY(2px);
  &:hover {
    border-bottom: 3px solid var(--green);
  }
`;

export const Nav: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const dispatch = useAppDispatch();
  const {nav} = useAppSelector((state) => state.navReducer);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (index: number, category: string) => {
    setActiveIndex(index);
    dispatch(getProduct(category));
    navigate('/');
  };

  React.useEffect(() => {
    dispatch(getNav());
    if (location.pathname !== '/') {
      setActiveIndex(null);
    }
  }, []);

  return (
    <Wrapper>
      <StyledNav align={'center'} justify={'space-between'}>
        {nav.map((n: NavInterface, index: number): JSX.Element =>
          <StyledLink
            key={n.id}
            onClick={() => handleClick(index, n.category)}
            linkColor={activeIndex === index ? 'var(--textWhite)' : 'var(--tetxGray)'}
            borderBtm={activeIndex === index ? '3px solid var(--green)' : '3px solid transparent'}
            size={18}
          >
            {n.name}
          </StyledLink>)}
      </StyledNav>
    </Wrapper>
  );
};

