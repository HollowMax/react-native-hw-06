import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';

export default function App() {
  const [page, setPage] = useState('registration');

  const changePage = data => {
    setPage(data);
  };

  return (
    (page == 'registration' && (
      <RegistrationScreen changePage={() => changePage('login')} />
    )) ||
    (page == 'login' && (
      <LoginScreen setPage changePage={() => changePage('registration')} />
    ))
  );
}
