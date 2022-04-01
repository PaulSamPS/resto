import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import {Modal} from '../../../components/Modal/Modal';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getGeo} from '../../../redux/actions/ActionCreator';
import {setAddress} from '../../../redux/reducers/AddressSlice';
import './search.scss';
import styles from './Search.module.scss';

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
    <div className={styles.wrapper}>
      {modal &&
        <Modal setModal={setModal} modal={modal}>
          {search?.value == undefined ? <h3>Некорректный адресс досставки</h3> :
          <h3>Доставка только по городу Оренбург</h3>}
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
      <div className={styles.location} onClick={handleClick}>
        <LocationIcon/>
      </div>
      <div className={styles.search} onClick={checkAddress}>
        <SearchIcon/>
      </div>
    </div>
  );
};
