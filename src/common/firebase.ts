import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig =
  process.env.NODE_ENV === 'production'
    ? {
        apiKey: 'AIzaSyDsYGMurjKosgDisnXN5PkPDB8hb34qXDc',
        authDomain: 'ain-connect-api-server.firebaseapp.com',
        databaseURL: 'https://ain-connect-api-server.firebaseio.com',
        projectId: 'ain-connect-api-server',
        storageBucket: 'ain-connect-api-server.appspot.com',
        messagingSenderId: '992952534673',
        appId: '1:992952534673:web:82d9f7b070d70506066130',
        measurementId: 'G-ZZWBE57SGE',
      }
    : {
        apiKey: 'AIzaSyDa6-Muw27_oczpCHOe8kVAZzuQ5BgCkS4',
        authDomain: 'ain-connect-api-server-dev.firebaseapp.com',
        databaseURL: 'https://ain-connect-api-server-dev.firebaseio.com',
        projectId: 'ain-connect-api-server-dev',
        storageBucket: 'ain-connect-api-server-dev.appspot.com',
        messagingSenderId: '799118803554',
        appId: '1:799118803554:web:508677f48e6bdf5e5b473b',
        measurementId: 'G-9DZCTCN5FH',
      };

firebase.initializeApp(firebaseConfig);

export default firebase;
