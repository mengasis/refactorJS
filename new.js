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
        if(index !== -1 && this.passwords[index] === password){
          this.sessions.push(user);
        }
    }
}

let registeredUsers = {
    user1: 'pass1',
    user2: 'pass2',
    user3: 'pass3'
};

let login = new Login(registeredUsers);
console.log(login);

//login.login('user1', 'pass1')
