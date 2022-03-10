import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import {Modal} from '../../../components/Modal/Modal';
import styles from './Search.module.scss';
import {H3} from '../../../styles/components';

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
    <div className={styles.search}>
      {modal && search !== undefined &&
        <Modal setModal={setModal} modal={modal}>
          <H3 size={15}>Доставка по вашему адресу {search.value} возможна</H3>
        </Modal>
      }
      <AddressSuggestions
        token={process.env.REACT_APP_API_KEY}
        value={search}
        onChange={setSearch}
        inputProps={{placeholder: 'Введите адрес доставки'}}
        filterLocations={[{city: 'Оренбург'}]}
      />
      <LocationIcon className={styles.locationIcon}/>
      <SearchIcon className={styles.searchIcon} onClick={handleAddressVerification}/>
    </div>
  );
};
