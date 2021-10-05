import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Page from './Components/Page/Page';

import styles from './App.module.scss';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');
  return (
    <div className={styles.App}>
      <Header {...{ selectedPage }} changePageFn={setSelectedPage} />
      <Page {...{ selectedPage }} />
    </div>
  );
}

export default App;
