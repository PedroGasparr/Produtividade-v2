        const firebaseConfig = {
        apiKey: "AIzaSyCZxLrGt4BvU4GOhD5I4LqxyFYm1hpJwLk",
        authDomain: "produtividade-bc-imperatriz.firebaseapp.com",
        projectId: "produtividade-bc-imperatriz",
        storageBucket: "produtividade-bc-imperatriz.firebasestorage.app",
        messagingSenderId: "1065541326945",
        appId: "1:1065541326945:web:7096abb2900b6547e1f220",
        measurementId: "G-8R9M8RETYJ"
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