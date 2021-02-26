var nameVar = 'David'
nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

const fullName = 'David Salter'
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}