import React, { Suspense } from 'react';

import Routes from '../../routes';
import './App.css';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes />
  </Suspense>
);

export default App;
