const firebaseConfig = {
        apiKey: "AIzaSyCuA2lYrKEAzqePDEFyfDp9L4Mh2chH8jk",
        authDomain: "produtividade-bc-mogi-cruzes.firebaseapp.com",
        projectId: "produtividade-bc-mogi-cruzes",
        storageBucket: "produtividade-bc-mogi-cruzes.firebasestorage.app",
        messagingSenderId: "867117239625",
        appId: "1:867117239625:web:463314856226302e585e98",
        measurementId: "G-CQ3LQ1SM0M"
        };

        window.app = firebase.initializeApp(firebaseConfig);
        window.database = firebase.database();
        window.auth = firebase.auth();

        // Referências do banco de dados expostas globalmente
        window.funcionariosRef = window.database.ref('funcionarios');
        window.carregamentosRef = window.database.ref('carregamentos');
        window.docasRef = window.database.ref('docas');
        window.unidadesRef = window.database.ref('unidades');
        window.metasRef = window.database.ref('metas');