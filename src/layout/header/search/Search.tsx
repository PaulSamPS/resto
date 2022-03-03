import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import styles from './Search.module.scss';

export const Search: React.FC = (): JSX.Element => {
  const [search, setSearch] = React.useState<DaDataSuggestion<DaDataAddress> | undefined>();

  return (
    <div className={styles.search}>
      <AddressSuggestions token={process.env.REACT_APP_API_KEY} value={search} onChange={setSearch} inputProps={{placeholder: 'Введите адрес доставки'}}/>
      <LocationIcon className={styles.locationIcon}/>
      <SearchIcon className={styles.searchIcon}/>
    </div>
  );
};
