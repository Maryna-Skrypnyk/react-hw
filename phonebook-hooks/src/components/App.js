import LocalizationContext from '../context/localization';
import Layout from './Layout';
import Container from './Container';
import ScrollUp from './ScrollUp';
import PhonebookPage from './PhonebookPage';
import LocaleSelector from './LocaleSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Layout>
      <Container>
        <ScrollUp />
        <LocalizationContext>
          <LocaleSelector />
          <PhonebookPage />
          <ToastContainer />
        </LocalizationContext>
      </Container>
    </Layout>
  );
};

export default App;
