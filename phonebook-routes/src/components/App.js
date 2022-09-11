import { Routes, Route } from 'react-router-dom';
import LocalizationContext from '../context/localization';
import Layout from './Layout';
import Container from './Container';
import AppBar from './AppBar';
import ScrollUp from './ScrollUp';
import HomePage from '../pages/HomePage';
import PhonebookPage from '../pages/PhonebookPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Layout>
      <LocalizationContext>
        <AppBar />
        <Container>
          <ScrollUp />

          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="contacts" element={<PhonebookPage />} />
          </Routes>

          <ToastContainer />
        </Container>
      </LocalizationContext>
    </Layout>
  );
};

export default App;
