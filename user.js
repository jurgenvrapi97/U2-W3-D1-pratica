class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstNama = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  older(otheruser) {
    if (this.age > otheruser.age) {
      return this.firstNama + ' è più vecchio di ' + otheruser.firstNama
    } else return otheruser.firstNama + ' è più vecchio di ' + this.firstNama
  }
}

const user1 = new User('Marco', 'rossi', 19, 'milano')
const user2 = new User('Giulio', 'verde', 30, 'roma')

console.log(user1, user2)

console.log(user1.older(user2))
