import { toast } from 'react-toastify';

export const makeToastWarn = (text, type) => {
  return toast[type](text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
