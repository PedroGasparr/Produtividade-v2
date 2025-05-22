 const firebaseConfig = {
            apiKey: "AIzaSyBAH_sO68BD_vt9J40Hf8rdgLTNQEuEEBc",
            authDomain: "produtividade-bc.firebaseapp.com",
            projectId: "produtividade-bc",
            storageBucket: "produtividade-bc.appspot.com",
            messagingSenderId: "665932698083",
            appId: "1:665932698083:web:1c807c6b1571e3024bd0d6",
            measurementId: "G-608P3H613B"
        };

        const app = firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        const auth = firebase.auth();

        // Referências do banco de dados
        const funcionariosRef = database.ref('funcionarios');
        const carregamentosRef = database.ref('carregamentos');
        const docasRef = database.ref('docas');
        const unidadesRef = database.ref('unidades');
        const metasRef = database.ref('metas');