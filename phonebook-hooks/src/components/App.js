import LocalizationContext from '../context/localization';
import PhonebookPage from './PhonebookPage';

const App = () => {
  return (
    <LocalizationContext>
      <PhonebookPage />
    </LocalizationContext>
  );
};

export default App;
