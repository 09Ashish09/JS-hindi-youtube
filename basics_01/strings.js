const name="ashish";
const repoCount=50;
//string interpolation
console.log(`my name is ${name} and repo is ${repoCount}`);

//string declaration
const name2=new String('Ashish');
console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toLowerCase()); //lowercase
console.log(name2.toUpperCase()); //uppercase
const name3=name2.substring(0, 3); //substring
//trim, 
console.log(name2.replace('sh', 're'));
console.log(name2.includes('fh'));





