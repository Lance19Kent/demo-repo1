const person = {
    name:"Lance",
    age:22,
    hobbies: function(hobbies){
        return `${this.name} likes to ${hobbies}`;
    }
}

console.log(person.hobbies());