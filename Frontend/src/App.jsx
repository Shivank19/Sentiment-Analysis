/* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom';
// import SentimentAnalysis from './SentimentAnalysis';
// import LandingPage from './LandingPage';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<LandingPage />}>
//       <Route index element={<LandingPage />} />
//       <Route path='predict' element={<SentimentAnalysis />} />
//     </Route>
//   )
// );

// function App({ routes }) {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Assuming your components are in separate files
import SentimentAnalysis from './SentimentAnalysis';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/predict' element={<SentimentAnalysis />} />
    </Routes>
  );
}

export default App;
