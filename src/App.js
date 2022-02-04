
import { useState } from 'react';
import {Menu, Form, LightBox} from './components';
import { homepageStatus } from './constants/HomepageStatus';

import { data } from './constants/data';

function App() {
  const [itemSelected, setItemSelected] = useState( data[0]);
  const [statusPage, setStatusPage] = useState(homepageStatus.IDLE);
  const setCurrentItem = (item) => setItemSelected(item);

  const showSuccessMessage = (values) => {
    console.log(values);
    setStatusPage(homepageStatus.SHOWING_LIGHTBOX);
    setTimeout(() => {
      setStatusPage(homepageStatus.IDLE);
    } , 2000);
  }

  return (
    <div className="App">
      <Menu items={data} setCurrentItem={setCurrentItem} current={itemSelected}/>
      <Form itemSelected={itemSelected} showSuccessMessage={showSuccessMessage} />
      <LightBox active={statusPage === homepageStatus.SHOWING_LIGHTBOX} />
    </div>
  );
}

export default App;
