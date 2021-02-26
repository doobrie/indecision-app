class Person {
  constructor(name = 'Anonymous') {
    this.name = name
  }
}

const me = new Person('David Salter')
console.log(me)

const other = new Person()
console.log(other)