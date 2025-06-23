const firebaseConfig = {
  apiKey: "AIzaSyCybArOCPgqBDE-9PjachpOkf74cKdLC2g",
  authDomain: "produtividade-pa-aracruz.firebaseapp.com",
  databaseURL: "https://produtividade-pa-aracruz-default-rtdb.firebaseio.com",
  projectId: "produtividade-pa-aracruz",
  storageBucket: "produtividade-pa-aracruz.firebasestorage.app",
  messagingSenderId: "251537438254",
  appId: "1:251537438254:web:347f69ff527b1a271a91bf",
  measurementId: "G-YX90QS9HZC"
};

        // Inicializa Firebase e expõe variáveis globais
        window.app = firebase.initializeApp(firebaseConfig);
        window.database = firebase.database();
        window.auth = firebase.auth();

        // Referências do banco de dados expostas globalmente
        window.funcionariosRef = window.database.ref('funcionarios');
        window.carregamentosRef = window.database.ref('carregamentos');
        window.docasRef = window.database.ref('docas');
        window.unidadesRef = window.database.ref('unidades');
        window.metasRef = window.database.ref('metas');