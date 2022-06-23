import { Store } from 'react-notifications-component';

type NotificationTypes = 'danger' | 'default' | 'info' | 'success' | 'warning';

export const showNotification = (type: NotificationTypes, title?: string, message?: string) => {
  Store.addNotification({
    title: title || null,
    message: message || null,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}

export default { showNotification };