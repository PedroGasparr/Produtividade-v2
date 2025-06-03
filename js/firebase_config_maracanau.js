        const firebaseConfig = {
        apiKey: "AIzaSyD7Qbw6l9O_R2WIj6kr7AvGUFYk2WBfclA",
        authDomain: "produtividade-bc-maracanau.firebaseapp.com",
        projectId: "produtividade-bc-maracanau",
        storageBucket: "produtividade-bc-maracanau.firebasestorage.app",
        messagingSenderId: "615712010394",
        appId: "1:615712010394:web:e483c645d7c69aa92b6f23",
        measurementId: "G-LHM2NDR1YT"
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