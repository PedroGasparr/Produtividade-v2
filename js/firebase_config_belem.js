 const firebaseConfig = {
            apiKey: "AIzaSyDZWkYdfV2Qy6Nhi9wUkmtkr-NjeWioLRA",
            authDomain: "produtividade-bc-belem.firebaseapp.com",
            projectId: "produtividade-bc-belem",
            storageBucket: "produtividade-bc-belem.firebasestorage.app",
            messagingSenderId: "798674110784",
            appId: "1:798674110784:web:10988b89bd1ff5d9f652a5",
            measurementId: "G-GF1C65E0MK"
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