class Login {

    // Se quitaron las instancias y dejo mas legible el codigo
    constructor(hash) {
        this.sessions = [];
        this.users = Object.keys(hash);
        this.passwords = Object.keys(hash).map(key => hash[key]);
    }

    // Se omitio a la funcion idx
    login(user, password) {
        var index = this.users.indexOf(user);
        if(index !== -1 && this.passwords[index] === password) {
            this.sessions.push(user);
        }
    }

    // Fue resumido todo el recorrido
    logout(user) {
        this.sessions = this.sessions.filter(item => item !== user);
    }

    // Se resumio toda la comparacion
    userExists(user) {
        if(this.users.indexOf(user) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    // Registrando el usuario usando spread
    registerUser(user, password) {
        this.users.push(...[user]);
        this.passwords.push(...[password]);
    }
}

let registeredUsers = {
    user1: 'pass1',
    user2: 'pass2',
    user3: 'pass3'
};

let login = new Login(registeredUsers);
login.login('user1', 'pass1')
login.login('user2', 'pass2')
login.login('user3', 'pass3')

//login.login('user1', 'pass1')
