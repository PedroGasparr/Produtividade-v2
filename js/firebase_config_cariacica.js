 const firebaseConfig = {
            apiKey: "AIzaSyBAH_sO68BD_vt9J40Hf8rdgLTNQEuEEBc",
            authDomain: "produtividade-bc.firebaseapp.com",
            projectId: "produtividade-bc",
            storageBucket: "produtividade-bc.appspot.com",
            messagingSenderId: "665932698083",
            appId: "1:665932698083:web:1c807c6b1571e3024bd0d6",
            measurementId: "G-608P3H613B"
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