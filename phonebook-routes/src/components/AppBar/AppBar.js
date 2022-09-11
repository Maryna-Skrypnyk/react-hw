import Navigation from '../Navigation';
import Container from '../Container';
import LocaleSelector from '../LocaleSelector';
import s from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={s.appBar}>
      <Container>
        <div className={s.headerMenu}>
          <Navigation />
          <LocaleSelector />
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
