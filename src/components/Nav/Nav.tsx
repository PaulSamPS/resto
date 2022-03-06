import React from 'react';
import axios from 'axios';
import {NavInterface} from '../../interfaces/nav.interface';
import cn from 'classnames';
import styles from './Nav.module.scss';

export const Nav: React.FC = () => {
  const [nav, setNav] = React.useState<NavInterface[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [category, setCategory] = React.useState<string>('');

  const handleClick = (index: number, name: string) => {
    setActiveIndex(index);
    setCategory(name);
  };

  React.useEffect(() => {
    const apiGet = async () => {
      const res = await axios.get<NavInterface[]>('/api/nav');
      setNav(res.data);
    };
    apiGet();
  }, []);

  console.log(category);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav}>
        {nav.map((n, index) =>
          <a
            key={n.id}
            onClick={() => handleClick(index, n.name)}
            className={cn(styles.link, {
              [styles.active]: index === activeIndex
            })}>
            {n.name}
          </a>)}
      </div>
    </nav>
  );
};

