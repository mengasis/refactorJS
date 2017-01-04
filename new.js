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
      return this.users.indexOf(user) !== -1;
    }

    // Registrando el usuario usando spread
    registerUser(user, password) {
        this.users.push(...[user]);
        this.passwords.push(...[password]);
    }

    // Se minimizo el codigo para hacerlo mas legible
    removeUser(user) {
      let index = this.users.indexOf(user);
      this.users = this.users.filter(item => item !== user);
      this.passwords = this.passwords.filter(item => item !== this.passwords[index]);
    }

    // Funcion minimizada
    checkPassword(user, password) {
      let index = this.users.indexOf(user);
      return index !== -1 && this.passwords[index] === password;
    }

    // Reutilizacion de la funcion checkPassword
    updatePassword(user, oldPassword, newPassword) {
      if(this.checkPassword(user, oldPassword)){
        this.passwords[this.users.indexOf(user)] = newPassword;
        return true;
      }
      return false;
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
