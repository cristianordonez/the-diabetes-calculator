import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './template/Template';

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Template />} />
         </Routes>
      </>
   );
};

export default App;
