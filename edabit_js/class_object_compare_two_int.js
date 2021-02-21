class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
    let age1 = this.age ;
    let age2 = other.age;
    let name = other.name;
    let state = '';
    if (age2 > age1) {
      state = 'is older than';
    } else if (age2 < age1) {
      state = 'is younger than';
    } else {
      state = 'the same age as';
    }
    return `${name} is ${state} me.`;
	}
}



p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
