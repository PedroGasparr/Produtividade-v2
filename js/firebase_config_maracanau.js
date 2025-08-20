        const firebaseConfig = {
        apiKey: "AIzaSyDmhnN2jEQWMeAwSLJiAfNHUapM5_HgiOw",
        authDomain: "appguizilim.firebaseapp.com",
        databaseURL: "https://appguizilim-default-rtdb.firebaseio.com",
        projectId: "appguizilim",
        storageBucket: "appguizilim.firebasestorage.app",
        messagingSenderId: "669241709255",
        appId: "1:669241709255:web:bde10d035254b74c9724e2",
        measurementId: "G-J2MKLZ5XL0"
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