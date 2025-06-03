        const firebaseConfig = {
        apiKey: "AIzaSyBro6tzlgNqVzfHnsPTVNIfQi4eKH7H7GM",
        authDomain: "produtividade-bc-teste.firebaseapp.com",
        projectId: "produtividade-bc-teste",
        storageBucket: "produtividade-bc-teste.firebasestorage.app",
        messagingSenderId: "505577175861",
        appId: "1:505577175861:web:0c31c493f6f22beec0ea7c",
        measurementId: "G-TFZDQGTYX6"
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