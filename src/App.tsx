import React from 'react';
import styles from './App.module.scss';
import {H} from "./components/H/H";
import {Button} from "./components/Button/Button";
import {P} from "./components/P/P";

function App() {
  return (
    <div className={styles.app}>
      <H size={"h3"}>tt</H>
        <Button>В корзину</Button>
        <P size={"m"}>что-то написано</P>
    </div>
  );
}

export default App;
