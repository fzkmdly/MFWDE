import {Workbox} from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Web is not support service worker');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker has been registered');
  } catch (error) {
    console.error('Service worker failed to register', error);
  }
};

export default swRegister;
