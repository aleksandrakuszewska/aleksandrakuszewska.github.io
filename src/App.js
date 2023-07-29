import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import SchoolPage from './components/Onas'; // Importujemy komponent SchoolPage
import Calendar from './components/Calendar';
import Details  from './components/Details';
import Cennik from './components/Cennik';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      {/* {user && <Route path="/" exact element={<Main />} />} */}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/onas" exact element={<SchoolPage />} />
      {/* <Route path="/calendar" exact element={<Calendar />}/> */}
      <Route path="/details" exact element={<Details />} />
      {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      <Route path="/" exact element={<Main />} />

      <Route path="/cennik" exact element={<Cennik />} />
    </Routes>
  );
}

export default App;
