import React from 'react';
import {Input} from '../../../components/Input/Input';
import {ReactComponent as LocationIcon} from './icons/location.svg';
import {ReactComponent as SearchIcon} from './icons/search.svg';
import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      console.log(e);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <Input
        className={styles.input}
        placeholder='Введите адрес доставки'
        value={search}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}/>
      <LocationIcon className={styles.locationIcon}/>
      <SearchIcon className={styles.searchIcon}/>
    </div>
  );
};
