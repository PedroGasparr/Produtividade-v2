 const firebaseConfig = {
            apiKey: "AIzaSyDZWkYdfV2Qy6Nhi9wUkmtkr-NjeWioLRA",
            authDomain: "produtividade-bc-belem.firebaseapp.com",
            projectId: "produtividade-bc-belem",
            storageBucket: "produtividade-bc-belem.firebasestorage.app",
            messagingSenderId: "798674110784",
            appId: "1:798674110784:web:10988b89bd1ff5d9f652a5",
            measurementId: "G-GF1C65E0MK"
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