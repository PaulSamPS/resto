import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import {Modal} from '../../../components/Modal/Modal';
import {H3} from '../../../styles/components';
import {device} from '../../../styles/breakpoints';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getGeo} from '../../../redux/actions/ActionCreator';
import './search.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  @media only screen and ${device.laptop} {
    grid-area: search!important;
    width: 100%;
  }
`;

const StyledLocationIcon = styled(LocationIcon)`
  position: absolute;
  top: 13px;
  left: 18px;

  cursor: pointer;
  transition: transform ease 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and ${device.laptopL} {
    top: 12px;
    width: 14px;
    height: 17px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 13px;
  right: 18px;

  cursor: pointer;
  transition: transform ease 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and ${device.laptopL} {
    top: 12px;
    width: 18px;
    height: 18px;
  }
`;

export const Search: React.FC = (): JSX.Element => {
  const [search, setSearch] = React.useState<DaDataSuggestion<DaDataAddress> | undefined>();
  const [modal, setModal] = React.useState<boolean>(false);
  // const [ip, setIp] = React.useState<string>('');
  // const [address, setAddress] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const {address} = useAppSelector((state) => state.geoReducer);
  const suggestionsRef = React.useRef<AddressSuggestions>(null);

  const handleClick = () => {
    if (suggestionsRef.current) {
      suggestionsRef.current.setInputValue(address);
    }
  };

  React.useEffect(() => {
    dispatch(getGeo());
  }, []);

  return (
    <Wrapper>
      {modal && search !== undefined &&
        <Modal setModal={setModal} modal={modal}>
          <H3 size={15}>Доставка по вашему адресу {search?.value} возможна</H3>
        </Modal>
      }
      <AddressSuggestions
        ref={suggestionsRef}
        token={`${process.env.REACT_APP_API_KEY}`}
        value={search}
        onChange={setSearch}
        inputProps={{placeholder: 'Введите адрес доставки'}}
        filterLocations={[{city: 'Оренбург'}]}
        filterFromBound={'street'}
        filterToBound={'street'}
      />
      <StyledLocationIcon onClick={handleClick}>
        <LocationIcon/>
      </StyledLocationIcon>
      <StyledSearchIcon>
        <SearchIcon/>
      </StyledSearchIcon>
    </Wrapper>
  );
};
