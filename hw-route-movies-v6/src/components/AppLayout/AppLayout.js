import { Outlet } from 'react-router-dom';
import Container from '../Container';
import Navigation from '../Navigation';
import Footer from '../Footer';
import styles from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <>
      <header className={styles.Header}>
        <Container>
          {/* <div className={s.headerMenu}> */}
          <Navigation />
          {/* </div> */}
        </Container>
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
};

export default AppLayout;
