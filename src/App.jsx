import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from '@/components/Header';

function App() {
  const Cart = () => {
    return <div>WOE</div>;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={Cart} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
