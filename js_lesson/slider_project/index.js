function Dog(name) {
    this.name = name;
    this.voice = function () {
        return 'arrr';
    }
}


let dog1 = new Dog('laika');
let dog2 = new Dog('bobik');
