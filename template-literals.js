let name = 'Joe';
// template strings can be multi line without throwing an error for syntax
// template literal can contain calculations as long as it returns a string
let description = `
    hello, I'm ${name + '!'}
`;
console.log(description);

// avoid calling a template literal like so
let name = 'Joe';
let description = `
    hello, I'm \${name + '!'}
`;
console.log(description);
