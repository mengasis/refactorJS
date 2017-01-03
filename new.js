class Login {

    // Se quitaron las instancias y dejo mas legible el codigo
    constructor(hash) {
        this.users = Object.keys(hash);
        this.passwords = Object.keys(hash).map(key => hash[key]);
    }
}


let registeredUsers = {
  user1: 'pass1',
  user2: 'pass2',
  user3: 'pass3'
};

let login = new Login(registeredUsers);
console.log(login);
