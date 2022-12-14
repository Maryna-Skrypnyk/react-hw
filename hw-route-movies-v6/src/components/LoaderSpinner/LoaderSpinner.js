import { Watch } from 'react-loader-spinner';
import styles from './LoaderSpinner.module.scss';

const LoaderSpinner = () => (
  <Watch
    height="100"
    width="100"
    radius="48"
    color="#00BFFF"
    ariaLabel="watch-loading"
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClassName={styles.LoaderSpinner}
    visible={true}
  />
);

export default LoaderSpinner;
