import { toast } from 'react-toastify';

export const notify = (message, type) => {
  if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
    });
  } else {
    toast.error(message, {
      position: 'bottom-right',
    });
  }
};
