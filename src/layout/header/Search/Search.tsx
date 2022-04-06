import React from 'react';
import {ReactComponent as LocationIcon} from './icons/location.svg';
// import {ReactComponent as SearchIcon} from './icons/search.svg';
import {YMaps, withYMaps} from 'react-yandex-maps';
import {Input} from '../../../components/Input/Input';
import styles from './Search.module.scss';

export const Search: React.FC = (): JSX.Element => {
  const [searchMap, setSearchMap] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');

  const MapSuggestComponent = (props: any) => {
    const {ymaps} = props;

    React.useEffect(() => {
      const geo = () => {
        ymaps.geolocation.get({
          provider: 'auto',
          autoReverseGeocode: true
        }).then(function(result: any) {
          ymaps.geocode(result.geoObjects.get(0).geometry._coordinates, {results: 1}).then(function(res: any) {
            setSearch(res.geoObjects.get(0).getAddressLine());
          });
        });
      };
      const geoPos = document.getElementById('button');
      geoPos?.addEventListener('click', geo);
    }, []);

    React.useEffect(() => {
      const suggestView = new ymaps.SuggestView('suggest');
      const setAddress = () => {
        suggestView.events.add('select', (e: any) => {
          setSearch(e.get('item').value);
          setSearchMap(false);
        });
      };
      setAddress();
    }, [ymaps.SuggestView]);

    return <Input id='suggest' placeholder='Введите адрес доставки' className={styles.input} defaultValue={search} onClick={() => setSearchMap(true)}/>;
  };

  const SuggestComponent = React.useMemo(() => {
    return withYMaps(MapSuggestComponent, true, [
      'SuggestView',
      'geocode',
      'coordSystem.geo',
      'geolocation'
    ]);
  }, [search]);

  return (
    <div className={styles.wrapper}>
      {searchMap && <div className={styles.overlay} onClick={() => setSearchMap(false)}/>}
      <YMaps enterprise query={{apikey: 'e07291bb-96f5-473e-9bd7-f36aa1867dc0'}} onClick={() => setSearchMap(true)}>
        <SuggestComponent/>
      </YMaps>
      <div className={styles.location} id='button'>
        <LocationIcon/>
      </div>
      {/* <div className={styles.search}>*/}
      {/*  <SearchIcon/>*/}
      {/* </div>*/}
    </div>
  );
};
