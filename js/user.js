firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Usuário logado
        const email = user.email;
        console.log("Email do usuário logado:", email);

        // Agora você pode salvar esse email no banco ou usá-lo onde quiser
        // Exemplo de salvar no Firebase Realtime Database:
        firebase.database().ref('usuarios/' + user.uid).set({
            email: user.email,
            nome: user.displayName || "Nome padrão"
        });
    } else {
        // Nenhum usuário logado
        console.log("Nenhum usuário logado.");
    }
});
