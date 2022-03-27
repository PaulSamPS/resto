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
import {setAddress} from '../../../redux/reducers/AddressSlice';

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
  const dispatch = useAppDispatch();
  const {address} = useAppSelector((state) => state.geoReducer);
  const suggestionsRef = React.useRef<AddressSuggestions>(null);

  const handleClick = () => {
    if (suggestionsRef.current) {
      suggestionsRef.current.setInputValue(address);
    }
  };

  const checkAddress = () => {
    if (search?.data.city != 'Оренбург') {
      setModal(true);
    }
    if (search?.value == undefined) {
      setModal(true);
    }
  };

  React.useEffect(() => {
    dispatch(getGeo());
  }, []);

  React.useEffect(() => {
    const address = {
      street: search?.data.street,
      street_type: search?.data.street_type,
      house: search?.data.house,
      house_type: search?.data.house_type,
      flat: search?.data.flat,
      flat_type: search?.data.flat_type,
      settlement_with_type: search?.data.settlement_with_type
    };
    dispatch(setAddress(address));
  }, [search]);

  return (
    <Wrapper>
      {modal &&
        <Modal setModal={setModal} modal={modal}>
          {search?.value == undefined ? <H3 size={15}>Некорректный адресс досставки</H3> :
          <H3 size={15}>Доставка только по городу Оренбург</H3>}
        </Modal>
      }
      <AddressSuggestions
        ref={suggestionsRef}
        token={`${process.env.REACT_APP_API_KEY}`}
        value={search}
        onChange={setSearch}
        inputProps={{placeholder: 'Введите адрес доставки'}}
        filterLocations={[{city: 'Оренбург'}]}
      />
      <StyledLocationIcon onClick={handleClick}>
        <LocationIcon/>
      </StyledLocationIcon>
      <StyledSearchIcon onClick={checkAddress}>
        <SearchIcon/>
      </StyledSearchIcon>
    </Wrapper>
  );
};
