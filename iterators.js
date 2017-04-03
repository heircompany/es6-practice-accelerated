// MAKE SOMETHING ITERABLE
let person = {
    name: 'Joe',
    hobbies: ['Sports', 'Stocks', 'Walking', 'Programming'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false,
                    value: value
                };
            }
        };
    }
};

for(let hobby of person) {
    console.log(hobby);
};
