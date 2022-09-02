import { BallTriangle } from 'react-loader-spinner';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './LoaderSpinner.module.scss';

const LoaderSpinner = () => {
  return (
    <div className={s.LoaderSpinner}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#52b2fc"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

// const LoaderSpinner = () => {
//   return (
//     <div className={s.LoaderSpinner}>
//       <Loader
//         type="Watch"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={0}
//       />
//     </div>
//   );
// };

export default LoaderSpinner;
