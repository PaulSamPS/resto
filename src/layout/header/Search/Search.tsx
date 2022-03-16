import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import {Modal} from '../../../components/Modal/Modal';
import {H3} from '../../../styles/components';
import {device} from '../../../styles/breakpoints';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  @media only screen and ${device.laptop} {
    grid-area: search!important;
    width: 100%;
  }
`;

const SearchDadata = styled.div`
    ul {
      position: absolute;
      z-index: 999;

      width: 100%;

      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      background-color: var(--brown);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

      button {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        width: 100%;
        padding: 5px 18px;

        cursor: pointer;
        transition: all ease 0.2s;

        border: 0;
        outline: none;
        background-color: transparent;

        &:hover {
          background-color: var(--green);
          border-radius: 10px;
        }

        span {
          color: var(--tetxGray);
          background-color: transparent;
        }
      }
    }

    input {
      width: 100%;
      padding: 15px 48px;

      color: var(--tetxGray);
      border: none;
      border-radius: 10px;
      outline: none;
      background-color: var(--brown);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

      font-size: 18px;
      line-height: 21px;

      @media only screen and ${device.laptopL} {
        padding: 10px 48px;
      }

      &::-webkit-input-placeholder {
        opacity: 0.5;
        color: var(--tetxGray);

        @media only screen and ${device.laptopL} {
          font-size: 14px;
        }
      }
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

  const handleAddressVerification = () => {
    if (search?.value!.search('г Оренбург') !== -1 || search?.value !== undefined) {
      console.log('По вашему адресу доставка возможна');
    } else {
      console.log('По вашему адресу доставка не возможна');
    }
    setModal(true);
  };

  return (
    <Wrapper>
      {modal && search !== undefined &&
        <Modal setModal={setModal}>
          <H3 size={15}>Доставка по вашему адресу {search.value} возможна</H3>
        </Modal>
      }
      <SearchDadata>
        <AddressSuggestions
          token={'9c6db11104f3aee10143f74193f859ff74c58606'}
          value={search}
          onChange={setSearch}
          inputProps={{placeholder: 'Введите адрес доставки'}}
          filterLocations={[{city: 'Оренбург'}]}
        />
      </SearchDadata>
      <StyledLocationIcon>
        <LocationIcon/>
      </StyledLocationIcon>
      <StyledSearchIcon onClick={handleAddressVerification}>
        <SearchIcon/>
      </StyledSearchIcon>
    </Wrapper>
  );
};
